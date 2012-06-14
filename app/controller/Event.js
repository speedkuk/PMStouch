Ext.define('PMStouch.controller.Event', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            event: 'event',
				lastTime: 'event > #eventForm [itemId=lastTime]',
				lastEvent: 'event > #eventForm [itemId=lastEvent]',
				lastProjectCode: 'event > #eventForm [itemId=lastProjCode]',
				userField: 'event > #eventForm [itemId=user]',
				projectField: 'event > #eventForm [itemId=project]',
				moreButton: 'event > #eventForm [itemId=more]'
	        },
		
	        control: {
				event : {
					initialize : 'onInitialize'
				},
	            userField: {
	                focus: 'selectUser',
					change: 'changeUser'
	            },
				projectField: {
	                focus: 'selectProject'
	            },
				moreButton: {
	                tap: 'eventMore'
	            }
	        }
	    },
	
		onInitialize: function() {
			var self = this;
			var defaultuser = PMStouch.setting.get('DefaultUser');
			var username;
			
			if(defaultuser) {
				username = defaultuser;
			} else {
				var lastuser = PMStouch.setting.get('LastUser');
				if(lastuser) {
					username = lastuser.resId;
				}
			}
			
			if(username) {
				this.getUserField().setValue(username);
			}
		},

	    selectUser: function(field) {
	        this.getEvent().push({
				xtype: 'reslist',
				target: field,
				navigationView: this.getEvent()
			});
	    },
	
		changeUser: function(field, value) {
			var self = this;
			var store = Ext.getStore('RasViewResourceOut');
			store.load({
				callback : function(records) {
					var rc = records[0].data;

					PMStouch.setting.set('LastUser', rc);

			        self.getLastTime().setValue(rc.lastEventTime);
			        self.getLastEvent().setValue(rc.lastEventId);
			        // self.lastProjectCode().setValue(rc.xx);
				}
			});
	    },
	
		selectProject: function(field) {
	        this.getEvent().push({
				xtype: 'projectcode',
				target: field,
				navigationView: this.getEvent()
			});
	    },
	
		changeProject: function(field, value) {
			PMStouch.setting.set('LastProject', value);
			
			this.getProjectField().setValue(value);
		},
		
		eventMore: function(field) {
	        this.getEvent().push({
				xtype: 'eventmore'
			});
	    }
});
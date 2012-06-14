Ext.define('PMStouch.controller.EventMore', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
				event: 'event',
	            eventMore: 'eventmore',
				lastTime: 'eventmore [itemId=lastTime]',
				lastEvent: 'eventmore [itemId=lastEvent]',
				lastProjectCode: 'eventmore [itemId=lastProjCode]',
				userField: 'eventmore [itemId=user]',
				projectField: 'eventmore [itemId=project]',
				eventField: 'eventmore [itemId=event]',
				parentProjectField: 'event > #eventForm [itemId=project]',
	        },
		
	        control: {
				eventMore : {
					initialize : 'onInitialize'
				},
	            userField: {
	                focus: 'selectUser',
					change: 'changeUser'
	            },
				projectField: {
	                focus: 'selectProject',
					change: 'changeProject'
	            },
				eventField : {
	                focus: 'selectEvent',
					change: 'changeEvent'
	            }
	        }
	    },

		onInitialize : function() {
			var lastuser = PMStouch.setting.get('LastUser');
			var lastproj = PMStouch.setting.get('LastProject');
			var lastevent = PMStouch.setting.get('LastEvent');
			
			this.getUserField().setValue(lastuser.resId);
	        this.getLastTime().setValue(lastuser.lastEventTime);
	        this.getLastEvent().setValue(lastuser.lastEventId);
	        // this.lastProjectCode().setValue(lastuser.xx);

			this.getProjectField().setValue(lastproj);
			this.getEventField().setValue(lastevent);
		},
		
	    selectUser: function(field) {
	        this.getEvent().push({
				xtype: 'reslist',
				target: field,
				navigationView: this.getEvent()
			});
	    },
	
		changeUser: function(field, value) {
			console.log(value);
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
		},
	
		selectEvent: function(field) {
	        this.getEvent().push({
				xtype: 'eventlist',
				target: field,
				navigationView: this.getEvent()
			});
	    },
	
		changeEvent: function(field, value) {
			PMStouch.setting.set('LastEvent', value);
		}
});
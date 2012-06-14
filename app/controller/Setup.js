Ext.define('PMStouch.controller.Setup', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            setup: 'setup',
				userField: 'setup [itemId=user]',
				projectField: 'setup [itemId=project]'
	        },
		
	        control: {
				setup : {
					initialize : 'onInitialize'
				},
	            userField: {
	                focus: 'selectUser',
					change: 'changeUser'
				},
	            projectField: {
	                focus: 'selectProject',
					change: 'changeProject'
	            }
	        }
	    },

		onInitialize : function() {
			this.getUserField().setValue(PMStouch.setting.get('DefaultUser'));
			this.getProjectField().setValue(PMStouch.setting.get('DefaultProject'));
		},
		
	    selectUser: function(field) {
	        this.getSetup().push({
				xtype: 'reslist',
				target: field,
				navigationView: this.getSetup()
			});
	    },
	
		changeUser: function(field, value) {
			PMStouch.setting.set('DefaultUser', value);
		},
		
	    selectProject: function(field) {
	        this.getSetup().push({
				xtype: 'projectcode',
				target: field,
				navigationView: this.getSetup()
			});
	    },
	
		changeProject: function(field, value) {
			PMStouch.setting.set('DefaultProject', value);
		}
		
});
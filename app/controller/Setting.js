Ext.define('PMStouch.controller.Setting', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            setting: 'setting',
				userField: 'setting [itemId=user]',
				projectField: 'setting [itemId=project]',
				billingField: 'setting [itemId=billing]',
				userListButton: 'setting button[itemId=userlist]',
				projListButton: 'setting button[itemId=projlist]'
	        },
		
	        control: {
				setting : {
					initialize : 'onInitialize'
				},
	            userField: {
					change: 'changeUser'
	            },
				userListButton: {
					tap : 'selectUser'
				},
				projectField: {
					change: 'changeProject'
	            },
				projListButton: {
	                tap: 'selectProject'
				},
				billingField: {
					change: 'changeBilling'
				}
	        }
	    },

		onInitialize : function() {
			this.getUserField().setValue(PMStouch.setting.get('DefaultUser'));
			this.getProjectField().setValue(PMStouch.setting.get('DefaultProject'));
			this.getBillingField().setValue(PMStouch.setting.get('DefaultBilling') === 'N' ? 0 : 1);
		},
		
	    selectUser: function(field) {
	        this.getSetting().push({
				xtype: 'reslist',
				target: this.getUserField(),
				navigationView: this.getSetting()
			});
	    },
	
		changeUser: function(field, value) {
			PMStouch.setting.set('DefaultUser', value);
		},
		
	    selectProject: function(field) {
	        this.getSetting().push({
				xtype: 'projectcode',
				target: this.getProjectField(),
				navigationView: this.getSetting()
			});
	    },
	
		changeProject: function(field, value) {
			PMStouch.setting.set('DefaultProject', value);
		},

		changeBilling: function(field, x, y, value) {
			PMStouch.setting.set('DefaultBilling', value ? 'Y' : 'N');
		}
		
});
Ext.define('PMStouch.controller.Setup', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            setup: 'setup'
	        },
		
	        control: {
	            'setup [itemId=user]': {
	                focus: 'selectUser'
	            }
	        }
	    },

	    selectUser: function(field) {
	        this.getSetup().push({
				xtype: 'reslist',
				target: field,
				navigationView: this.getSetup()
			});
	    }
});
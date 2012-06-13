Ext.define('PMStouch.controller.ProjectCodeList', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            projectcode: 'projectcode'
	        },
		
	        control: {
	            'projectcode': {
	                itemtap: 'selectResource'
	            }
	        }
	    },

	    selectResource: function(field, index, target, record) {
			this.getProjectcode().config.target.setValue(record.get('key1'));
			this.getProjectcode().config.navigationView.pop();
	    }
});
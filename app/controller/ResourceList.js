Ext.define('PMStouch.controller.ResourceList', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            reslist: 'reslist'
	        },
		
	        control: {
	            'reslist': {
	                itemtap: 'selectResource'
	            }
	        }
	    },

	    selectResource: function(field, index, target, record) {
			this.getReslist().config.target.setValue(record.get('resId'));
			this.getReslist().config.navigationView.pop();
	    }
});
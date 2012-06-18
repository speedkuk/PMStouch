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
			this.getReslist().config.displayTarget.setValue(record.get('resDesc'));
			this.getReslist().config.valueTarget.setValue(record.get('resId'));
			this.getReslist().config.navigationView.pop();
	    }
});
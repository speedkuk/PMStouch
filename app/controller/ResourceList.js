Ext.define('PMStouch.controller.ResourceList', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            reslist: 'reslist',
				search: 'reslist [itemId=search]'
	        },
		
	        control: {
	            reslist: {
					initialize: 'onInit',
	                itemtap: 'selectResource'
	            },
				search: {
					change: 'onSearch'
				}
	        }
	    },
	
		onInit: function() {
			this.getSearch().setValue(PMStouch.setting.get('ResourceFilter'));
		},
		
		onSearch: function(field, value) {
			this.getReslist().getStore().filter('resDesc', value);
			PMStouch.setting.set('ResourceFilter', value);
		},
		
	    selectResource: function(field, index, target, record) {
			this.getReslist().config.displayTarget.setValue(record.get('resDesc'));
			this.getReslist().config.valueTarget.setValue(record.get('resId'));
			this.getReslist().config.navigationView.pop();
	    }
});
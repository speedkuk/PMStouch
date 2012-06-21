Ext.define('PMStouch.controller.ProjectCodeList', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            projectcode: 'projectcode',
				search: 'projectcode [itemId=search]'
	        },
		
	        control: {
	            projectcode: {
					initialize: 'onInit',
	                itemtap: 'selectProject'
	            },
				search: {
					change: 'onSearch'
				}
	        }
	    },
	
		onInit: function() {
			this.getSearch().setValue(PMStouch.setting.get('ProjectFilter'));
		},
	
		onSearch: function(field, value) {
			this.getProjectcode().getStore().clearFilter(true);
			this.getProjectcode().getStore().filter('data2', value);
			PMStouch.setting.set('ProjectFilter', value);
		},

	    selectProject: function(field, index, target, record) {
			this.getProjectcode().config.displayTarget.setValue(record.get('data2'));
			this.getProjectcode().config.valueTarget.setValue(record.get('key1'));
			this.getProjectcode().config.navigationView.pop();
	    }
});
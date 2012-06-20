Ext.define('PMStouch.controller.Main', {
	extend: 'Ext.app.Controller',
	
    config: {
		routes: {
			main: 'onMain'
		},
		
        refs: {
            main: 'main'
        },

        control: {
            main: {
                initialize: 'onInit'
            }
        }
    },

	onMain: function() {
		Ext.getStore('BasViewDataListOut').load();
		Ext.getStore('RasViewEventListOut').load();
		Ext.getStore('RasViewResourceListOut').load();

		Ext.Viewport.removeAll(true, true);
		Ext.Viewport.add(Ext.create('PMStouch.view.Main', {}));
	},

	onInit: function() {
	}
});
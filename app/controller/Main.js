Ext.define('PMStouch.controller.Main', {
	extend: 'Ext.app.Controller',
	
    config: {
        refs: {
            main: 'main'
        },

        control: {
            main: {
                initialize: 'onInit'
            }
        }
    },

	onInit: function() {
	}
});
//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src',
	'PMStouch': 'app',
	'PMStouch.mixin': 'app/mixin'
});
//</debug>

Ext.define('PMStouch', {
	singleton : true,
	mixins : {
		setting : 'PMStouch.mixin.Setting'
	}
});

Ext.application({
    name: 'PMStouch',

    requires: [
        'Ext.MessageBox'
    ],

	controllers: ['Event', 'ResourceList', 'Setup', 'ProjectCodeList', 'EventMore', 'EventList'],
    views: ['TimePicker', 'TimePickerField', 'Main', 'ResourceList', 'ResourceHistory', 'EventList', 'ProjectCodeList', 'Login', 'Event', 'EventMore', 'Setup'],
	stores : ['RasViewResourceListOut', 'RasViewResourceOut', 'RasViewEventListOut', 'BasViewDataListOut'],
	models : ['RasViewResourceListOut.resList', 'RasViewResourceOut', 'RasViewEventListOut.eventList', 'BasViewDataListOut.dataList'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('PMStouch.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});

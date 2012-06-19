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

Date.prototype.toString = function() {
	return Ext.Date.format(this, 'Y-m-d H:i:s');
};

Ext.application({
    name: 'PMStouch',

    requires: [
        'Ext.MessageBox'
    ],

	controllers: ['Event', 'ResourceList', 'Setting', 'ProjectCodeList', 'EventMore', 'EventList', 'ResourceHistory'],
    views: ['TimePicker', 'TimePickerField', 'Main', 'ResourceList', 'ResourceHistory', 'EventList', 'ProjectCodeList', 'Event', 'EventMore', 'Setting'],
	stores : ['RasViewResourceListOut', 'RasViewResourceOut', 'RasViewEventListOut', 'BasViewDataListOut', 'RasViewResourceHistoryOut'],
	models : ['RasViewResourceListOut.resList', 'RasViewResourceOut', 'RasViewEventListOut.eventList', 'BasViewDataListOut.dataList', 'RasViewResourceHistoryOut.histList'],

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

		Ext.Date.defaultFormat = 'Y-m-d H:i:s';

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

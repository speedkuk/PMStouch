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
		setting : 'PMStouch.mixin.Setting',
		base64 : 'PMStouch.mixin.Base64'
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

	controllers: ['Main', 'Login', 'Event', 'ResourceList', 'Setting', 'ProjectCodeList', 'EventMore', 'EventList', 'ResourceHistory'],
    views: ['Login', 'TimePicker', 'TimePickerField', 'Main', 'ResourceList', 'ResourceHistory', 'EventList', 'ProjectCodeList', 'Event', 'EventMore', 'Setting'],
	stores : ['RasViewResourceListOut', 'RasViewResourceOut', 'RasViewEventListOut', 'BasViewDataListOut', 'RasViewResourceHistoryOut', 'FilteredRasViewResourceListOut', 'FilteredBasViewDataListOut'],
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

		Ext.Date.defaultFormat = 'Y-m-d H:i:s';

		this.autoLogin();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "프로그램 업데이트",
            "이 프로그램이 새로운 버전을 다운로드하였습니다. 페이지를 새로 여시겠습니까?",
            function() {
                window.location.reload();
            }
        );
    },

	gotoLogin: function() {
		Ext.Viewport.removeAll(true, true);
		Ext.Viewport.add(Ext.create('PMStouch.view.Login', {})).show();
	},
	
	gotoMain: function() {
		var count = 0;

		function forSync() {
			if(++count === 3) {
				Ext.Viewport.removeAll(true, true);
				Ext.Viewport.add(Ext.create('PMStouch.view.Main', {})).show();
			}
		}

		Ext.getStore('BasViewDataListOut').load(forSync);
		Ext.getStore('RasViewEventListOut').load(forSync);
		Ext.getStore('RasViewResourceListOut').load(forSync);
	},
	
	autoLogin: function() {
		var self = this;
		var login = PMStouch.setting.get('DefaultLogin');
		var pwd = PMStouch.base64.decode(PMStouch.setting.get('DefaultPassword'));
		var company = PMStouch.setting.get('DefaultCompany') || 'MIRACOM';

		if(!login) {
			Ext.Viewport.removeAll(true, true);
			Ext.Viewport.add(Ext.create('PMStouch.view.Login', {}));
			
			return;
		}
		
		Ext.Ajax.request({
			url : '../j_spring_security_check',
			method: 'POST',
			params: {
				j_username : login,
				j_password : pwd,
				j_factory : company
			},
			success: function() {
				self.gotoMain();
		        // Destroy the #appLoadingIndicator element
		        Ext.fly('appLoadingIndicator').destroy();
			},
			failure: function() {
				self.gotoLogin();
		        // Destroy the #appLoadingIndicator element
		        Ext.fly('appLoadingIndicator').destroy();
			}
		})
	}
});

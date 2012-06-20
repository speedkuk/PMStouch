Ext.define('PMStouch.controller.Login', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            login: 'onLogin'
        },

        refs: {
            login: 'login',
			company: 'login [name=j_factory]',
            loginName: 'login [name=j_username]',
            password: 'login [name=j_password]',
            resetButton: 'login button[itemId=resetButton]',
            loginButton: 'login button[itemId=loginButton]',
            saveToggle: 'login togglefield[itemId=save]'
        },

        control: {
            login: {
                initialize: 'onInit'
            },
            loginName: {
                change: 'onLoginNameChanged'
            },
            password: {
                change: 'onPasswordChanged'
            },
            resetButton: {
                tap: 'onButtonReset'
            },
            loginButton: {
                tap: 'onButtonLogin'
            }
        }
    },

    onLogin: function() {
        Ext.Viewport.removeAll(true, true);
        Ext.Viewport.add(Ext.create('PMStouch.view.Login', {}));
    },

    onLoginNameChanged: function(f, value) {
        f.setValue(value.toUpperCase());
    },

    onPasswordChanged: function(f, value) {
        f.setValue(value.toUpperCase());
    },

    onButtonLogin: function() {
        var self = this;

        PMStouch.setting.set('SavePassword', self.getSaveToggle().getValue() ? 'Y': 'N');
        if (self.getSaveToggle().getValue()) {
            PMStouch.setting.set('DefaultLogin', self.getLoginName().getValue());
            PMStouch.setting.set('DefaultPassword', PMStouch.base64.encode(self.getPassword().getValue()));
        }

        this.getLogin().submit({
            method: 'POST',
            scope: this,
            success: function(form, response) {
				self.gotoMain();
            },
            failure: function(form, response) {
				/* 개발모드인 경우는 아래와 같이 */
				if(document.location.href.indexOf('/m/') < 0) {
					Ext.Msg.confirm('로그인 실패', '개발 모드이므로, 로그인 바이패스 하시겠습니까?', function(confirm) {
						if (confirm === 'yes') {
							self.gotoMain();
						}
					});
				} else {
	                Ext.Msg.alert('로그인 실패', '오류원인 : ' + response.status + ' - ' + response.statusText);
				}
            }
        });
    },

    onButtonReset: function() {
        this.getLogin().reset();
    },

    onInit: function() {
		this.getCompany().setValue(PMStouch.setting.get('DefaultCompany') || 'MIRACOM');
        this.getLoginName().setValue(PMStouch.setting.get('DefaultLogin'));
        this.getPassword().setValue(PMStouch.base64.decode(PMStouch.setting.get('DefaultPassword')));
        this.getSaveToggle().setValue(PMStouch.setting.get('SavePassword') === 'N' ? 0: 1);
    },

	gotoMain: function() {
		var count = 0;

		function forSync() {
			if(++count === 3) {
				Ext.Viewport.removeAll(true, true);
				Ext.Viewport.add(Ext.create('PMStouch.view.Main', {}));
			}
		}

		Ext.getStore('BasViewDataListOut').load(forSync);
		Ext.getStore('RasViewEventListOut').load(forSync);
		Ext.getStore('RasViewResourceListOut').load(forSync);
	}

});
Ext.define('PMStouch.controller.Login', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            login: 'onLogin'
        },

        refs: {
            login: 'login',
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

		PMStouch.setting.set('SavePassword', self.getSaveToggle().getValue() ? 'Y' : 'N');
		if(self.getSaveToggle().getValue()) {
			PMStouch.setting.set('DefaultLogin', self.getLoginName().getValue());
			PMStouch.setting.set('DefaultPassword', self.getPassword().getValue());
		}

		document.location.href = '';
		//         this.getLogin().submit({
		//             method: 'POST',
		//             scope: this,
		//             success: function(form, response) {
		// document.location.href = '';
		//             },
		//             failure: function(form, response) {
		//                 Ext.Msg.alert('로그인 실패', '오류원인 : ' + response.status + ' - ' + response.statusText);
		//             }
		//         });
    },

    onButtonReset: function() {
		this.getLogin().reset();
    },

    onInit: function() {
		this.getLoginName().setValue(PMStouch.setting.get('DefaultLogin'));
		this.getPassword().setValue(PMStouch.setting.get('DefaultPassword'));
		this.getSaveToggle().setValue(PMStouch.setting.get('SavePassword') === 'N' ? 0 : 1);
    }
});
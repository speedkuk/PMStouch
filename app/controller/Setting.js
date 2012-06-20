Ext.define('PMStouch.controller.Setting', {
    extend: 'Ext.app.Controller',
    requires: [
    'PMStouch.mixin.Setting'
    ],

    config: {
		routes: {
			setting: 'onSetting'
		},

        refs: {
            setting: 'setting',
            userField: 'setting [itemId=user]',
			userHiddenField: 'setting [name=resId]',
            projectField: 'setting [itemId=project]',
			projectHiddenField: 'setting [name=chgSts1]',
            billingField: 'setting [itemId=billing]',
            userListButton: 'setting button[itemId=userlist]',
            projListButton: 'setting button[itemId=projlist]',
			logoutButton: 'setting button[itemId=logout]'
        },

        control: {
            setting: {
                initialize: 'onInit'
            },
            userHiddenField: {
                change: 'changeUser'
            },
            userListButton: {
                tap: 'selectUser'
            },
            projectHiddenField: {
                change: 'changeProject'
            },
            projListButton: {
                tap: 'selectProject'
            },
            billingField: {
                change: 'changeBilling'
            },
			logoutButton: {
				tap: 'onLogout'
			}
        }
    },
	
	onSetting: function() {
		if(this.getSetting())
			this.getSetting().show();
	},

    onInit: function() {
	    this.getUserField().isField = true;
        this.getProjectField().isField = true;
    
        this.getUserField().setValue(PMStouch.setting.get('DefaultUserDisp'));
        this.getUserHiddenField().setValue(PMStouch.setting.get('DefaultUser'));
        this.getProjectField().setValue(PMStouch.setting.get('DefaultProjectDisp'));
        this.getProjectHiddenField().setValue(PMStouch.setting.get('DefaultProject'));
        this.getBillingField().setValue(PMStouch.setting.get('DefaultBilling') === 'N' ? 0: 1);
    },

    selectUser: function(field) {
        this.getSetting().push({
            xtype: 'reslist',
            displayTarget: this.getUserField(),
			valueTarget: this.getUserHiddenField(),
            navigationView: this.getSetting()
        });
    },

    changeUser: function(field, value) {
        PMStouch.setting.set('DefaultUserDisp', this.getUserField().getValue());
        PMStouch.setting.set('DefaultUser', value);
    },

    selectProject: function(field) {
        this.getSetting().push({
            xtype: 'projectcode',
            displayTarget: this.getProjectField(),
			valueTarget: this.getProjectHiddenField(),
            navigationView: this.getSetting()
        });
    },

    changeProject: function(field, value) {
        PMStouch.setting.set('DefaultProjectDisp', this.getProjectField().getValue());
        PMStouch.setting.set('DefaultProject', value);
    },

    changeBilling: function(field, x, y, value) {
        PMStouch.setting.set('DefaultBilling', value ? 'Y': 'N');
    },

	onLogout: function() {
		Ext.Msg.confirm('로그아웃', '정말 로그아웃하시겠습니까?', function(confirm) {
			if (confirm === 'yes') {
				PMStouch.setting.set('DefaultLogin', '');
				PMStouch.setting.set('DefaultPassword', '');

				document.location.href = 'logout';
			}
		});
	}

});
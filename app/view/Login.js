Ext.define('PMStouch.view.Login', {
    extend: 'Ext.form.Panel',

    xtype: 'login',

    config: {


        url: '../j_spring_security_check',

        items: [{
            xtype: 'hiddenfield',
            name: 'j_factory'
        },
		{
			xtype: 'hiddenfield',
			name: 'j_language',
			value: 'ko'
		},
        {
            xtype: 'textfield',
            label: '로그인 아이디',
            name: 'j_username'
        },
        {
            xtype: 'passwordfield',
            label: '패스워드',
            name: 'j_password'
        },
		{
            xtype: 'togglefield',
            itemId: 'save',
            label: '패스워드 저장',
            value: 1
		},
        {
            xtype: 'container',
            layout: 'hbox',
            docked: 'bottom',
            items: [{
                xtype: 'button',
                itemId: 'resetButton',
                flex: 1,
                text: 'Reset'
            },
            {
                xtype: 'button',
                itemId: 'loginButton',
                flex: 1,
                text: 'Login',
                ui: 'confirm'
            }]
        }]
    }
});

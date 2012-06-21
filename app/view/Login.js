Ext.define('PMStouch.view.Login', {
    extend: 'Ext.form.Panel',

    xtype: 'login',

    config: {

        url: '../j_spring_security_check',
		cls :'login',
        items: [{
            xtype: 'hiddenfield',
			value: 'MIRACOM',
            name: 'j_factory'
        },
		{
			xtype: 'hiddenfield',
			name: 'j_language',
			value: 'ko'
		},
		{
			html:'<div class="productName">PMStouch<span>project management mobile system</span></div>'
		},
        {
            xtype: 'textfield',
			placeHolder: ' 아이디 입력',
            name: 'j_username'
        },
        {
            xtype: 'passwordfield',
			placeHolder: '패스워드 입력',
            name: 'j_password'
        },
		{
            xtype: 'togglefield',
            itemId: 'save',
            label: '저장',
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
				cls : 'marginR5 btnReset',
                text: 'Reset'
            },
            {
                xtype: 'button',
                itemId: 'loginButton',
                flex: 1,
                text: 'Login',
                cls : 'btnLogin'
            }]
        }]
    }
});

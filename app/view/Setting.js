Ext.define("PMStouch.view.Setting", {
    extend: 'Ext.navigation.View',
    requires: [
    'Ext.TitleBar',
    'Ext.dataview.List',
    'Ext.form.Panel',
    'Ext.field.Select',
    'Ext.form.FieldSet',
    'Ext.navigation.View',
	'Ext.field.Toggle'],
    xtype: 'setting',
    config: {
        items: [
        {
            xtype: 'formpanel',
            title: '설정',
            items: [{
				xtype: 'fieldset',
				items: [
	            {
	                xtype: 'textfield',
	                itemId: 'company',
					value: 'MIRACOM',
	                label: '회사',
					disabled : true,
	                placeHolder: '기본사용 회사를 입력하세요',
	                flex: 1
	            }]
			},
			{
                xtype: 'fieldset',
                layout: 'hbox',
                items: [
				{
                    xtype: 'textfield',
                    itemId: 'user',
                    label: '직원이름',
                    placeHolder: '기본사용 아이디를 선택하세요',
					disabled: true,
                    flex: 1
                },
				{
					xtype: 'hiddenfield',
					name: 'resId'
				},
                {
                    xtype: 'button',
                    itemId: 'userlist',
                    cls: 'btnSearch',
                    width: 35
                }]
            },
            {
                xtype: 'fieldset',
                layout: 'hbox',
                items: [
                {
                    xtype: 'textfield',
                    itemId: 'project',
                    label: '프로젝트',
                    placeHolder: '기본사용 프로젝트를 선택하세요',
					disabled: true,
                    flex: 1
                },
				{
					xtype: 'hiddenfield',
					name: 'chgSts1'
				},
                {
                    xtype: 'button',
                    itemId: 'projlist',
                    cls: 'btnSearch',
                    width: 35
                }]
            },
			{
                xtype: 'fieldset',
                items: [{
                    xtype: 'togglefield',
                    itemId: 'billing',
                    label: 'Billing 여부',
                    value: 1
                }]
            },
			{
				xtype: 'button',
				itemId: 'logout',
				text: '로그아웃',
				cls: 'eventEnd',
				docked: 'bottom'
			}]
        }]
    }
});
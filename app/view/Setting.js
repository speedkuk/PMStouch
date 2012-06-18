Ext.define("PMStouch.view.Setting", {
    extend: 'Ext.navigation.View',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View'],
    xtype: 'setting',
    config: {
        items: [
        {
            xtype: 'formpanel',
            title: '기본정보',
            items: [{
                xtype: 'fieldset',
                layout: 'hbox',
                items: [{
                    xtype: 'textfield',
                    itemId: 'user',
                    label: '직원아이디',
					placeHolder: '기본사용 아이디를 선택하세요',
                    name: 'resId',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'userlist',
                    text: '>>',
                    width: 40
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
					placeHolder: '기본사용 프로텍트를 선택하세요',
                    name: 'chgSts1',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'projlist',
                    text: '>>',
                    width: 40
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
            }]
        }]
    }
});
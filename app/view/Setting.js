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
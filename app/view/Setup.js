Ext.define("PMStouch.view.Setup", {
    extend: 'Ext.navigation.View',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View'],
	xtype: 'setup',
	config: {
		items:[
            {
                xtype: 'formpanel',
				title: '기본정보',
                items: [{
                    xtype: 'fieldset',
                    title: '기본 정보 설정',
					items: [
                    {
                        xtype: 'textfield',
						itemId: 'user',
                        label: '직원 아이디'
                    },
                    {
                        xtype: 'textfield',
						itemId: 'project',
                        label: '프로젝트 코드'
                    }
					]
				}]
            }
        ]
	}
});
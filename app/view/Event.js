Ext.define("PMStouch.view.Event", {
    extend: 'Ext.navigation.View',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View'],
    xtype: 'event',
    config: {
        items: [
        {
            xtype: 'formpanel',
            itemId: 'eventForm',
            title: '기본 입력',
            items: [
            {
                xtype: 'selectfield',
                itemId: 'user',
                store: 'RasViewResourceListOut',
                label: '직원아이디',
                usePicker: false,
                displayField: 'resId',
                valueField: 'resId'
            },
            {
                xtype: 'selectfield',
                itemId: 'project',
                label: '대상 프로젝트',
				usePicker: false,
				store: 'BasViewDataListOut',
				displayField: 'key1',
				valueField: 'key1'
            },
            {
                xtype: 'fieldset',
                title: '마지막 이벤트 정보',
                items: [
                {
                    xtype: 'textfield',
                    label: '프로젝트',
                    itemId: 'lastProjCode',
                    disabled: true
                },
                {
                    xtype: 'textfield',
                    label: '이벤트',
                    itemId: 'lastEvent',
                    disabled: true
                },
                {
                    xtype: 'textfield',
                    label: '시간',
                    itemId: 'lastTime',
                    disabled: true
                }
                ]
            },
            {
                xtype: 'container',
                docked: 'bottom',
                layout: {
                    type: 'hbox'
                },
                items: [
                {
                    xtype: 'button',
                    itemId: 'start',
                    text: '출근',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'end',
                    text: '퇴근',
                    flex: 1
                },
                {
                    xtype: 'button',
                    itemId: 'more',
                    text: '추가정보입력..',
                    flex: 1
                }
                ]
            }
            ]
        }
        ]
    }
});
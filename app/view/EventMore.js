Ext.define("PMStouch.view.EventMore", {
    extend: 'Ext.form.Panel',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View','Ext.field.DatePicker'],
    xtype: 'eventmore',
    config: {

        title: '추가정보 입력',
        items: [
        {
            xtype: 'selectfield',
            itemId: 'event',
			store: 'RasViewEventListOut',
			valueField: 'eventId',
			displayField: 'eventId',
            label: '이벤트 종류'
        },
        {
            xtype: 'selectfield',
            itemId: 'manday',
            value: 1,
            label: 'Man/Day',
            usePicker: false,
            options: [
            {
                text: '0.1',
                value: '0.1'
            },
            {
                text: '0.2',
                value: '0.2'
            },
            {
                text: '0.3',
                value: '0.3'
            },
            {
                text: '0.4',
                value: '0.4'
            },
            {
                text: '0.5',
                value: '0.5'
            },
            {
                text: '0.6',
                value: '0.6'
            },
            {
                text: '0.7',
                value: '0.7'
            },
            {
                text: '0.8',
                value: '0.8'
            },
            {
                text: '0.9',
                value: '0.9'
            },
            {
                text: '1',
                value: '1'
            }
            ]
        },
        {
            xtype: 'datepickerfield',
            itemId: 'time',
            label: '발생 시간'
        },
        {
            xtype: 'container',
			docked : 'bottom',
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
					itemId : 'send',
                    text: '전송',
                    flex: 1
                },
                {
                    xtype: 'button',
					itemId: 'reset',
                    text: '화면 초기화',
                    flex: 1
                }
            ]
        }]

    }
});
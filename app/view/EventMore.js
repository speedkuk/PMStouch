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
			placeHolder: '이벤트 종류를 선택하세요',
			store: 'RasViewEventListOut',
			valueField: 'eventId',
			displayField: 'eventId',
            label: '이벤트 종류'
        },
		{
			xtype : 'fieldset',
			title : '기여 시간 (퇴근 또는 각종 종료 이벤트시에 입력하세요)',
			items : [{
	            xtype: 'selectfield',
	            itemId: 'manday',
				placeHolder: '(기본) 1 Man/Day',
	            value: 1,
	            label: 'Man/Day',
	            usePicker: false,
	            options: [
	            {
	                text: '0.2 M/D',
	                value: '0.2'
	            },
	            {
	                text: '0.4 M/D',
	                value: '0.4'
	            },
	            {
	                text: '0.5 M/D',
	                value: '0.5'
	            },
	            {
	                text: '0.6 M/D',
	                value: '0.6'
	            },
	            {
	                text: '0.8 M/D',
	                value: '0.8'
	            },
	            {
	                text: '1 M/D',
	                value: '1'
	            }
	            ]
			}]
        },
		{
			xtype : 'fieldset',
			title : '이벤트 시간 설정',
			items : [{
			    xtype: 'togglefield',
				itemId: 'localtime',
			    name: 'localtime',
			    label: '시간 설정 여부',
				value: false
			}, {
	            xtype: 'datepickerfield',
	            itemId: 'date',
				placeHolder: '(기본)오늘 일자',
	            label: '발생 일자',
				disabled: true
	        },
	        {
	            xtype: 'timepickerfield',
	            itemId: 'time',
				placeHolder: '(기본)현재 서버 시간',
	            label: '발생 시간',
				disabled: true
			}]
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
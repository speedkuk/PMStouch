Ext.define("PMStouch.view.Event", {
    extend: 'Ext.navigation.View',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View'],
	xtype: 'event',
	config: {
		items:[
            {
                xtype: 'formpanel',
				itemId : 'eventForm',
				title: '기본 입력',
                items: [
                    {
                        xtype: 'textfield',
						itemId: 'user',
                        label: '직원아이디'
                    },
                    {
                        xtype: 'fieldset',
                        title: '마지막 이벤트 입력 정보',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '이벤트 시간',
								itemId: 'lastTime',
								disabled: true
                            },
                            {
                                xtype: 'textfield',
                                label: '이벤트 종류',
								itemId: 'lastEvent',
								disabled: true
                            },
                            {
                                xtype: 'textfield',
                                label: '프로젝트 코드',
								itemId: 'lastProjCode',
								disabled: true
                            }
                        ]
                    },
					{
	                        xtype: 'textfield',
							itemId: 'project',
	                        label: '대상 프로젝트'
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
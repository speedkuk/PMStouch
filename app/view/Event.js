Ext.define("PMStouch.view.Event", {
    extend: 'Ext.navigation.View',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View'],
	xtype: 'event',
	config: {
		items:[
            {
                xtype: 'formpanel',
				itemId : 'eventForm',
				title: '간편모드',
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
								itemId: 'lastTime'
                            },
                            {
                                xtype: 'textfield',
                                label: '이벤트 종류',
								itemId: 'lastEvent'
                            },
                            {
                                xtype: 'textfield',
                                label: '프로젝트 코드',
								itemId: 'lastProjCode'
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
                                width: '',
                                text: '출근',
                                flex: 1
                            },
                            {
                                xtype: 'button',
                                text: '퇴근',
                                flex: 1
                            },
                            {
                                xtype: 'button',
								itemId: 'more',
                                text: '상세모드로..',
                                flex: 1
                            }
                        ]
                    }
                ]
            }
        ]
	}
});
Ext.define("PMStouch.view.Event", {
    extend: 'Ext.navigation.View',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View'],
    xtype: 'event',
    config: {
	items: [{
		xtype: 'formpanel',
		title: '기본정보',
		itemId: 'eventForm',
        items: [
	        {
	            xtype: 'fieldset',
	            items: [
	            {
	                xtype: 'textfield',
	                itemId: 'user',
	                label: '직원아이디',
					name: 'resId'
	            },
	            {
	                xtype: 'textfield',
	                itemId: 'project',
	                label: '프로젝트',
					name: 'chgSts1'
	            },
				{
	                xtype: 'hiddenfield',
					itemId: 'event',
					name: 'eventId'
	            },
				{
	                xtype: 'hiddenfield',
					name: 'procstep',
					value: 1
	            }
	            ]
	        },
	        {
	            xtype: 'fieldset',
	            title: '마지막 이벤트 정보',
	            items: [
	            {
	                xtype: 'textfield',
	                label: '이벤트',
	                itemId: 'lastEvent',
	                disabled: true
	            },
	            {
	                xtype: 'textfield',
	                label: '프로젝트',
	                itemId: 'lastProjCode',
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
				cls : 'evenButtons',
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
					cls : 'marginRL5 eventEnd',
	                flex: 1
	            },
	            {
	                xtype: 'button',
	                itemId: 'more',
	                text: '변경',
					cls : 'eventMore',
	                flex: 1
	            }
	            ]
	        }]
		}]

    }

});
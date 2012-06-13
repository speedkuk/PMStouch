Ext.define("PMStouch.view.EventMore", {
    extend: 'Ext.form.Panel',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View','Ext.field.DatePicker'],
    xtype: 'eventmore',
    config: {

        title: 'Event More',
        items: [
        {
            xtype: 'textfield',
            itemId: 'moreUser',
            label: 'User'
        },
        {
            xtype: 'fieldset',
            title: 'Recent Info.',
            items: [
            {
                xtype: 'textfield',
                label: 'T. Time'
            },
            {
                xtype: 'textfield',
                label: 'Event'
            },
            {
                xtype: 'textfield',
                label: 'P. Code'
            }
            ]
        },
        {
            xtype: 'textfield',
            itemId: 'moreProject',
            label: 'Project Code'
        },
        {
            xtype: 'textfield',
            itemId: 'event',
            label: 'Event'
        },
        {
            xtype: 'selectfield',
            itemId: 'manday',
            value: 1,
            label: 'Man Day',
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
            label: 'Time'
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox'
            },
            items: [
            {
                xtype: 'button',
                width: '',
                text: 'OK',
                flex: 1
            }
            ]
        }
        ]

    }
});
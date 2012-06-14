Ext.define("PMStouch.view.Event", {
    extend: 'Ext.navigation.View',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View'],
	xtype: 'event',
	config: {
		items:[
            {
                xtype: 'formpanel',
				itemId : 'eventForm',
				title: 'Event',
                items: [
                    {
                        xtype: 'textfield',
						itemId: 'user',
                        label: 'User'
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Recent Info.',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'T. Time',
								itemId: 'lastTime'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Event',
								itemId: 'lastEvent'
                            },
                            {
                                xtype: 'textfield',
                                label: 'P. Code',
								itemId: 'lastProjCode'
                            }
                        ]
                    },
					{
	                        xtype: 'textfield',
							itemId: 'project',
	                        label: 'Project Code'
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
                                text: 'Start',
                                flex: 1
                            },
                            {
                                xtype: 'button',
                                text: 'End',
                                flex: 1
                            },
                            {
                                xtype: 'button',
								itemId: 'more',
                                text: 'More',
                                flex: 1
                            }
                        ]
                    }
                ]
            }
        ]
	}
});
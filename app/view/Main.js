Ext.define("PMStouch.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View'],
    
    config: {
		
		items: [
		            {
		                xtype: 'navigationview',   
		                title: 'Tab 1',
		                iconCls: 'info',
		                items: [
		                    {
		                        xtype: 'formpanel',
		                        items: [
		                            {
		                                xtype: 'selectfield',
		                                label: 'User',
										options: [
										                        {text: 'First Option',  value: 'first'},
										                        {text: 'Second Option', value: 'second'},
										                        {text: 'Third Option',  value: 'third'}
										                    ]
										// defaultPhonePickerConfig : {
										// 											slots: [{
										// 												title: 'User',
										// 												store: 'RasViewResourceListOut'
										// 											}]	
										// 										}
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
		                                        text: 'More',
		                                        flex: 1
		                                    }
		                                ]
		                            }
		                        ]
		                    }
		                ]
		            },
		            {
		                xtype: 'container',
		                title: 'Tab 2',
		                iconCls: 'info'
		            },
		            {
		                xtype: 'container',
		                title: 'Tab 3',
		                iconCls: 'info'
		            }
		        ],
		        tabBar: {
		            docked: 'bottom'
		        }
		  
        
            // {
            //                 title: 'Resource',
            // 				iconCls: 'home',
            //                 xtype : 'reslist'
            //             },
            // 			{
            // 				title: 'Resource History',
            // 				iconCls: 'home',
            //                 xtype : 'reshistory'
            // 			},
            // 			{
            // 				title: 'Event',
            // 				iconCls: 'home',
            //                 xtype : 'eventlist'
            // 			},
            // 			{
            // 				title: 'Project Code',
            // 				iconCls: 'home',
            //                 xtype : 'projectcode'
            // 			}
			
     }
});
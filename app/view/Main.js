Ext.define("PMStouch.view.Main", {
    extend: 'Ext.tab.Panel',    
    config: {
		
		items: [
		            {
		                xtype: 'event',   
		                title: 'Event',
		                iconCls: 'info'
		            },
		            {
		                xtype: 'reshistory',
		                title: 'History',
		                iconCls: 'info'
		            },
		            {
		                xtype: 'setup',
		                title: 'Setup',
		                iconCls: 'info'
		            }
		        ],
		        tabBar: {
		            docked: 'bottom'
		        }
		
     }
});
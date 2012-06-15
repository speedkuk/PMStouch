Ext.define("PMStouch.view.Main", {
    extend: 'Ext.tab.Panel',    
    config: {
		
		items: [
		            {
		                xtype: 'event',   
		                iconCls: 'compose2'
		            },
		            {
		                xtype: 'reshistory',
		                iconCls: 'list'
		            },
		            {
		                xtype: 'setup',
		                iconCls: 'settings'
		            }
		        ],
		        tabBar: {
		            docked: 'bottom'
		        }
		
     }
});
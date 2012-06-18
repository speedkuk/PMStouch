Ext.define("PMStouch.view.Main", {
    extend: 'Ext.tab.Panel',    
    config: {
		
		items: [
		            {
		                xtype: 'event',   
		                iconCls: 'compose'
		            },
		            {
		                xtype: 'reshistory',
		                iconCls: 'list'
		            },
		            {
		                xtype: 'setting',
		                iconCls: 'settings6'
		            }
		        ],
		        tabBar: {
		            docked: 'bottom'
		        }
		
     }
});
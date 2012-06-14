Ext.define("PMStouch.view.Main", {
    extend: 'Ext.tab.Panel',    
    config: {
		
		items: [
		            {
		                xtype: 'event',   
		                title: '이벤트 입력',
		                iconCls: 'info'
		            },
		            {
		                xtype: 'reshistory',
		                title: '이력',
		                iconCls: 'info'
		            },
		            {
		                xtype: 'setup',
		                title: '설정',
		                iconCls: 'info'
		            }
		        ],
		        tabBar: {
		            docked: 'bottom'
		        }
		
     }
});
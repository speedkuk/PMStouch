Ext.define("PMStouch.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'Ext.dataview.List'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },
                
                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Resource',
				iconCls: 'home',
                xtype : 'reslist'
            },
			{
				title: 'Resource History',
				iconCls: 'home',
                xtype : 'reshistory'
			},
			{
				title: 'Event',
				iconCls: 'home',
                xtype : 'eventlist'
			},
			{
				title: 'Project Code',
				iconCls: 'home',
                xtype : 'projectcode'
			}
			
        ]
    }
});
Ext.define("PMStouch.view.Setup", {
    extend: 'Ext.navigation.View',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.Panel', 'Ext.field.Select', 'Ext.form.FieldSet', 'Ext.navigation.View'],
	xtype: 'setup',
	config: {
		items:[
            {
                xtype: 'formpanel',
				title: 'Setup',
                items: [
                    {
                        xtype: 'textfield',
						itemId: 'user',
                        label: 'User'
                    },
                    {
                        xtype: 'textfield',
						itemId: 'project',
                        label: 'Project'
                    }

                ]
            }
        ]
	}
});
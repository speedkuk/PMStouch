Ext.define('PMStouch.view.ProjectCode', {
	extend : 'Ext.List',
	xtype : 'projectcode',
	config : {
	    itemTpl: '{data1}',
	    store : 'BasViewDataOut'
	}
});

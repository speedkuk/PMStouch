Ext.define('PMStouch.view.ProjectCode', {
	extend : 'Ext.List',
	xtype : 'projectcode',
	config : {
	    itemTpl: '{key1} - {data1}',
	    store : 'BasViewDataListOut'
	}
});

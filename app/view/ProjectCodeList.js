Ext.define('PMStouch.view.ProjectCodeList', {
	extend : 'Ext.List',
	xtype : 'projectcode',
	config : {
	    itemTpl: '{key1} - {data1}',
	    store : 'BasViewDataListOut'
	}
});

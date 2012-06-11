Ext.define('PMStouch.view.ResourceList', {
	extend : 'Ext.List',
	xtype : 'reslist',
	config : {
	    itemTpl: '{resId}',
	    store : 'RasViewResourceListOut'
	}
});

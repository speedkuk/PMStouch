Ext.define('PMStouch.view.ResourceList', {
	extend : 'Ext.List',
	xtype : 'reslist',
	config : {
	    itemTpl: '{resId}',
		title : '직원 아이디 선택',
	    store : 'RasViewResourceListOut'
	}
});

Ext.define('PMStouch.view.ResourceList', {
	extend : 'Ext.List',
	xtype : 'reslist',
	config : {
	    itemTpl: '{resId} - {resDesc}',
		title : '직원 아이디 선택',
	    store : 'FilteredRasViewResourceListOut',
	
		items: [{
			xtype: 'searchfield',
			itemId: 'search',
			docked: 'top'
		}]
	}
});

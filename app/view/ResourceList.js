Ext.define('PMStouch.view.ResourceList', {
	extend : 'Ext.List',
	xtype : 'reslist',
	config : {
	    itemTpl: '{resId} - {resDesc}',
		title : '직원이름 선택',
	    store : 'FilteredRasViewResourceListOut',
	
		items: [{
			xtype: 'searchfield',
			itemId: 'search',
			docked: 'top'
		}]
	}
});

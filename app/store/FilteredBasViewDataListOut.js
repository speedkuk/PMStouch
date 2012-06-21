Ext.define('PMStouch.store.FilteredBasViewDataListOut', {
	extend : 'Ext.data.Store',
	config : {
		autoLoad : false,
		pageSize : 1000,
		model : 'PMStouch.model.BasViewDataListOut.dataList'
	}
});
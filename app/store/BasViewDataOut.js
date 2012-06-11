Ext.define('PMStouch.store.BasViewDataOut', {
	extend : 'Ext.data.Store',
	config : {
		autoLoad : true,
		pageSize : 1000,
		model : 'PMStouch.model.BasViewDataOut',
		proxy : {
			type : 'ajax',
			api : {
				read : 'service/BasViewData.json'
			},
			actionMethods : {
				read : 'POST'
			},
			reader : {
				type : 'json'
			},
			extraParams : {
				procstep : '1',
				tableName : 'PROJECT_CODE',
				ket1 : 'AA'
			}
		}
	}
});
Ext.define('PMStouch.store.BasViewDataListOut', {
	extend : 'Ext.data.Store',
	config : {
		autoLoad : false,
		pageSize : 1000,
		model : 'PMStouch.model.BasViewDataListOut.dataList',
		proxy : {
			type : 'ajax',
			api : {
				read : 'service/BasViewDataList.json'
			},
			actionMethods : {
				read : 'POST'
			},
			reader : {
				type : 'json',
				rootProperty : 'dataList'
			},
			extraParams : {
				procstep : '1',
				tableName : '_PROJECT'
			}
		},

		listeners : {
			load : function(store, data, success) {
				if(success)
					Ext.getStore('FilteredBasViewDataListOut').setData(data);
			}
		}
	}
});
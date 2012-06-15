Ext.define('PMStouch.store.RasViewResourceListOut', {
	extend : 'Ext.data.Store',
	config : {
		autoLoad : true,
		pageSize : 1000,
		model : 'PMStouch.model.RasViewResourceListOut.resList',
		proxy : {
			type : 'ajax',
			api : {
				read : 'service/RasViewResourceList.json'
			},
			actionMethods : {
				read : 'POST'
			},
			reader : {
				type : 'json',
				rootProperty : 'resList'
			},
			extraParams : {
				procstep : '1'
			}
		}
	}
});
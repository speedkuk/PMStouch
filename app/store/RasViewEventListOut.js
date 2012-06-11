Ext.define('PMStouch.store.RasViewEventListOut', {
	extend : 'Ext.data.Store',
	config : {
		autoLoad : true,
		pageSize : 1000,
		model : 'PMStouch.model.RasViewEventListOut.eventList',
		proxy : {
			type : 'ajax',
			api : {
				read : 'service/RasViewEventList.json'
			},
			actionMethods : {
				read : 'POST'
			},
			reader : {
				type : 'json',
				rootProperty : 'eventList'
			}
		}
	}
});
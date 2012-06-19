Ext.define('PMStouch.store.RasViewResourceHistoryOut', {
    extend: 'Ext.data.Store',
    config: {
        autoLoad: true,
        pageSize: 1000,
        model: 'PMStouch.model.RasViewResourceHistoryOut.histList',

        proxy: {
            type: 'ajax',
            api: {
                read: 'service/RasViewResourceHistory.json'
            },
            actionMethods: {
                read: 'POST'
            },
            reader: {
                type: 'json',
                rootProperty: 'histList'
            },
            extraParams: {
                procstep: '1',
				resId: 'DCLN001',
				nextHisSeq: '577',
				fromTime: '20111107',
				toTime: '20120619',
				includeDelHist: 'Y'
            }
        }
    }
});
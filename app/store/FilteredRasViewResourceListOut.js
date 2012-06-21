Ext.define('PMStouch.store.FilteredRasViewResourceListOut', {
    extend: 'Ext.data.Store',
    config: {
        autoLoad: false,
        pageSize: 1000,
        model: 'PMStouch.model.RasViewResourceListOut.resList',
    }
});
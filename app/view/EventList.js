Ext.define('PMStouch.view.EventList', {
	extend : 'Ext.List',
	xtype : 'eventlist',
	config : {
	    itemTpl: '{eventId}',
	    store : 'RasViewEventListOut'
	}
});

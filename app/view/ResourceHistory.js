Ext.define('PMStouch.view.ResourceHistory', {
	extend : 'Ext.List',
	xtype : 'reshistory',
	config : {
	    itemTpl: [
			'<div class="lastEventId">{eventId}</div>',
			'<div class="lastEventInfo">{tranTime}<span>{newPriSts}</span></div>'
		],
	    store : 'RasViewResourceHistoryOut'
	}
});

Ext.define('PMStouch.view.ResourceHistory', {
	extend : 'Ext.List',
	xtype : 'reshistory',
	config : {
	    itemTpl: [
			'<div class="lastEventId">{lastEventId}</div>',
			'<div class="lastEventInfo">{lastEventTime}<span>{resSts1}</span></div>'
		],
	    store : 'RasViewResourceOut'
	}
});

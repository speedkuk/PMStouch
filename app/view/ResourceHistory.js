Ext.define('PMStouch.view.ResourceHistory', {
	extend : 'Ext.List',
	xtype : 'reshistory',
	config : {
	    itemTpl: '{lastEventId} : {lastEventTime} : {resSts1}',
	    store : 'RasViewResourceOut'
	}
});

Ext.define('PMStouch.view.ResourceHistory', {
	extend : 'Ext.List',
	xtype : 'reshistory',
	config : {
	    itemTpl: '{lastEventId} : {lastEventTime} : {resSts1}',
		title : '이벤트 이력',
	    store : 'RasViewResourceOut'
	}
});

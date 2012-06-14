Ext.define('PMStouch.view.EventList', {
	extend : 'Ext.List',
	xtype : 'eventlist',
	config : {
	    itemTpl: '{eventId}',
		title : '이벤트 선택',
	    store : 'RasViewEventListOut'
	}
});

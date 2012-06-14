Ext.define('PMStouch.view.ProjectCodeList', {
	extend : 'Ext.List',
	xtype : 'projectcode',
	config : {
	    itemTpl: '{key1} - {data1}',
		title : '프로젝트 코드 선택',
	    store : 'BasViewDataListOut'
	}
});

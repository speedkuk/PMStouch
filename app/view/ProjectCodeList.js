Ext.define('PMStouch.view.ProjectCodeList', {
	extend : 'Ext.List',
	xtype : 'projectcode',
	config : {
	    itemTpl: '<span>{key1}</span>{data2}',
		cls : 'projectCode',
		title : '프로젝트 코드 선택',
	    store : 'BasViewDataListOut'
	}
});

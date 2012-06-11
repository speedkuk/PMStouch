Ext.define('PMStouch.model.BasViewDataOut', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ {
				name : 'statusvalue',
				type : 'string'
			}, {
				name : 'msgcate',
				type : 'string'
			}, {
				name : 'msgcode',
				type : 'string'
			}, {
				name : 'msg',
				type : 'string'
			}, {
				name : 'fieldmsg',
				type : 'auto'
			}, {
				name : 'total',
				type : 'number'
			}, {
				name : 'fileinfo',
				type : 'auto'
			}, {
				name : 'data1',
				type : 'string'
			}, {
				name : 'data2',
				type : 'string'
			}, {
				name : 'data3',
				type : 'string'
			}, {
				name : 'data4',
				type : 'string'
			}, {
				name : 'data5',
				type : 'string'
			}, {
				name : 'data6',
				type : 'string'
			}, {
				name : 'data7',
				type : 'string'
			}, {
				name : 'data8',
				type : 'string'
			}, {
				name : 'data9',
				type : 'string'
			}, {
				name : 'data10',
				type : 'string'
			}, {
				name : 'createUserId',
				type : 'string'
			}, {
				name : 'createTime',
				type : 'date',
				dateFormat : 'YmdHis'
			}, {
				name : 'updateUserId',
				type : 'string'
			}, {
				name : 'updateTime',
				type : 'date',
				dateFormat : 'YmdHis'
			} ]
	}
});
Ext.define('PMStouch.controller.ResourceHistory', {
	extend: 'Ext.app.Controller',
	
	requires: [
    'PMStouch.mixin.Setting'
    ],

    config: {
		routes: {
			reshistory: 'onResHistory'
		},

        refs: {
            reshistory: 'reshistory'
        },

        control: {
            reshistory: {
                activate: 'onActivate'
            }
        }
    },

	onResHistory: function() {
		if(this.getReshistory())
			this.getReshistory().show();
	},

	onActivate: function() {
		// this.getReshistory().removeAll();
		var self = this;

		if(!PMStouch.setting.get('LastUser'))
			return;

		var store = Ext.getStore('RasViewResourceHistoryOut');

		var now = new Date();
		var to = Ext.Date.format(now, 'YmdHis');

		now.setYear(now.getYear() - 1);
		var from = Ext.Date.format(now, 'YmdHis');

		store.load({
			params : {
				procstep: '1',
				resId: PMStouch.setting.get('LastUser').resId,
				nextHistSeq: 2147483647,
				fromTime: from,
				toTime: to,
				includeDelHist: ' '
			}, 
			callback : function(records, operation, success) {
				if(!success) {
					Ext.Msg.alert('서비스 오류', '이력 정보를 가져오지 못했습니다.');
					return;
				}
				
				if(records.length == 0) {
					Ext.Msg.alert('이력정보', '최근 이력이 없습니다.');
				} else {
					Ext.Array.each(records, function(record) {
						var proj = record.get('newSts1');
						var event = record.get('eventId');
						record.set('newSts1', self.getProjectName(proj) || proj);
						record.set('eventId', self.getEventName(event) || event);
					});
				}
			}
		});
	},
	
	getEventName: function(eventId) {
		if(!eventId)
			return '';
		var store = Ext.getStore('RasViewEventListOut');
		var record = store.findRecord('eventId', eventId);
		if(record)
			return record.get('eventDesc');
		return '';
	},
	
	getResourceName: function(resId) {
		if(!resId)
			return '';
		var store = Ext.getStore('RasViewResourceListOut');
		var record = store.findRecord('resId', resId);
		if(record)
			return record.get('resDesc');
		return '';
	},
	
	getProjectName: function(projectId) {
		if(!projectId)
			return '';
		var store = Ext.getStore('BasViewDataListOut');
		var record = store.findRecord('key1', projectId);
		if(record)
			return record.get('data2');
		return '';
	}
});
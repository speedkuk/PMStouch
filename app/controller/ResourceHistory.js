Ext.define('PMStouch.controller.ResourceHistory', {
	extend: 'Ext.app.Controller',
	
	requires: [
    'PMStouch.mixin.Setting'
    ],

    config: {

        refs: {
            reshistory: 'reshistory'
        },

        control: {
            reshistory: {
                activate: 'onActivate'
            }
        }
    },

	onActivate: function() {
		// this.getReshistory().removeAll();

		if(!PMStouch.setting.get('LastUser'))
			return;

		var store = Ext.getStore('RasViewResourceHistoryOut');

		var now = new Date();
		var to = Ext.Date.format(now, 'YmdHis');

		now.setMonth(now.getMonth() - 1);
		var from = Ext.Date.format(now, 'YmdHis');

		store.load({
			params : {
				procstep: '1',
				resId: PMStouch.setting.get('LastUser').resId,
				nextHistSeq: 2147483647,
				fromTime: from,
				toTime: to,
				includeDelHist: ' '
			}
		});
	}

});
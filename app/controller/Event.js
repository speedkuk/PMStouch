Ext.define('PMStouch.controller.Event', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            event: 'event',
				lastTime: 'event [itemId=lastTime]',
				lastEvent: 'event [itemId=lastEvent]',
				lastTranCode: 'event [itemId=lastTranCode]'
	        },
		
	        control: {
	            'event [itemId=user]': {
	                focus: 'selectUser',
					change: 'changeUser'
	            },
				'event [itemId=project]': {
	                focus: 'selectProject'
	            },
				'event [itemId=more]': {
	                tap: 'eventMore'
	            }
	        }
	    },

	    selectUser: function(field) {
	        this.getEvent().push({
				xtype: 'reslist',
				target: field,
				navigationView: this.getEvent()
			});
	    },
	
		changeUser: function(field, value) {
			console.log(value);
	        this.getLastTime().setValue('aa');
	        this.getLastEvent().setValue('bb');
	        this.getLastTranCode().setValue('cc');
	    },
	
		selectProject: function(field) {
	        this.getEvent().push({
				xtype: 'projectcode',
				target: field,
				navigationView: this.getEvent()
			});
	    },
		
		eventMore: function(field) {
	        this.getEvent().push({
				xtype: 'eventmore'
			});
	    }
});
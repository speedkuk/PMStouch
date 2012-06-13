Ext.define('PMStouch.controller.EventMore', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            eventMore: 'eventmore',
				event: 'event'
	        },
		
	        control: {
	            'eventmore [itemId=moreUser]': {
	                focus: 'selectUser'
	            },
				'eventmore [itemId=moreProject]': {
	                focus: 'selectProject'
	            },
				'eventmore [itemId=event]': {
	                focus: 'selectEvent'
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
	
		selectProject: function(field) {
	        this.getEvent().push({
				xtype: 'projectcode',
				target: field,
				navigationView: this.getEvent()
			});
	    },
	
		selectEvent: function(field) {
	        this.getEvent().push({
				xtype: 'eventlist',
				target: field,
				navigationView: this.getEvent()
			});
	    }
});
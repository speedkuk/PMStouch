Ext.define('PMStouch.controller.EventMore', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            eventMore: 'eventmore',
				eventField: 'eventmore [itemId=event]',
				sendButton: 'eventmore button[itemId=send]',
				resetButton: 'eventmore button[itemId=reset]'
	        },
		
	        control: {
				eventMore : {
					initialize : 'onInitialize'
				},
				eventField : {
	                focus: 'onEventSelected',
					change: 'onEventChanged'
	            },
				sendButton: {
					tap : 'onSendButton'
				},
				resetButton: {
					tap : 'onResetButton'
				}
	        }
	    },

		onInitialize : function() {
			var lastevent = PMStouch.setting.get('LastEvent');

			if(lastevent)
				this.getEventField().setValue(lastevent);
		},
		
		onEventSelected: function(field) {
	        this.getEvent().push({
				xtype: 'eventlist',
				target: field,
				navigationView: this.getEvent()
			});
	    },
	
		onEventChanged: function(field, value) {
			PMStouch.setting.set('LastEvent', value);
		},
		
		onSendButton: function() {
			Ext.Msg.alert('확인', '요청하신 내용이 잘 처리되었습니다.');
		},
		
		onResetButton: function() {
			this.getEventMore().reset();
		}
});
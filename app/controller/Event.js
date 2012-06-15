Ext.define('PMStouch.controller.Event', {
	extend: 'Ext.app.Controller',

	    config: {
			
			refs: {
	            event: 'event',
				form: 'event > #eventForm',
				lastTime: 'event > #eventForm [itemId=lastTime]',
				lastEvent: 'event > #eventForm [itemId=lastEvent]',
				lastProjectCode: 'event > #eventForm [itemId=lastProjCode]',
				userField: 'event > #eventForm [itemId=user]',
				projectField: 'event > #eventForm [itemId=project]',
				eventField: 'event > #eventForm [itemId=event]',
				moreButton: 'event > #eventForm [itemId=more]',
				startButton: 'event > #eventForm [itemId=start]',
				endButton: 'event > #eventForm [itemId=end]'
	        },
		
	        control: {
				event : {
					initialize : 'onInitialize'
				},
	            userField: {
	                focus: 'onUserSelected',
					change: 'onUserChanged'
	            },
				projectField: {
	                focus: 'onProjectSelected'
	            },
				moreButton: {
	                tap: 'onButtonEventMore'
	            },
				startButton: {
	                tap: 'onButtonStart'
	            },
				endButton: {
	                tap: 'onButtonEnd'
	            }
	        }
	    },
	
		onInitialize: function() {
			var self = this;
			var defaultuser = PMStouch.setting.get('DefaultUser');
			var username;
			
			if(defaultuser) {
				username = defaultuser;
			} else {
				var lastuser = PMStouch.setting.get('LastUser');
				if(lastuser) {
					username = lastuser.resId;
				}
			}
			
			if(username) {
				this.getUserField().setValue(username);
			}

			var defaultproj = PMStouch.setting.get('DefaultProject');
			if(defaultproj) {
				this.getProjectField().setValue(defaultproj);
			} else {
				var lastproject = PMStouch.setting.get('LastProject');
				if(lastproject)
					this.getProjectField().setValue(lastproject);
			}
		},

	    onUserSelected: function(field) {
	        this.getEvent().push({
				xtype: 'reslist',
				target: field,
				navigationView: this.getEvent()
			});
	    },
	
		onUserChanged: function(field, value) {
			var self = this;
			var store = Ext.getStore('RasViewResourceOut');
			store.load({
				params : {
					procstep : '1',
					resId : value
				},
				callback : function(records) {
					var rc = records[0].data;

					PMStouch.setting.set('LastUser', rc);

			        self.getLastTime().setValue(rc.lastEventTime);
			        self.getLastEvent().setValue(rc.lastEventId);
			        self.getLastProjectCode().setValue(rc.resSts1);
				}
			});
	    },
	
		onProjectSelected: function(field) {
	        this.getEvent().push({
				xtype: 'projectcode',
				target: field,
				navigationView: this.getEvent()
			});
	    },
	
		changeProject: function(field, value) {
			PMStouch.setting.set('LastProject', value);
		},
		
		onButtonEventMore: function(field) {
			if(this.getUserField().getValue() && this.getProjectField().getValue()) {
		        this.getEvent().push({
					xtype: 'eventmore'
				});
			} else {
		        Ext.Msg.alert(
		            "필수입력",
		            "상세모드로 이동하기 전에 직원코드와 프로젝트코드를 입력해주세요."
		        );
			}
	    },
	
		onButtonStart: function(field) {
			
			this.getEventField().setValue('WRK_START');
			
			this.getForm().submit({
				url: 'service/rasResourceEvent.json',
				method: 'POST',
				success: function() {
					Ext.Msg.alert('출근', '요청하신 내용이 잘 처리되었습니다.');
				},
				failure: function() {
					Ext.Msg.alert('출근', '요청하신 내용이 실패하였습니다.');
				}
			});
			
			
	    },
	
		onButtonEnd: function(field) {
			
			this.getEventField().setValue('WRK_END');
			
			this.getForm().submit({
				url: 'service/rasResourceEvent.json',
				method: 'POST',
				success: function() {
					Ext.Msg.alert('퇴근', '요청하신 내용이 잘 처리되었습니다.');
				},
				failure: function() {
					Ext.Msg.alert('퇴근', '요청하신 내용이 실패하였습니다.');
				}
			});
			
	    }
	
});
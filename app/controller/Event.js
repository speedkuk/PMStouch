Ext.define('PMStouch.controller.Event', {
    extend: 'Ext.app.Controller',
    requires: [
    'PMStouch.mixin.Setting'
    ],

    config: {
		routes: {
			event: 'onEvent'
		},

        refs: {
            event: 'event',
            form: 'event > #eventForm',
            lastTime: 'event > #eventForm [itemId=lastTime]',
            lastEvent: 'event > #eventForm [itemId=lastEvent]',
            lastProjectCode: 'event > #eventForm [itemId=lastProjCode]',
            userField: 'event > #eventForm [itemId=user]',
			userHiddenField: 'event > #eventForm [name=resId]',
            eventField: 'event > #eventForm [name=eventId]',
            projectField: 'event > #eventForm [itemId=project]',
			projectHiddenField: 'event > #eventForm [name=chgSts1]',
            billingField: 'event > #eventForm [name=chgSts2]',
            mandayField: 'event > #eventForm [name=chgSts3]',
            moreButton: 'event > #eventForm [itemId=more]',
            startButton: 'event > #eventForm [itemId=start]',
            endButton: 'event > #eventForm [itemId=end]',
            userListButton: 'event > #eventForm button[itemId=userlist]',
            projListButton: 'event > #eventForm button[itemId=projlist]'
        },

        control: {
            event: {
                initialize: 'onInit'
            },
            userHiddenField: {
                change: 'onUserChanged'
            },
            userListButton: {
                tap: 'onUserSelected'
            },
            projectHiddenField: {
				change: 'onProjectChanged'
            },
            projListButton: {
                tap: 'onProjectSelected'
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

	onEvent: function() {
		if(this.getEvent())
			this.getEvent().activate();
	},

    onInit: function() {
	    this.getUserField().isField = true;
        this.getProjectField().isField = true;
    
        var self = this;
        var defaultuser = PMStouch.setting.get('DefaultUser');
        var username, usernameDisp;

        if (defaultuser) {
            username = defaultuser;
			usernameDisp = PMStouch.setting.get('DefaultUserDisp');
        } else {
            var lastuser = PMStouch.setting.get('LastUser');
            if (lastuser) {
                username = lastuser.resId;
				usernameDisp = lastuser.resDesc;
            }
        }

        if (username) {
            this.getUserField().setValue(usernameDisp);
			this.getUserHiddenField().setValue(username);
        }

        var defaultproj = PMStouch.setting.get('DefaultProject');
        if (defaultproj) {
            this.getProjectField().setValue(PMStouch.setting.get('DefaultProjectDisp'));
			this.getProjectHiddenField().setValue(defaultproj);
        } else {
            var lastproject = PMStouch.setting.get('LastProject');
            if (lastproject) {
	            this.getProjectField().setValue(PMStouch.setting.get('LastProjectDisp'));
				this.getProjectHiddenField().setValue(lastproject);
			}
        }
    },

    onUserSelected: function(field) {
        this.getEvent().push({
            xtype: 'reslist',
            displayTarget: this.getUserField(),
			valueTarget: this.getUserHiddenField(),
            navigationView: this.getEvent()
        });
    },

    onUserChanged: function(field, value) {
        var self = this;
        var store = Ext.getStore('RasViewResourceOut');
        store.load({
            params: {
                procstep: '1',
                resId: value
            },
            callback: function(records) {
                var rc = records[0].data;

                PMStouch.setting.set('LastUser', rc);

               	self.getLastTime().setValue(rc.lastEventTime);
               	self.getLastEvent().setValue(self.getEventName(rc.lastEventId) || rc.lastEventId);
               	self.getLastProjectCode().setValue(self.getProjectName(rc.resSts1) || rc.resSts1);
            }
        });
    },

    onProjectSelected: function(field) {
        this.getEvent().push({
            xtype: 'projectcode',
            displayTarget: this.getProjectField(),
			valueTarget: this.getProjectHiddenField(),
            navigationView: this.getEvent()
        });
    },

    onProjectChanged: function(field, value) {
        PMStouch.setting.set('LastProject', value);
        PMStouch.setting.set('LastProjectDisp', this.getProjectField().getValue());
    },

    onButtonEventMore: function(field) {
        if (this.getUserField().getValue() && this.getProjectField().getValue()) {
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
        this.getBillingField().setValue(PMStouch.setting.get('DefaultBilling') || 'Y');

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
        this.getBillingField().setValue(PMStouch.setting.get('DefaultBilling') || 'Y');

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
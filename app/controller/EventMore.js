Ext.define('PMStouch.controller.EventMore', {
    extend: 'Ext.app.Controller',
    requires: [
    'PMStouch.mixin.Setting'
    ],

    config: {

        refs: {
            event: 'event',
            parentProjectField: 'event #eventForm [name=chgSts1]',
            parentUserField: 'event #eventForm [name=resId]',
            eventMore: 'eventmore',
            eventField: 'eventmore [name=eventId]',
            userField: 'eventmore [name=resId]',
            projectField: 'eventmore [name=chgSts1]',
			billingField: 'eventmore [itemId=billing]',
            billingHiddenField: 'eventmore [name=chgSts2]',
            mandayField: 'eventmore [name=chgSts3]',
            localTimeToggle: 'eventmore [itemId=localtime]',
            dateField: 'eventmore [itemId=date]',
            timeField: 'eventmore [itemId=time]',
            backTimeField: 'eventmore [name=backTime]',
            sendButton: 'eventmore button[itemId=send]',
            resetButton: 'eventmore button[itemId=reset]'
        },

        control: {
            eventMore: {
                initialize: 'onInit'
            },
            eventField: {
                change: 'onEventChanged'
            },
            sendButton: {
                tap: 'onSendButton'
            },
            resetButton: {
                tap: 'onResetButton'
            },
            'eventmore [itemId=localtime]': {
                change: 'onLocalTimeToggle'
            }
        }
    },

    onInit: function() {
        this.getLocalTimeToggle().isField = false;
        this.getDateField().isField = false;
        this.getTimeField().isField = false;
		this.getBillingField().isField = false;

		this.getEventField().setValue(PMStouch.setting.get('LastEvent'));
		this.getBillingField().setValue((PMStouch.setting.get('DefaultBilling') === 'N') ? 0 : 1);
    },

    onLocalTimeToggle: function(field, x, y, value) {
        this.getDateField().setDisabled(!value);
        this.getTimeField().setDisabled(!value);
        this.getBackTimeField().setDisabled(!value);

        if (value) {
            this.getDateField().setValue(new Date());
            this.getTimeField().setValue(new Date());
        } else {
            this.getDateField().setValue(null);
            this.getTimeField().setValue(null);
        }
    },

    onEventChanged: function(field, value) {
        PMStouch.setting.set('LastEvent', value);
    },

    onSendButton: function() {
        var self = this;

        if(!this.getEventField().getValue()) {
			Ext.Msg.alert('필수항목', '이벤트를 선택해야 합니다');
			return;
		}
		
        this.getProjectField().setValue(this.getParentProjectField().getValue());
        this.getUserField().setValue(this.getParentUserField().getValue());
		this.getBillingHiddenField().setValue(this.getBillingField().getValue() ? 'Y' : 'N');

        if (this.getLocalTimeToggle().getValue()) {
            var datetime = this.getDateField().getValue();
            var time = this.getTimeField().getValue();
            datetime.setHours(time.getHours());
            datetime.setMinutes(time.getMinutes());
            datetime.setSeconds(time.getSeconds());

            var str = Ext.Date.format(datetime, 'YmdHis');

            this.getBackTimeField().setValue(str);
        }

        this.getEventMore().submit({
            url: 'service/rasResourceEvent.json',
            method: 'POST',
            success: function() {
                Ext.Msg.alert(self.getEventField().getRecord().get('eventDesc'), '요청하신 내용이 잘 처리되었습니다.');
            },
            failure: function(form, response) {
				if(response && response.msg)
		            Ext.Msg.alert('오류(' + self.getEventField().getRecord().get('eventDesc') + ')', response.msg);
				else
                	Ext.Msg.alert('오류', self.getEventField().getRecord().get('eventDesc') + ' 요청처리에 실패하였습니다.');
            }
        });
    },

    onResetButton: function() {
        this.getEventMore().reset();
    }
});
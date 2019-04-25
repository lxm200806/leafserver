let XBase = require('XBase');

cc.Class({
    extends: XBase,

    properties: {
    },

    XFInit(){
        this.InitData();
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case 1:
                break;
            default:
                break;
        }
    },

    InitData(){
    },

    Show(text){
        this.node.active = true;
        
        this.unschedule(this.DelayHide);
        this.scheduleOnce(this.DelayHide, 3);

        this.node.getComponent(cc.Label).string = text;

    },


    DelayHide(){
        this.unschedule(this.DelayHide, this);
        this.node.getComponent(cc.Label).string = '';
    },

});


cc.Class({
    extends: require('UIBase'),

    XFInit() {
        this.InitData();
    },

    Execute(eventCode, message){

    },

    InitData(){

        this.Dispatch(G.AreaCode.UI, G.UI_Event.Login_LoginLayer_Active, true);
    },

});

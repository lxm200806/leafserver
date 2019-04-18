
cc.Class({
    extends: require('UIBase'),

    Init() {
        this.InitData();
    },

    Execute(eventCode, message){

    },

    InitData(){

        this.Dispatch(G.AreaCode.UI, G.Event_UI.Login_LoginLayer_Active, true);
    },

});

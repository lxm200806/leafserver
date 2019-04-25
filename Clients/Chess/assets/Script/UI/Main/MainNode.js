
cc.Class({
    extends: require('UIBase'),

    XFInit() {
        this.InitData();
    },

    InitData(){
        this.DispatchUI(G.UI_Event.Main_CreateRoomButton_Active, true);
    },

});
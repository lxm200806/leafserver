
cc.Class({
    extends: require('UIBase'),

    Init: function () {
        this.InitData();
    },

    InitData(){
        this.DispatchUI(G.Event_UI.Main_CreateRoomButton_Active, true);
    },

});
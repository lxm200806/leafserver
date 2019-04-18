var Enums = require('Enums');
var XBase = require('XBase');

cc.Class({
    extends: XBase,

    properties: {

    },

    Init() {
        this.InitData();

        this.DispatchUI(G.Event_UI.ShowSelf);
    },

    Execute(eventCode, message){
        switch (eventCode) {

        
            default:
                break;
        }
    },

    InitData(){
        //this.DispatchUI(G.Event_UI._Actor_GameStart_Ntt, {});
    },

});

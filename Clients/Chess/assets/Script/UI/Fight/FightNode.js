var Enums = require('Enums');
var XBase = require('XBase');

cc.Class({
    extends: XBase,

    properties: {

    },

    XFInit() {
        this.InitData();

        this.DispatchUI(G.UI_Event.ShowSelf);
    },

    Execute(eventCode, message){
        switch (eventCode) {

        
            default:
                break;
        }
    },

    InitData(){
        //this.DispatchUI(G.UI_Event._Actor_GameStart_Ntt, {});
    },

});

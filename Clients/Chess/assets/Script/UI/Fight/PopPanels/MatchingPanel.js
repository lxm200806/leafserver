cc.Class({
    extends: require("UIBase"),

    properties: {
    },

    Init: function(){
        this.InitData();

        this.Bind(G.Event_UI.Fight_ShowMatchingPanel);
    },

    Execute: function(eventCode, message){
        switch (eventCode) {
            case G.Event_UI.Fight_ShowMatchingPanel:
                this.ClosePanel(message);
                break;
            default:
                break;
        }
    },

    InitData(){

    },

});

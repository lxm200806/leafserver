cc.Class({
    extends: require("UIBase"),

    properties: {
    },

    XFInit(){
        this.InitData();

        this.BindUI(G.UI_Event.Fight_ShowMatchingPanel);
    },

    Execute: function(eventCode, message){
        switch (eventCode) {
            case G.UI_Event.Fight_ShowMatchingPanel:
                this.ClosePanel(message);
                break;
            default:
                break;
        }
    },

    InitData(){

    },

});

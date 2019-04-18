cc.Class({
    extends:require('UIBase'),
    properties: {
    },

    Init: function(){
        this.InitData();
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.Event_UI.SHOW_MAIN_TOP_HUB:
                this.SetLayerActive(message);
                break;
            default:
                break;
        }
    },

    InitData(){

    },

    OnClickBack(){
        G.NetManager.Instance.Close();
        this.DispatchUI(G.Event_UI.Canvas_ShowLogin, true);
        this.DispatchUI(G.Event_UI.Canvas_ShowMain, false);
    },
});

cc.Class({
    extends:require('UIBase'),
    properties: {
    },

    XFInit(){
        this.InitData();
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.UI_Event.SHOW_MAIN_TOP_HUB:
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
        this.DispatchUI(G.UI_Event.Canvas_ShowLogin, true);
        this.DispatchUI(G.UI_Event.Canvas_ShowMain, false);
    },
});

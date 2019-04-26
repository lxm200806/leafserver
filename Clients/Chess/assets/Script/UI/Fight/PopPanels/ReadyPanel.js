cc.Class({
    extends: require("UIBase"),

    properties: {
    },

    XFInit(){
        this.InitData();

        this.BindUI(G.UI_Event.Fight_ShowReadyPanel);
        this.BindUI(G.UI_Event.Fight_ResetGameStartUI);
    },

    Execute: function(eventCode, message){
        switch (eventCode) {
            case G.UI_Event.Fight_ShowReadyPanel:
                this.ClosePanel(message);
                break;
            case G.UI_Event.Fight_ResetGameStartUI:
                this.ClosePanel(false);
                break;
            default:
                break;
        }
    },

    InitData(){

    },

    OnReady(){
        var req = new G.PB.Actor_GamerReady_Ntt();
        req.UserID = G.GameModel.LocalUser.UserID;
        G.NetManager.Instance.Send(req, G.Opcode.Actor_GamerReady_Ntt);

        this.DispatchUI(G.UI_Event.Fight_ShowReadyPanel, false);
    },

});

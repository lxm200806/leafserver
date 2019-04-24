cc.Class({
    extends: require("UIBase"),

    properties: {
    },

    Init: function(){
        this.InitData();

        this.BindUI(G.Event_UI.Fight_ShowReadyPanel);
        this.BindUI(G.Event_UI.Fight_ResetGameStartUI);
    },

    Execute: function(eventCode, message){
        switch (eventCode) {
            case G.Event_UI.Fight_ShowReadyPanel:
                this.ClosePanel(message);
                break;
            case G.Event_UI.Fight_ResetGameStartUI:
                this.ClosePanel(false);
                break;
            default:
                break;
        }
    },

    InitData(){

    },

    OnReady(){
        var req = new G.PB._Actor_GamerReady_Ntt();
        req.UserID = G.GameModel.LocalUser.UserID;
        G.NetManager.Instance.Send(req, G.Opcode._Actor_GamerReady_Ntt);

        this.DispatchUI(G.Event_UI.Fight_ShowReadyPanel, false);
    },

});

let UIBase = require('UIBase');

cc.Class({
    extends: UIBase,

    properties: {
    },

    Init: function(){
        this.InitData();

        this.BindUI(G.Event_UI.Fight_ShowGrabLandlordPanel);
    },

    Execute: function(eventCode, message){
        switch (eventCode) {
            case G.Event_UI.Fight_ShowGrabLandlordPanel:
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

    OnJiaoDiZhu(){
        var req = new G.PB._Actor_GamerGrabLandlordSelect_Ntt();
        req.UserID = G.GameModel.LocalUser.UserID;
        req.IsGrab = true;
        G.NetManager.Instance.Send(req, G.Opcode._Actor_GamerGrabLandlordSelect_Ntt);

        this.DispatchUI(G.Event_UI.Fight_ShowGrabLandlordPanel, false);
    },

    OnQingDiZhu(){
        var req = new G.PB._Actor_GamerGrabLandlordSelect_Ntt();
        req.UserID = G.GameModel.LocalUser.UserID;
        req.IsGrab = true;
        G.NetManager.Instance.Send(req, G.Opcode._Actor_GamerGrabLandlordSelect_Ntt);

        this.DispatchUI(G.Event_UI.Fight_ShowGrabLandlordPanel, false);
    },

    OnBuJiao(){
        var req = new G.PB._Actor_GamerReady_Ntt();
        req.UserID = G.GameModel.LocalUser.UserID;
        req.IsGrab = false;
        G.NetManager.Instance.Send(req, G.Opcode._Actor_GamerGrabLandlordSelect_Ntt);

        this.DispatchUI(G.Event_UI.Fight_ShowGrabLandlordPanel, false);
    },

    OnBuQiang(){
        var req = new G.PB._Actor_GamerReady_Ntt();
        req.UserID = G.GameModel.LocalUser.UserID;
        req.IsGrab = false;
        G.NetManager.Instance.Send(req, G.Opcode._Actor_GamerGrabLandlordSelect_Ntt);

        this.DispatchUI(G.Event_UI.Fight_ShowGrabLandlordPanel, false);
    },

});

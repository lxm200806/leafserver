let UIBase = require('UIBase');

cc.Class({
    extends: UIBase,

    properties: {
    },

    XFInit(){
        this.InitData();

        this.BindUI(G.UI_Event.Fight_ShowGrabLandlordPanel);
    },

    Execute: function(eventCode, message){
        switch (eventCode) {
            case G.UI_Event.Fight_ShowGrabLandlordPanel:
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

    OnJiaoDiZhu(){
        var req = new G.PB.Actor_GamerGrabLandlordSelect_Ntt();
        req.UserID = G.GameModel.LocalUser.UserID;
        req.IsGrab = true;
        G.NetManager.Instance.Send(req, G.Opcode.Actor_GamerGrabLandlordSelect_Ntt);

        this.DispatchUI(G.UI_Event.Fight_ShowGrabLandlordPanel, false);
    },

    OnQingDiZhu(){
        var req = new G.PB.Actor_GamerGrabLandlordSelect_Ntt();
        req.UserID = G.GameModel.LocalUser.UserID;
        req.IsGrab = true;
        G.NetManager.Instance.Send(req, G.Opcode.Actor_GamerGrabLandlordSelect_Ntt);

        this.DispatchUI(G.UI_Event.Fight_ShowGrabLandlordPanel, false);
    },

    OnBuJiao(){
        var req = new G.PB.Actor_GamerReady_Ntt();
        req.UserID = G.GameModel.LocalUser.UserID;
        req.IsGrab = false;
        G.NetManager.Instance.Send(req, G.Opcode.Actor_GamerGrabLandlordSelect_Ntt);

        this.DispatchUI(G.UI_Event.Fight_ShowGrabLandlordPanel, false);
    },

    OnBuQiang(){
        var req = new G.PB.Actor_GamerReady_Ntt();
        req.UserID = G.GameModel.LocalUser.UserID;
        req.IsGrab = false;
        G.NetManager.Instance.Send(req, G.Opcode.Actor_GamerGrabLandlordSelect_Ntt);

        this.DispatchUI(G.UI_Event.Fight_ShowGrabLandlordPanel, false);
    },

});

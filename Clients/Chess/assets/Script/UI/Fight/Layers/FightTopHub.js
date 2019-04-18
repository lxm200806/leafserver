cc.Class({
    extends: require('UIBase'),

    properties: {
    },

    Init(){
        this.InitData();

    },

    Execute(eventCode, message){

    },

    InitData(){

    },

    OnBackClicked(){
        var msg = new G.PB._C2G_ReturnLobby_Ntt();
        G.NetManager.Instance.Send(msg, G.Opcode._C2G_ReturnLobby_Ntt);
        this.DispatchUI(G.Event_UI.Canvas_ShowMain, true);
        this.DispatchUI(G.Event_UI.Canvas_ShowFight, false);
    },

});

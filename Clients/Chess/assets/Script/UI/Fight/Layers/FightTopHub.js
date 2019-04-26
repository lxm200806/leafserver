cc.Class({
    extends: require('UIBase'),

    properties: {
    },

    XFInit(){
        this.InitData();

    },

    Execute(eventCode, message){

    },

    InitData(){

    },

    OnBackClicked(){
        var msg = new G.PB._C2G_ReturnLobby_Ntt();
        G.NetManager.Instance.Send(msg, G.Opcode.C2G_ReturnLobby_Ntt);
        this.DispatchUI(G.UI_Event.Canvas_ShowMain, true);
        this.DispatchUI(G.UI_Event.Canvas_ShowFight, false);
    },

});

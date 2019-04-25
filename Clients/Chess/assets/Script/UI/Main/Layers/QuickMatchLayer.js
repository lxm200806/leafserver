
var Enums = require('Enums');

cc.Class({
    extends: require("UIBase"),
    properties: {
    },

    XFInit(){
        this.InitData();
    },

    Execute: function(eventCode, message){
    },

    InitData(){

    },

    OnClickQuickMatch: function(){
        let self = this;
        var req = new G.PB._C2G_StartMatch_Req();
        G.NetManager.Instance.Call(req, G.Opcode._C2G_StartMatch_Req, (packet, net)=>{
            var response = G.PB._G2C_StartMatch_Ack.decode(packet.bytes);
            if(response.Error != 0){
                self.TipBar('匹配失败');
                return;
            }

            G.GM.RoomState = Enums.RoomState.Matching;
            self.TipBar('匹配中...');
            self.DispatchUI(G.UI_Event.Canvas_ShowFight, true);
            self.DispatchUI(G.UI_Event.Canvas_ShowMain, false);
            self.DispatchUI(G.UI_Event.Fight_ShowMatchingPanel, true);

        })
    },


});

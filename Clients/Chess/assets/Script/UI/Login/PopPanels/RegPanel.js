cc.Class({
    extends: require('UIBase'),

    properties: {
        name_input:   cc.EditBox,
        psd_input:    cc.EditBox,
    },

    Init() {
        this.InitData();

        this.BindUI(G.Event_UI.Login_ShowRegPanel);
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.Event_UI.Login_ShowRegPanel:
                this.ClosePanel(message);
                break;
        
            default:
                break;
        }
    },

    InitData(){

    },

    OnRegClicked: function(){
        let self = this;
        var name = this.name_input.string;
        var psd = this.psd_input.string;
        if(!name) return this.TipBar("name is null");
        if(!psd) return this.TipBar("password is null");

        // G.NetManager.Instance.Open(null, (ev)=>{
        //     var c2R_Register_Req = new G.PB._C2R_Register_Req();
        //     c2R_Register_Req.Account = name;
        //     c2R_Register_Req.Password = psd;
        //     G.NetManager.Instance.Call(c2R_Register_Req, G.Opcode._C2R_Register_Req, (packet, net)=>{
        //         var response = G.PB._R2C_Register_Ack.decode(packet.bytes);
        //         net.Close();
        //         if(response.Error != 0){
        //             self.TipBar('注册失败 Error[' + response.Error + ']');
        //             return;
        //         }
        //         self.TipBar('注册成功');
        //         self.DispatchUI(G.Event_UI.Login_ShowRegPanel, false);
        //     });
        // });

        this.DispatchNet(cc.xf.Net_Event._C2R_Register_Req,{name:name, password:psd});

    },

    OnCloseClicked: function(){
        this.DispatchUI(G.Event_UI.Login_ShowRegPanel, false);
    },
});

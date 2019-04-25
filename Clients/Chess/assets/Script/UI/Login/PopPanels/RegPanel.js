cc.Class({
    extends: require('UIBase'),

    properties: {
        name_input:   cc.EditBox,
        psd_input:    cc.EditBox,
    },

    XFInit() {
        this.InitData();

        this.BindUI(G.UI_Event.Login_ShowRegPanel);
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.UI_Event.Login_ShowRegPanel:
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
        //         self.DispatchUI(G.UI_Event.Login_ShowRegPanel, false);
        //     });
        // });

        G.NetManager.Instance.Open(null, (ev)=>{
            this.DispatchNet(cc.xf.Net_Event._C2R_Register_Req,{Account:name, Password:psd});
        });


    },

    OnCloseClicked: function(){
        this.DispatchUI(G.UI_Event.Login_ShowRegPanel, false);
    },
});

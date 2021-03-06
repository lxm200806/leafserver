
cc.Class({
    extends: require('UIBase'),

    properties: {
        name_input:   cc.EditBox,
        psd_input:    cc.EditBox,
    },

    XFInit(){
        this.InitData();
        this.BindUI(G.UI_Event.Login_LoginLayer_Active);
    },

    Execute: function(eventCode, message){
        switch (eventCode) {
            case G.UI_Event.Login_LoginLayer_Active:
                this.SetLayerActive(message);
                break;
        
            default:
                break;
        }
    },

    InitData(){
        this.SetLayerActive(false);  
    },

    OnLoginClick: function(){
        var name = this.name_input.string;
        var psd = this.psd_input.string;

        let self = this;

        G.NetManager.Instance.Open(null, (ev)=>{
            var c2R_Login_Req = new G.PB._C2R_Login_Req();
            c2R_Login_Req.Account = name;
            c2R_Login_Req.Password = psd;
            G.NetManager.Instance.Call(c2R_Login_Req, G.Opcode.C2R_Login_Req, (packet, net)=>{
                var response = G.PB.R2C_Login_Ack.decode(packet.bytes);
                net.Close();
                if(response.Error != 0){
                    self.TipBar('登录失败 Error[' + response.Error + ']');
                    return;
                }
                this.TipBar('登录成功');
                G.GameModel.Key = response.Key;
                G.GameModel.Address = response.Address;
                G.NetManager.Instance.Open(response.Address, (ev)=>{
                    var c2G_LoginGate_Req = new G.PB._C2G_LoginGate_Req();
                    c2G_LoginGate_Req.Key = response.Key;
                    G.NetManager.Instance.Call(c2G_LoginGate_Req, G.Opcode.C2G_LoginGate_Req, self._G2C_LoginGate_Ack.bind(self));
                });
            });
        });

    },

    _G2C_LoginGate_Ack(packet, net){
        var response = G.PB._G2C_LoginGate_Ack.decode(packet.bytes);
        if(response.Error != 0){
            net.Close();
            this.TipBar('登录网关失败 Error[' + response.Error + ']')
            return;
        }
        this.TipBar('登录网关成功');
        G.GameModel.LocalUser.PlayerID = response.PlayerID;
        G.GameModel.LocalUser.UserID = response.UserID;
        var req = new G.PB._C2G_GetUserInfo_Req();
        req.UserID = G.GameModel.LocalUser.UserID;
        G.NetManager.Instance.Call(req, G.Opcode.C2G_GetUserInfo_Req, this._G2C_GetUserInfo_Ack.bind(this));
    },

    _G2C_GetUserInfo_Ack(packet, net){
        var response = G.PB._G2C_GetUserInfo_Ack.decode(packet.bytes);
        if(response.Error != 0){
            net.Close();
            this.TipBar('获取用户数据 Error[' + response.Error + ']')
            return;
        }
        this.TipBar('获取用户数据成功');

        G.GameModel.LocalUser.NickName = response.NickName;
        G.GameModel.LocalUser.Money = response.Money;
        
        this.DispatchUI(G.UI_Event.Canvas_ShowMain, true);
        this.DispatchUI(G.UI_Event.Canvas_ShowLogin, false);
    },

    OnRegClick(){
        this.DispatchUI(G.UI_Event.Login_ShowRegPanel, true);
    },

    OnTestClick() {
        Toast.showText('大家好啊');
    }

    
});

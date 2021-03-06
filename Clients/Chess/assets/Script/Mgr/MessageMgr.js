var UIBase = require('UIBase');
var EncodeTool = require('EncodeTool');

cc.Class({
    extends: UIBase,

    XFInit(){

        this.BindNet(cc.xf.Net_Event._C2R_Login_Req);
        this.BindNet(cc.xf.Net_Event._C2R_Register_Req);
        this.BindNet(cc.xf.Net_Event._C2G_LoginGate_Req);
        this.BindNet(cc.xf.Net_Event._C2G_GetUserInfo_Req);
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case cc.xf.Net_Event._C2R_Login_Req:
                this._C2R_Login_Req(message);
                break;
            case cc.xf.Net_Event._C2R_Register_Req:
                this._C2R_Register_Req(message);
                break;
            case cc.xf.Net_Event._C2G_LoginGate_Req:
                this._C2G_LoginGate_Req(message);
                break;
            case cc.xf.Net_Event._C2G_GetUserInfo_Req:
                this._C2G_GetUserInfo_Req(message);
                break;
            default:
                break;
        }
    },

    sendMessage(data){
        let protocolId = netConfig.ProtocolId[xyName];
        let message = msg[xyName].create(data);
        let buffer  = msg[xyName].encode(message).finish();
        //leaf 前两位为协议序号，故需包装一下
        let addtag_buffer = this.netControl.protoBufAddtag(protocolId,buffer);

        this.netControl.send(addtag_buffer.buffer);
        console.log("sendToWS");
    },

    _C2R_Login_Req(message){
    },

    _C2R_Register_Req(message){
        let packet = cc.xf.msg.C2R_Register_Req.create({Account:message.Account, Password:message.Password});
        let buffer = cc.xf.msg.C2R_Register_Req.encode(packet).finish();
        G.NetManager.Instance.Send(buffer, cc.xf.Opcode.C2R_Register_Req);
    },

    _C2G_LoginGate_Req(message){

    },

    _C2G_GetUserInfo_Req(message){

    },




});

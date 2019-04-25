var AccountHandler = cc.Class({
    extends: require('HandlerBase'),

    OnReceive(_subCode, _data){
        console.log('AccountHandler receive subcode[' + _subCode + ']');        
        switch (_subCode) {
            case G.PB.account.EMAccount.E_RegAck:
                this.RegAck(G.PB.account.RegAck.decode(_data));
                break;
            case G.PB.account.EMAccount.E_LoginAck:
                this.LoginAck(G.PB.account.LoginAck.decode(_data));
                break;
            default:
                break;
        }
    },

    RegAck(_msg){
        switch (_msg.ackCode) {
            case 0:
                this.DispatchUI(G.UI_Event.Login_ShowRegPanel, false);
                this.TipBar('注册成功');
                break;
            default:
                this.TipBar('注册失败['+_msg.ackCode+"]");
                break;
        }
    },

    LoginAck: function(_msg){
        switch (_msg.ackCode) {
            case 0:

                break;
            default:
                this.TipBar('登录失败['+_msg.ackCode+"]");
                break;
        }
    }
});

module.exports = AccountHandler;

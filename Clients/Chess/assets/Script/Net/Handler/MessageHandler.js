var Opcode = require('ChessOuterOpcode');

var MessageHandler = cc.Class({
    extends: require('HandlerBase'),

    OnReceive(_opCode, _data){
        switch (_opCode) {
            case Opcode._R2C_Register_Ack:
                this._R2C_Register_Ack(cc.xf.msg.R2C_Register_Ack.decode(_data));
                break;
            case Opcode._Actor_GamerEnterRoom_Ntt:
                this._Actor_GamerEnterRoom_Ntt(G.PB._Actor_GamerEnterRoom_Ntt.decode(_data));
                break;
            case Opcode._Actor_GamersInRoom_Ntt:
                this._Actor_GamersInRoom_Ntt(G.PB._Actor_GamersInRoom_Ntt.decode(_data));
                break;
            case Opcode._Actor_GamerExitRoom_Ntt:
                this._Actor_GamerExitRoom_Ntt(G.PB._Actor_GamerExitRoom_Ntt.decode(_data));
                break;
            case Opcode._Actor_GamerReady_Ntt:
                this._Actor_GamerReady_Ntt(G.PB._Actor_GamerReady_Ntt.decode(_data));
                break;
            case Opcode._Actor_GamerReconnect_Ntt:
                this._Actor_GamerReconnect_Ntt(G.PB._Actor_GamerReconnect_Ntt.decode(_data));
                break;
            case Opcode._Actor_GameStart_Ntt:
                this._Actor_GameStart_Ntt(G.PB._Actor_GameStart_Ntt.decode(_data));
                break;
            case Opcode._Actor_AuthorityGrabLandlord_Ntt:
                this._Actor_AuthorityGrabLandlord_Ntt(G.PB._Actor_AuthorityGrabLandlord_Ntt.decode(_data));
                break;
            case Opcode._Actor_GamerGrabLandlordSelect_Ntt:
                this._Actor_GamerGrabLandlordSelect_Ntt(G.PB._Actor_GamerGrabLandlordSelect_Ntt.decode(_data));
                break;
            case Opcode._Actor_AuthorityPlayCard_Ntt:
                this._Actor_AuthorityPlayCard_Ntt(G.PB._Actor_AuthorityPlayCard_Ntt.decode(_data));
                break;
            case Opcode._Actor_SetMultiples_Ntt:
                this._Actor_SetMultiples_Ntt(G.PB._Actor_SetMultiples_Ntt.decode(_data));
                break;
            case Opcode._Actor_Gameover_Ntt:
                this._Actor_Gameover_Ntt(G.PB._Actor_GameStart_Ntt.decode(_data));
                break;
            default:
                console.error('MessageHandler OnReceive opCode:'+ _opCode);
                break;
        }
    },

    _R2C_Register_Ack(_msg){
        console.log('_R2C_Register_Ack');

    },
    _Actor_GamerEnterRoom_Ntt(_msg){
        console.log("_Actor_GamerEnterRoom_Ntt");
    },
    _Actor_GamersInRoom_Ntt(_msg){
        console.log("_Actor_GamersInRoom_Ntt");
    },
    _Actor_GamerExitRoom_Ntt(_msg){
        console.log("_Actor_GamerExitRoom_Ntt");
    },
    _Actor_GamerReady_Ntt(_msg){
        console.log("_Actor_GamerReady_Ntt");
        this.DispatchUI(G.UI_Event._Actor_GamerReady_Ntt, _msg);
    },
    _Actor_GamerReconnect_Ntt(_msg){
        console.log("_Actor_GamerReconnect_Ntt");
    },
    _Actor_GameStart_Ntt(_msg){
        console.log("_Actor_GameStart_Ntt");

    },
    _Actor_AuthorityGrabLandlord_Ntt(_msg){
        console.log("_Actor_AuthorityGrabLandlord_Ntt");
    },
    _Actor_GamerGrabLandlordSelect_Ntt(_msg){
        console.log("_Actor_GamerGrabLandlordSelect_Ntt");
    },
    _Actor_AuthorityPlayCard_Ntt(_msg){
        console.log("_Actor_AuthorityPlayCard_Ntt");

    },
    _Actor_SetMultiples_Ntt(_msg){
        console.log("_Actor_SetMultiples_Ntt");

    },
    _Actor_Gameover_Ntt(_msg){
        console.log("_Actor_Gameover_Ntt");
    },

});

module.exports = MessageHandler;
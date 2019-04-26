var Opcode = require('ChessOuterOpcode');

var MessageHandler = cc.Class({
    extends: require('HandlerBase'),

    OnReceive(_opCode, _data){
        switch (_opCode) {
            case Opcode.R2C_Register_Ack:
                this.R2C_Register_Ack(cc.xf.msg.R2C_Register_Ack.decode(_data));
                break;
            case Opcode.Actor_GamerEnterRoom_Ntt:
                this.Actor_GamerEnterRoom_Ntt(G.PB.Actor_GamerEnterRoom_Ntt.decode(_data));
                break;
            case Opcode.Actor_GamersInRoom_Ntt:
                this.Actor_GamersInRoom_Ntt(G.PB.Actor_GamersInRoom_Ntt.decode(_data));
                break;
            case Opcode.Actor_GamerExitRoom_Ntt:
                this.Actor_GamerExitRoom_Ntt(G.PB.Actor_GamerExitRoom_Ntt.decode(_data));
                break;
            case Opcode.Actor_GamerReady_Ntt:
                this.Actor_GamerReady_Ntt(G.PB.Actor_GamerReady_Ntt.decode(_data));
                break;
            case Opcode.Actor_GamerReconnect_Ntt:
                this.Actor_GamerReconnect_Ntt(G.PB.Actor_GamerReconnect_Ntt.decode(_data));
                break;
            case Opcode.Actor_GameStart_Ntt:
                this.Actor_GameStart_Ntt(G.PB.Actor_GameStart_Ntt.decode(_data));
                break;
            case Opcode.Actor_AuthorityGrabLandlord_Ntt:
                this.Actor_AuthorityGrabLandlord_Ntt(G.PB.Actor_AuthorityGrabLandlord_Ntt.decode(_data));
                break;
            case Opcode.Actor_GamerGrabLandlordSelect_Ntt:
                this.Actor_GamerGrabLandlordSelect_Ntt(G.PB.Actor_GamerGrabLandlordSelect_Ntt.decode(_data));
                break;
            case Opcode.Actor_AuthorityPlayCard_Ntt:
                this.Actor_AuthorityPlayCard_Ntt(G.PB.Actor_AuthorityPlayCard_Ntt.decode(_data));
                break;
            case Opcode.Actor_SetMultiples_Ntt:
                this.Actor_SetMultiples_Ntt(G.PB.Actor_SetMultiples_Ntt.decode(_data));
                break;
            case Opcode.Actor_Gameover_Ntt:
                this.Actor_Gameover_Ntt(G.PB.Actor_GameStart_Ntt.decode(_data));
                break;
            default:
                console.error('MessageHandler OnReceive opCode:'+ _opCode);
                break;
        }
    },

    R2C_Register_Ack(_msg){
        console.log('R2C_Register_Ack');

    },
    Actor_GamerEnterRoom_Ntt(_msg){
        console.log("Actor_GamerEnterRoom_Ntt");
    },
    Actor_GamersInRoom_Ntt(_msg){
        console.log("Actor_GamersInRoom_Ntt");
    },
    Actor_GamerExitRoom_Ntt(_msg){
        console.log("Actor_GamerExitRoom_Ntt");
    },
    Actor_GamerReady_Ntt(_msg){
        console.log("Actor_GamerReady_Ntt");
        this.DispatchUI(G.UI_Event.Actor_GamerReady_Ntt, _msg);
    },
    Actor_GamerReconnect_Ntt(_msg){
        console.log("Actor_GamerReconnect_Ntt");
    },
    Actor_GameStart_Ntt(_msg){
        console.log("Actor_GameStart_Ntt");

    },
    Actor_AuthorityGrabLandlord_Ntt(_msg){
        console.log("Actor_AuthorityGrabLandlord_Ntt");
    },
    Actor_GamerGrabLandlordSelect_Ntt(_msg){
        console.log("Actor_GamerGrabLandlordSelect_Ntt");
    },
    Actor_AuthorityPlayCard_Ntt(_msg){
        console.log("Actor_AuthorityPlayCard_Ntt");

    },
    Actor_SetMultiples_Ntt(_msg){
        console.log("Actor_SetMultiples_Ntt");

    },
    Actor_Gameover_Ntt(_msg){
        console.log("Actor_Gameover_Ntt");
    },

});

module.exports = MessageHandler;
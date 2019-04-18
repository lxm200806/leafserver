var MatchHandler = cc.Class({
    extends: require("HandlerBase"),

    OnReceive: function(_subCode, _data){
        console.log('MatchHandler receive subcode[' + _subCode + ']');        
        switch (_subCode) {
            case G.PB.match.EMMatch.E_EnterAck:
                this.EnterAck(G.PB.match.EnterAck.decode(_data));
                break;
            case G.PB.match.EMMatch.E_EnterAction:
                this.EnterAction(G.PB.match.EnterAction.decode(_data));
                break;
            case G.PB.match.EMMatch.E_LeaveAck:
                this.LeaveAck(G.PB.match.LeaveAck.decode(_data));
                break;
            case G.PB.match.EMMatch.E_LeaveAction:
                this.LeaveAction(G.PB.match.LeaveAction.decode(_data));
                break;
            case G.PB.match.EMMatch.E_ReadyAck:
                this.ReadyAck(G.PB.match.ReadyAck.decode(_data));
                break;
            case G.PB.match.EMMatch.E_ReadyAction:
                this.ReadyAction(G.PB.match.ReadyAction.decode(_data));
                break;
            case G.PB.match.EMMatch.E_StartFightAck:
                this.StartFightAck(G.PB.match.StartFightAck.decode(_data));
                break;
            case G.PB.match.EMMatch.E_StartFightAction:
                this.StartFightAction(G.PB.match.StartFightAction.decode(_data));
                break;
            default:
                break;
        }
    },

    EnterAck: function(_msg){
        if(_msg.ackCode != 0) return this.TipBar('进入匹配失败['+_msg.ackCode+']');
    },

    EnterAction: function(_msg){
        G.GameModel.playerList[_msg.player.siteId] = _msg.player;
        this.DispatchUI(G.Event_UI.ENTER_ROOM, _msg.player.siteId);
    },

    LeaveAck: function(_msg){

    },

    LeaveAction: function(_msg){
        G.GameModel.playerList[_msg.siteId] = null;
        this.DispatchUI(G.Event_UI.OUT_ROOM, _msg.player.siteId);
    },

    ReadyAck: function(_msg){
        if(_msg.ackCode != 0) return this.TipBar('准备失败['+_msg.ackCode+"]");

        G.GameModel.playerList[_msg.siteId].state = 1;
        this.DispatchUI(G.Event_UI.READY, _msg.player.siteId);
    },

    ReadyAction: function(_msg){
        G.GameModel.playerList[_msg.siteId].state = 1;
        this.DispatchUI(G.Event_UI.READY, _msg.player.siteId);
    },

    StartFightAck: function(_msg){

    },

    StartFightAction: function(_msg){

    }

});

module.exports = MatchHandler;

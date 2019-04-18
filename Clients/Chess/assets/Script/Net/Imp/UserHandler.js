var UserHandler = cc.Class({
    extends: require('HandlerBase'),

    OnReceive: function(_subCode, _data){
        console.log('UserHandler receive subcode[' + _subCode + ']');        
        switch (_subCode) {
            case G.PB.user.EMUser.E_CreateUserAck:
                this.CreateUserAck(G.PB.user.CreateUserAck.decode(_data));
                break;
            case G.PB.user.EMUser.E_UserInfoAck:
                this.UserInfoAck(G.PB.user.UserInfoAck.decode(_data));
                break;
            case G.PB.user.EMUser.E_UserOnlineAck:
                this.UserOnlineAck(G.PB.user.UserOnlineAck.decode(_data));
                break;
            case G.PB.user.EMUser.E_UserOnlineAction:
                this.UserOnlineAction(G.PB.user.UserOnlineAction.decode(_data));
                break;
            default:
                break;
        }
    },

    CreateUserAck: function(_msg){
        if(_msg.ackCode != 0){
            //创建角色失败
            this.TipBar("创建角色失败");
            return;
        } 
        this.DispatchUI(G.Event_UI.SHOW_PLAYER_PANEL, false);

        G.GameModel.user = _msg.user;
        this.DispatchUI(G.Event_UI.SHOW_MAIN_INFO_HUB, true);
        this.DispatchUI(G.Event_UI.SHOW_QUICKMATCH_PANEL, true);

        // this.DispatchUI(G.Event_UI.ROOM_PANEL_ACTIVE, true);
        // this.DispatchUI(G.Event_UI.SHOW_ENTER_ROOM, true);

        this.TipBar("创建角色成功");
    },

    UserInfoAck: function(_msg){
        if(_msg.ackCode != 0){
            this.DispatchUI(G.Event_UI.SHOW_PLAYER_PANEL, true);
            return;
        }

        G.GameModel.user = _msg.user;
        this.DispatchUI(G.Event_UI.SHOW_MAIN_INFO_HUB, true);
        this.DispatchUI(G.Event_UI.SHOW_QUICKMATCH_PANEL, true);

        // this.DispatchUI(G.Event_UI.ROOM_PANEL_ACTIVE, true);
        // this.DispatchUI(G.Event_UI.SHOW_ENTER_ROOM, true);
    },

    UserOnlineAck: function(_msg){

    },

    UserOnlineAction: function(_msg){

    },

});

module.exports = UserHandler;

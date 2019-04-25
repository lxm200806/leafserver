var Enums = require('Enums');
cc.Class({
    extends: require("UIBase"),

    properties: {
        playerLeft: require("PlayerLeft"),
        playerRight: require("PlayerRight"),
        playerSelf: require("PlayerSelf"),

    },

    XFInit() {
        this.InitData();

        this.BindUI(G.UI_Event._Actor_GamerEnterRoom_Ntt);
        this.BindUI(G.UI_Event._Actor_GamersInRoom_Ntt);
        this.BindUI(G.UI_Event._Actor_GamerExitRoom_Ntt);
        this.BindUI(G.UI_Event._Actor_GamerReady_Ntt);
        this.BindUI(G.UI_Event._Actor_GameStart_Ntt);
        this.BindUI(G.UI_Event._Actor_AuthorityGrabLandlord_Ntt);
        this.BindUI(G.UI_Event._Actor_GamerGrabLandlordSelect_Ntt);

        this.BindUI(G.UI_Event.ShowSelf);
        this.BindUI(G.UI_Event.ENTER_ROOM);
        this.BindUI(G.UI_Event.OUT_ROOM);
        this.BindUI(G.UI_Event.READY);
    },

    Execute(eventCode, message) {
        switch (eventCode) {
            case G.UI_Event._Actor_GamerEnterRoom_Ntt:
                this._Actor_GamerEnterRoom_Ntt(message);
                break;
            case G.UI_Event._Actor_GamersInRoom_Ntt:
                this._Actor_GamersInRoom_Ntt(message);
                break;
            case G.UI_Event._Actor_GamerExitRoom_Ntt:
                this._Actor_GamerExitRoom_Ntt(message);
                break;
            case G.UI_Event._Actor_GamerReady_Ntt:
                this._Actor_GamerReady_Ntt(message);
                break;
            case G.UI_Event._Actor_GameStart_Ntt:
                this._Actor_GameStart_Ntt(message);
                break;
            case G.UI_Event._Actor_AuthorityGrabLandlord_Ntt:
                this._Actor_AuthorityGrabLandlord_Ntt(message);
                break;
            case G.UI_Event._Actor_GamerGrabLandlordSelect_Ntt:
                this._Actor_GamerGrabLandlordSelect_Ntt(message);
                break;
            case G.UI_Event.ShowSelf:
                this.ShowSelf();
                break;
            case G.UI_Event.ENTER_ROOM:
                this.EnterRoom(message);  
                break;
            case G.UI_Event.OUT_ROOM:
                this.OutRoom(message);
                break;           
            case G.UI_Event.READY:
                this.Ready(message);
                break;
            default:
                break;
        }
    },

    InitData(){
        this.playerLeft.Reset();
        this.playerRight.Reset();
        this.playerSelf.Reset();

        this.m_UserIDSeatIDTable = new Map();
    },

    _Actor_GamerEnterRoom_Ntt(message){
        //匹配中 取消匹配panel
        if(G.GM.RoomState == Enums.RoomState.Matching){
            this.DispatchUI(G.UI_Event.Fight_ShowMatchingPanel, false);
            G.GM.RoomState = Enums.RoomState.Playing;
        }

        if(message.Gamer.UserID.equals(G.GameModel.LocalUser.UserID)){
            //自己进入房间
            this.SelfEnterRoom(message.Gamer);
        }else{
            if(!this.playerSelf.IsInRoom()){
                console.error('自己还没进入房间 别人不可以进哦');
                return;
            }
            this.EnterRoom(message.Gamer);
        }
    },

    _Actor_GamersInRoom_Ntt(message){
        for(var i = 0; i < message.Gamers.length; i++){
            var gamer = message.Gamers[i];
            this.EnterRoom(gamer);
        }
    },

    _Actor_GamerExitRoom_Ntt(message){
        this.OutRoom(message.UserID);
    },

    _Actor_GamerReady_Ntt(message){
        G.GameModel.GameState = Enums.GameState.Ready;

        var siteID = this.GetSitIDByUserID(message.UserID);
        this.Ready(siteID);
    },

    _Actor_GameStart_Ntt(message){
        console.log('GameStart StartFaPai');
        G.GameModel.GameState = Enums.GameState.Palying;
        this.DispatchUI(G.UI_Event.Fight_ResetGameStartUI);
        for(var i = 0; i < message.GamersCards.length; i++){
            this.CheckPlayer(i);
            var player = this.GetPlayer(i);
            if(player){
                this.GetPlayer(i).SetCardsCount(message.GamersCardsCount[i]);
                this.GetPlayer(i).SetCards(message.GamersCards[i].GamerCards);
                player.FaPai();
            }
        }
    },

    _Actor_AuthorityGrabLandlord_Ntt(message){
        this.CheckPlayerByUserID(message.UserID);
        var player = this.GetPlayerByUserID(message.UserID);
        player.TipGrabLandlord();
    },

    _Actor_GamerGrabLandlordSelect_Ntt(message){
        this.CheckPlayerByUserID(message.UserID);
        var player = this.GetPlayerByUserID(message.UserID);
        if(message.IsGrab){
            player.Say('抢地主');
        }else{
            player.Say('不抢');
        }
    },

    GamersInRoom(){

    },

    InitPlayerSeat(selfSiteID){
        if(selfSiteID < 0 || selfSiteID >= 3) return;
        this.m_PlayerList = [];

        this.m_PlayerList[selfSiteID] = this.playerSelf;
        var nextSiteId = this.GetNextSiteId(selfSiteID);
        this.m_PlayerList[nextSiteId] = this.playerLeft;
        nextSiteId = this.GetNextSiteId(nextSiteId);
        this.m_PlayerList[nextSiteId] = this.playerRight;
    },
    
    GetNextSiteId(siteID){
        var nextSiteId = siteID + 1;
        if(nextSiteId >= 3) nextSiteId = 0;
        return nextSiteId;
    },

    GetNextPlayer(siteID) {
        var nextSiteId = this.GetNextSiteId(siteID);
        return this.m_PlayerList[nextSiteId]; 
    },

    ShowSelf(){
        this.playerSelf.Show();
    },

    SelfEnterRoom(gamer) {
        this.m_UserIDSeatIDTable.set(gamer.UserID.toNumber(), gamer.SeatID);
        this.InitPlayerSeat(gamer.SeatID);
        this.playerSelf.SetGamerData(gamer);
        this.playerSelf.EnterRoom();

        if(!gamer.IsReady){
            this.DispatchUI(G.UI_Event.Fight_ShowReadyPanel, true);
        }
    },

    EnterRoom(gamer) {
        this.CheckPlayer(gamer.SeatID);
        this.m_UserIDSeatIDTable.set(gamer.UserID.toNumber(), gamer.SeatID);
        this.m_PlayerList[gamer.SeatID].SetGamerData(gamer);
        this.m_PlayerList[gamer.SeatID].EnterRoom();
    },

    OutRoom(userID) {
        this.CheckPlayerByUserID(userID);
        var siteID = this.GetSitIDByUserID(userID);
        this.m_UserIDSeatIDTable.delete(userID.toNumber());
        this.m_PlayerList[siteID].OutRoom();
    },

    Ready(siteID) {
        this.CheckPlayer(siteID);
        this.m_PlayerList[siteID].Ready();
    },

    CheckPlayerByUserID(userID){
        var siteID = this.GetSitIDByUserID(userID);
        this.CheckPlayer(siteID);
    },

    CheckPlayer(siteID){
        if(siteID < 0 || siteID >= this.m_PlayerList.length) return;
        if(!this.m_PlayerList[siteID]) return;
    },

    GetPlayer(siteID){
        return this.m_PlayerList[siteID];
    },

    GetSitIDByUserID(userID){
        var siteID = this.m_UserIDSeatIDTable.get(userID.toNumber());
        return siteID;
    },

    GetPlayerByUserID(userID){
        var seatID = this.GetSitIDByUserID(userID);
        return this.m_PlayerList[seatID];
    },


});

var Enums = require('Enums');
cc.Class({
    extends: require("UIBase"),

    properties: {
        icon_node: cc.Node,
        name_lb: cc.Label,
        coin_lb: cc.Label,
        ready_node: cc.Node,
        say_node: cc.Node,
    },

    Init() {
        this.InitData();

        this.BindUI(G.Event_UI.Fight_ResetGameStartUI);
        this.BindUI(G.Event_UI.Fight_ResetTurn);
    },

    Execute(eventCode, message) {
        switch (eventCode) {
            case G.Event_UI.Fight_ResetGameStartUI:
                this.Fight_ResetGameStartUI(message);
                break;
            case G.Event_UI.Fight_ResetTurn:
                this.ResetTurn();
                break;
            default:
                break;
        }
    },

    InitData(){
        this.turnMeTip = cc.find('Info_Node/TurnMeTip', this.node);
        this.turnMeTip.active = false;
        this.m_SayNode = cc.find('Info_Node/SayNode', this.node);
        this.m_SayNode.addComponent('SayNode');
        this.m_SayNode.active = false;
    },

    Reset() {
        this.ResetData();
        this.node.active = false;
        this.name_lb.string = '';
        this.coin_lb.string = '';
        this.ready_node.active = false;
    },

    ResetData(){
        this.m_Gamer = new ST.GamerInfo();
        this.m_State = Enums.SeatState.None;

        this.m_CardsCount = 0;
        this.m_Cards = [];
    },

    Show(){
        this.active = true;
    },

    SetGamerData(gamer){
        this.m_Gamer = gamer;
        if(this.m_Gamer.IsReady){
            this.m_State = Enums.SeatState.Ready;
        }else{
            this.m_State = Enums.SeatState.Idle;
        }
    },

    SetCardsCount(cardsCount){
        this.m_CardsCount = cardsCount;
    },

    SetCards(cards){
        this.m_Cards = cards;
    },

    EnterRoom(){
        this.node.active = true;
        this.RefreshGamer();
    },

    OutRoom(){
        this.node.active = false;
        this.Reset();
    },

    Ready(isShow = true){
        this.ready_node.active = isShow;
    },

    RefreshGamer(){
        this.name_lb.string = this.m_Gamer.NickName;
        this.coin_lb.string = this.m_Gamer.Money;
        this.ready_node.active = this.m_Gamer.IsReady;
    },

    IsInRoom(){
        return this.node.active;
    },

    FaPai(){
    },

    TipGrabLandlord(){
        this.TurnMe();
    },

    ResetTurn(){
        this.turnMeTip.active = false;
    },

    PreTurnMe(){
        this.DispatchUI(G.Event_UI.Fight_ResetTurn);
    },
    
    TurnMe(){
        this.PreTurnMe();
        this.turnMeTip.active = true;
    },

    Say(text){
        this.m_SayNode.getComponent('SayNode').Show(text);
    },

    Fight_ResetGameStartUI(){
        this.ready_node.active = false;
    },

    
});

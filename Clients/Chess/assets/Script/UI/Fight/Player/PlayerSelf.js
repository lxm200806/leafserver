
let PlayerBase = require('PlayerBase');

cc.Class({
    extends: PlayerBase,
    properties: {
        handCardsNode: cc.Node,
    },

    Init(){
        PlayerBase.prototype.Init.apply(this);

        this.InitData();
    },

    InitData(){
        PlayerBase.prototype.InitData.apply(this);

        this.m_HandCards = this.handCardsNode.getComponent('HandCards');

    },

    Show(){
        this.name_lb.string = G.GameModel.LocalUser.NickName;
        this.coin_lb.string = G.GameModel.LocalUser.Money;
        this.node.active = true;
    },

    FaPai(){
        this.m_HandCards.FaPai(this.m_Cards);
    },

    TipGrabLandlord(){
        PlayerBase.prototype.TipGrabLandlord.apply(this);
        this.DispatchUI(G.Event_UI.Fight_ShowGrabLandlordPanel, true);
    },

    GetHandCards(){
        if(!this.m_HandCards) this.m_HandCards = this.handCardsNode.getComponent('HandCards');
        return this.m_HandCards;
    },

});

// module.exports = PlayerSelf;
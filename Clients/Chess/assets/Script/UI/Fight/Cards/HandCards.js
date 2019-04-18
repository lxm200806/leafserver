
var XBase = require('XBase');

cc.Class({
    extends: XBase,

    properties: {
        cardPrefab: cc.Prefab,
    },

    Init: function(){
        this.InitData();

    },

    Execute: function(eventCode, message){
        switch (eventCode) {
            default:
                break;
        }
    },

    InitData(){
        this.m_CardsSpritePool = new cc.NodePool();
        for(var i = 0; i < 21; i++){
             let cardSprite = cc.instantiate(this.cardPrefab);
             this.m_CardsSpritePool.put(cardSprite);
        }

        this.m_HandCards = [];
        this.m_HandCardsNodes = [];
    },

    InitWithData(){

    },

    GetACardSprite(){
        if(this.m_CardsSpritePool.size() > 0) return this.m_CardsSpritePool.get();
        return cc.instantiate(this.cardPrefab);
    },

    GetCard(card){
        var cardNode = this.GetACardSprite();
        cardNode.getComponent('CardNode').InitWithData(card);
        return cardNode;
    },

    FaPai(cards){
        this.m_HandCards = cards;
        this.CleanHandCards();
        for(var i = 0; i < this.m_HandCards.length; i++){
            let card = this.GetCard(this.m_HandCards[i]);
            this.m_HandCardsNodes.push(card);
            card.parent = this.node;
        }
        this.ResetHandCardsPos();
    },

    CleanHandCards(){
        this.node.removeAllChildren(false);
        for(var i = 0; i < this.m_HandCardsNodes.length; i++){
            this.RecycleHandCard(this.m_HandCardsNodes[i]);
        }
        this.m_HandCardsNodes = [];
    },

    RecycleHandCard(card){
        this.m_CardsSpritePool.put(card);
    },

    ResetHandCardsPos(){
        var cardWidth = 153;
        var cardOffX = 50;
        var cardCount = this.m_HandCardsNodes.length;
        var cardsLength = (cardCount - 1) * cardOffX + cardWidth;
        var startX = cardsLength / 2 * -1;
        for(var i = 0; i < cardCount; i++){
            var card = this.m_HandCardsNodes[i];
            card.x = startX + cardOffX * i;
            card.y = 0;
            card.anchorX = 0;
            card.anchorY = 0;
        }
    },

    OutCard(cards){

    },

    onDestroy(){
        XBase.prototype.onDestroy.apply(this);
        this.m_CardsSpritePool.clear();
        this.m_CardsSpritePool = null;
    },


});

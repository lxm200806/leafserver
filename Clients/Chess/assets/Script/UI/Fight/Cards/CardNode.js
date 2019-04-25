
var XBase = require('XBase');
var Configs = require('Configs');

cc.Class({
    extends: XBase,

    properties: {
    },

    XFInit(){
        this.InitData();

    },

    InitData(){
        this.getComponent(cc.Sprite).spriteFrame = this.GetCardFrame(); 
    },

    InitWithData(card){
        this.m_Card = card;
    },

    GetCardFrame(){
        var name = Configs.CardSuits[this.m_Card.CardSuits] + Configs.CardWeight[this.m_Card.CardWeight];
        var frame = G.FightAssetMng.pockers.getSpriteFrame(name);
        if(!frame){
            console.error('GetCardFrame null name['+name+']CardSuits['+this.m_Card.CardSuits+']CardWeight['+this.m_Card.CardWeight+']');
        }
        return frame;
    },

    onDestroy(){
        XBase.prototype.onDestroy.apply(this);

    },

});

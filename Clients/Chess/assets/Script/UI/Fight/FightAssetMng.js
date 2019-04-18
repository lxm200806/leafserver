

cc.Class({
    extends: require('UIBase'),

    properties: {
        pockers : cc.RawAsset,
    },

    Init(){

        this.InitData();
    },

    InitData(){
        G.FightAssetMng = this;
    },

});

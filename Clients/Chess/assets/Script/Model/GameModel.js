let XBase = require('XBase');
let Enums = require('Enums');

let GameModel = cc.Class({
    extends: XBase,

    statics: {
        Instance : null,
    },

    XFInit(){
        this.InitData();
        GameModel.Instance = this;
    },

    InitData(){
        this.Key = '';
        this.Address = '';
        this.LocalUser = new ST.UserInfo();

        this.GameState = Enums.GameState.None;
    },

});

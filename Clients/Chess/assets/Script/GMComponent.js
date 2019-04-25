
var Enums = require('Enums');

var GMComponent = cc.Class({
    extends: require('XBase'),
    statics: {
        Instance: null,
    },

    XFInit(){
        this.InitData();
        GMComponent.Instance = this;
        G.GM = GMComponent.Instance;
    },

    InitData(){
        this.RoomState = Enums.RoomState.None;
        this.GameState = Enums.GameState.None;
    },

});

module.exports = GMComponent;

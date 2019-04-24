var GameManager = cc.Class({

    extends: require('ManagerBase'),
    // use this for initialization
    Init: function () {
        
        G.GameManager.Instance = this;
    },

});

module.exports = GameManager;
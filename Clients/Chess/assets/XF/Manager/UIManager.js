var UIManager = cc.Class({

    extends: require('ManagerBase'),
    // use this for initialization
    Init: function () {
        
        G.UIManager.Instance = this;
    },

});

module.exports = UIManager;

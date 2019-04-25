var GameManager = cc.Class({

    extends: require('ManagerBase'),
    // use this for initialization
    XFInit() {
        
        G.GameManager.Instance = this;
    },

});

module.exports = GameManager;
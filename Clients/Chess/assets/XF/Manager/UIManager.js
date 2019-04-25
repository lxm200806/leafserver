var UIManager = cc.Class({

    extends: require('ManagerBase'),
    // use this for initialization
    XFInit() {
        
        G.UIManager.Instance = this;
    },

});

module.exports = UIManager;


cc.Class({
    extends: require('XBase'),

    properties: {
    },

    XFInit(){
        this.InitData();
        this.DispatchUI(G.UI_Event.Canvas_ShowLogin, true);
    },

    InitData(){
        this.node.addComponent(require('GMComponent'));
        this.node.addComponent(require('MessageMgr'));
    },

});

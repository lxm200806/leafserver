
cc.Class({
    extends: require('XBase'),

    properties: {
    },

    Init(){
        this.InitData();
        this.DispatchUI(G.Event_UI.Canvas_ShowLogin, true);
    },

    InitData(){
        this.node.addComponent(require('GMComponent'));
    },

});

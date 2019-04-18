
cc.Class({
    extends: require('UIBase'),

    // use this for initialization
    Init: function () {
        this.Dispatch(G.AreaCode.UI, G.Event_UI.Login_LoginLayer_Active, true);
    },

});

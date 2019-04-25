cc.Class({
    extends: require('UIBase'),
    properties: {
        icon_node: cc.Node,
        name_lb: cc.Label,
        coin_lb: cc.Label,
    },

    XFInit(){
        this.InitData();
        this.BindUI(G.UI_Event.SHOW_MAIN_INFO_HUB);
    },

    Execute(eventCode, message){
    },

    InitData(){
        this.RefreshInfo();
    },

    RefreshInfo(){
        this.name_lb.string = G.GameModel.LocalUser.NickName;
        this.coin_lb.string = G.GameModel.LocalUser.Money;
    },
});
cc.Class({
    extends: require('UIBase'),
    properties: {
        createRoom_node: cc.Node,
        enterRoom_node: cc.Node,
        backRoom_node: cc.Node,
    },

    Init(){
        this.InitData();
        this.Bind(G.Event_UI.Main_CreateRoomButton_Active);
        this.Bind(G.Event_UI.Main_BackRoomButton_Active);
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.Event_UI.Main_CreateRoomButton_Active:
                this.enterRoom_node.active = true;
                this.createRoom_node.active = true;
                this.backRoom_node.active = false;
                break;           
            case G.Event_UI.Main_BackRoomButton_Active:
                this.backRoom_node.active = true;
                this.createRoom_node.active = true;
                this.enterRoom_node.active = false;
                break;
            default:
                break;
        }
    },

    InitData(){
        this.createRoom_node.active = false;
        this.enterRoom_node.active = false;
        this.backRoom_node.active = false;
    },

    OnClickCreateRoom: function(){

    },

    OnClickEnterRoom: function(){

    },

    OnClickBackRoom: function(){

    },
});

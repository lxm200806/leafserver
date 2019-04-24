cc.Class({
    extends: require("UIBase"),

    Execute: function(eventCode, message){
        switch (eventCode) {
            case G.Event_UI.SHOW_PLAYER_PANEL:
                this.SetLayerActive(message);
                break;
            default:
                break;
        }
    },

    properties: {
        name_input:   cc.EditBox,

    },

    Init: function(){
        this.BindUI(G.Event_UI.SHOW_PLAYER_PANEL);
        this.SetLayerActive(false);
    },

    OnClickOk: function(){
        var name = this.name_input.string;
        if(!name) return;
        if(name.length < 3 || name > 12) return;
    }

});

cc.Class({
    extends: require("UIBase"),
    properties: {
        text_lb: cc.Label,
    },

    XFInit(){
        this.InitData();
    },

    Execute: function(eventCode, message){
        switch (eventCode) {
            case G.UI_Event.TIP_BAR:
                this.ShowTipBar(message);
                break;
        
            default:
                break;
        }
    },

    InitData(){
        this.SetLayerActive(false);
    },

    OnTouchStart: function(event){
        this.HideTipBar();
    },

    XFInit(){
        this.BindUI(G.UI_Event.TIP_BAR);
        this.SetLayerActive(false);
    },

    ShowTipBar: function(_text){
        this.text_lb.string = _text;
        this.SetLayerActive(true);

        this.unschedule(this.HideTipBar);
        this.schedule(this.HideTipBar, 3);
    },

    HideTipBar: function(){
        this.unschedule(this.HideTipBar);
        this.text_lb.string = "";
        this.SetLayerActive(false);
    },
});

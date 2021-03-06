
cc.Class({
    extends: require('XBase'),
    
    properties:{
        isScrowTouch: {
            default: false,
            tooltip: '是否禁止触摸向下传递',
        },    
    },

    SetPanelActive: function(_value){
        this.node.active = _value;
    },

    TipBar(message){
        this.DispatchUI(G.UI_Event.TIP_BAR, message);
    },

    onEnable(){
        if(this.isScrowTouch){
            this.node.on('touchstart', function(){
                return false;
            }, this.node);

        }
    },
    onDisable(){
        this.node.targetOff(this.node);
    },
    
});

var XBase = require('XBase');
cc.Class({
    extends: XBase,

    properties:{
        isScrowTouch: {
            default: false,
            tooltip: '是否禁止触摸向下传递',
        },    
    },

    SetLayerActive(_value){
        this.node.active = _value;
    },

    ClosePanel(message){
        if(!message){
            this.Close();
        }
    },

    Close(){
        this.node.destroy();
    },


    //////////////////////////////////
    ////系统方法不能被子类覆盖
    /////////////////////////////////
    onEnable: function(){
        if(this.isScrowTouch){
            this.node.on('touchstart', this.On_TouchStart.bind(this), this.node);
            this.node.on('touchmove', this.On_TouchMove.bind(this), this.node);
            this.node.on('touchcancel', this.On_ToucnUp.bind(this), this.node);
            this.node.on('touchend', this.On_ToucnUp.bind(this), this.node);
        }
    },

    onDisable: function(){
        this.node.targetOff(this.node);
    },



    ///////////////////////
    //UIBase 引擎回调
    ///////////////////////

    On_TouchStart: function(event){
        return false;
    },

    On_TouchMove: function(event){
    },

    On_ToucnUp: function(event){
    },


});

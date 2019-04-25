var CBase = cc.Class({
    extends: cc.Component,
    
    onLoad(){
        this.XFInit && this.XFInit();
    },
    Execute:function(eventCode, message){
    },

    Dispatch: function(areaCode, eventCode, message){
    },

    GetInstantiate(_prefab){
        return cc.instantiate(_prefab);
    },

    PopPanelWithTarget(_panel, _target){
        if(_panel && _target){
            _panel.parent = _target;
        }
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
    
});
module.exports = CBase;

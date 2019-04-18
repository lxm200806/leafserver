let XFInit = require("XFInit");
let Base = require('Base');
cc.Class({
    extends: Base,

    properties:{
        _eventList : [],
    },

    Bind(eventCode){
        if(eventCode == undefined) {
            console.error("Bind undefined eventCode");
            return;
        }
        this._eventList.push(eventCode);
        G.UIManager.Instance.Add(eventCode, this);
    },

    BindArray(eventCodes){
        this._eventList.push(eventCodes);
        G.UIManager.Instance.AddArray(eventCodes, this);
    },

    UnBind(){
        G.UIManager.Instance.RemoveArray(this._eventList, this);
        this._eventList = [];
    },
    
    Dispatch(areaCode, eventCode, message){
        XFInit.Instance.Dispatch(areaCode, eventCode, message);
    },

    DispatchUI(eventCode, message){
        this.Dispatch(G.AreaCode.UI, eventCode, message);
    },

    TipBar(message){
        this.DispatchUI(G.Event_UI.TIP_BAR, message);
    },

    GetInstantiate(node){
        return cc.instantiate(node);
    },

    PopPanelWithTarget(panel, target){
        panel.parent = target;
        panel.x = 0;
        panel.y = 0;
    },

    //////////////////////////////////
    ////系统方法不能被子类覆盖
    /////////////////////////////////
    onLoad(){
        Base.prototype.onLoad.apply(this);
    },

    onDestroy(){
        Base.prototype.onDestroy.apply(this);
        if(this._eventList.length > 0)
            this.UnBind()
    },

});

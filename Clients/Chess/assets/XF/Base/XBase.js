var XFInit = require("XFInit");
var CBase = require('CBase');
var AreaCode = require('AreaCode');

var Base = cc.Class({
    extends: CBase,

    properties: {
        _UIEventList : [],
        _GameEventList : [],
        _NetEventList : [],

    },
    
    BindUI(eventCode){
        this.Bind(AreaCode.UI, eventCode);
    },

    BindGame(eventCode){
        this.Bind(AreaCode.Game, eventCode);
    },

    BindNet(eventCode){
        this.Bind(AreaCode.Net, eventCode);
    },

    Bind(areaCode, eventCode){
        if(!areaCode) return;
        if(!eventCode) return;

        var eventManager = null;
        var eventList = null;
        switch (areaCode) {
            case AreaCode.UI:
                eventManager = G.UIManager.Instance;
                eventList = this._UIEventList;
                break;
            case AreaCode.Game:
                eventManager = G.GameManager.Instance;
                eventList = this._GameEventList;
                break;
            case AreaCode.Net:
                eventManager = G.NetManager.Instance;
                eventList = this._NetEventList;
                break;
            default:
                break;
        }

        if(eventList && eventManager){
            eventList.push(eventCode);
            eventManager.Add(eventCode, this);
        }        
    },

    UnBind(){
        if(this._UIEventList > 0){
            G.UIManager.Instance.RemoveArray(this._UIEventList, this);
            this._UIEventList = [];
        }

        if(this._GameEventList > 0){
            G.GameManager.Instance.RemoveArray(this._GameEventList, this);
            this._UIEventList = [];
        }

        if(this._NetEventList > 0){
            G.NetManager.Instance.RemoveArray(this._NetEventList, this);
            this._UIEventList = [];
        }
    },

    Dispatch(areaCode, eventCode, message){
        XFInit.Instance.Dispatch(areaCode, eventCode, message);
    },

    DispatchUI(eventCode, message){
        this.Dispatch(G.AreaCode.UI, eventCode, message);
    },

    DispatchGame(eventCode, message){
        this.Dispatch(G.AreaCode.Game, eventCode, message);
    },

    DispatchNet(eventCode, message){
        this.Dispatch(G.AreaCode.Net, eventCode, message);
    },

    onDestroy(){
        this.UnBind()
    },

});
module.exports = Base;

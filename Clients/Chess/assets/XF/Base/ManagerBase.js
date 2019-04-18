
var Map = require('Map');

var ManagerBase = cc.Class({

    extends: require('XBase'),

    properties:{
        _messageMap: {
            default:[],
        },
    },

    onLoad: function(){

        this._messageMap = new Map();
        this.Init();
    },

    Execute: function(eventCode, message){
        var list = this._messageMap.get(eventCode);
        if(list == null) return console.log('event Code not bind ['+ eventCode +']');
        for (var i = 0; i < list.length; i++) {
            list[i].Execute(eventCode, message);
        }
    },

    Add: function(eventCode, message){
        var list = null;
        if(this._messageMap.get(eventCode) == null){
            this._messageMap.set(eventCode, []);
        }
        list = this._messageMap.get(eventCode);
        list.push(message);
    },

    AddArray: function(eventCodes, message){
        if(eventCodes.length > 0){
            for(var i = 0; i < eventCodes.length; i++){
                this.Add(eventCodes[i], message);
            }
        }
    },

    Remove: function(eventCode, message){
        var list = this._messageMap.get(eventCode);
        if(list == null) return;
        if(list.length <= 1){
            this._messageMap.remove(eventCode);
        }else{
            list.splice(this.InArray(message,list), 1);
        }
    },
    
    RemoveArray: function(eventCodes, message){
        if(eventCodes.length > 0){
            for(var i = 0; i < eventCodes.length; i++){
                this.Remove(eventCodes[i], message);
            }
        }
    },

    InArray: function(obj, arr){
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == obj) return i;
        }
        return -1;
    },
});

module.exports = ManagerBase;
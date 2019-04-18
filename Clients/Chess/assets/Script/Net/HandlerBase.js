
var HandlerBase = cc.Class({
    extends: require('XBase'),

    OnReceive: function(_subCode, _data){
        Error.log("onReceive on imp");
    },
    
});

module.exports = HandlerBase;

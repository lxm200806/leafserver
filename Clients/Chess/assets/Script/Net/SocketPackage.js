
var SocketPackage = function(opCode, subCode, data){
    if(arguments.length == 3){
        this.opCode = opCode;
        this.subCode = subCode;
        this.data = data;
    }
};

SocketPackage.prototype = {
    Change(opCode, subCode, data) {
        this.opCode = opCode;
        this.subCode = subCode;
        this.data = data;
    },
}

module.exports = SocketPackage;

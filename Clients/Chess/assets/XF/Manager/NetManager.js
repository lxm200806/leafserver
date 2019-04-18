var EncodeTool = require('EncodeTool');
var MessageHandler = require('MessageHandler');

var NetManager = cc.Class({
    extends: require('ManagerBase'),

    Init: function () {
        G.NetManager.Instance = this;
        this.messageHandler = new MessageHandler();

        this.socketsCB = null;
    },

    Execute: function(eventCode, msg){
        if(this.ws){
            this.ws.send(EncodeTool.EncodePbPacket(msg));
        }
    },

    Send(pbMsg, opCode){
        if(this.ws){
            this.ws.send(EncodeTool.EncodeActorPacket(pbMsg, opCode));
        }else{
            console.error("this.ws is null");
        }
    },

    Call(pbMsg, opCode, response){
        if(this.ws){
            this.ws.RpcId++;
            this.ws.ResponseList[this.ws.RpcId] = response;
            this.ws.send(EncodeTool.EncodeRpcPacket(pbMsg, opCode, this.ws.RpcId));
        }else{
            console.error("this.ws is null");
        }
    },

    Open(ipPortAddress, callBack){

        if(!ipPortAddress){
            ipPortAddress = '127.0.0.1:10002';
        }

        this.ws = new WebSocket('ws://'+ipPortAddress);
        this.ws.binaryType = "arraybuffer";        
        this.ws.onopen = this.OnOpen.bind(this);
        this.ws.onerror  = this.OnError.bind(this);
        this.ws.onclose = this.OnClose.bind(this);
        this.ws.onmessage = this.OnMessage.bind(this);
        this.ws.RpcId = 0;
        this.ws.ResponseList = [];

        this.sessionId++;
        this.socketsCB = callBack;
    },
    
    Close(){
        if(this.ws && this.ws.readyState == WebSocket.OPEN){
            this.ws.close();
        }
    },

    IsOpen: function(){
        if(this.ws && this.ws.readyState == WebSocket.OPEN) return true;
        return false;
    },

    OnOpen(ev){
        console.log("NetManager opend"+ev);
        if(this.socketsCB){
            this.socketsCB(ev);
        }
    },

    OnError(ev,s){
        console.log('NetManager error'+ev);
    },

    OnClose: function(ev){
        console.log('NetManager close'+ev);
    },

    OnMessage: function(ev, param){
        var packet = EncodeTool.DecodePacket(ev.data);
        if(!packet) return;
        if(packet.Flag == 0x00){
            this.messageHandler.OnReceive(packet.OpCode, packet.bytes);
        }else{
            if(this.ws.ResponseList[this.ws.RpcId]){
                this.ws.ResponseList[this.ws.RpcId](packet, this);
            }
        }
    }, 
});

module.exports = NetManager;


var EncodeTool = {};

/**
 * rpc Packet
 * 
 *  Flag    : byte 1个字节 ox80// 0x80,Rpc Req; 0x40  Rpr Reponse; 0 ActorPacket 
 *  OpCode  : Uint16 2个字节
 *  RpcID   : Uint32 4个字节
 *  bytes   : Protobuffer 数据
 * 
**/

EncodeTool.EncodeRpcPacket = function(_pbMsg, _opCode, _rpcId){

    var msgBuff = _pbMsg.toArrayBuffer();
    var msgLen = msgBuff.byteLength;
    var msgView = new Uint8Array(msgBuff);

    var packetHeadLen = 1 + 2 + 4;
    var packetLen = msgLen + packetHeadLen; 
    var packetBuff  = new ArrayBuffer(packetLen + 2); //多开出两个字节存储长度

    var index = 0;

    //2个字节存储包的长度
    var buffView = new DataView(packetBuff, index, packetHeadLen + 2);
    buffView.setUint16(index, packetLen, true);
    index += 2

    //1个字节存储flag
    buffView.setUint8(index, 0x80, true);
    index += 1

    //2个字节存储Opcode
    buffView.setUint16(index, _opCode, true);
    index += 2

    //4个字节存储RpcID
    buffView.setUint32(index, _rpcId, true);
    index += 4

    //后面的是protobuffer 数据
    buffView = new Uint8Array(packetBuff, index, msgLen);
    buffView.set(msgView);
    return packetBuff;
};

/**
 * actor Packet
 * 
 *  Flag    : byte 1个字节 0x00
 *  OpCode  : Uint16 2个字节
 *  bytes   : Protobuffer 数据
 * 
**/

EncodeTool.EncodeActorPacket = function(_pbMsg, _opCode){
    
    var msgBuff = _pbMsg.toArrayBuffer();
    var msgLen = msgBuff.byteLength;
    var msgView = new Uint8Array(msgBuff);

    var packetHeadLen = 1 + 2;
    var packetLen = msgLen + packetHeadLen;
    var packetBuff  = new ArrayBuffer(packetLen + 2);

    var index = 0;
    //2个字节存储包的长度

    var buffView = new DataView(packetBuff, index, packetHeadLen + 2);
    buffView.setUint16(index, packetLen, true);
    index += 2

    //1个字节存储flag
    buffView.setUint8(index, 0x0, true);
    index += 1

    //2个字节存储Opcode
    buffView.setUint16(index, _opCode, true);
    index += 2

    //后面的是protobuffer 数据
    buffView = new Uint8Array(packetBuff, index, msgLen);
    buffView.set(msgView);
    return packetBuff;
};


/**
 *  Packet
 * 
 *  Flag    : byte 1个字节 ox80// 0x80,Rpc Req; 0x40  Rpr Reponse; 0 ActorPacket 
 *  OpCode  : Uint16 2个字节
 *  RpcID   : Uint32 4个字节 //当为ActorPacket手抖RpcID = 0；
 *  bytes   : Protobuffer 数据
 * 
**/

EncodeTool.DecodePacket = function(_recBuffer){
    if(_recBuffer.byteLength < 5) return null;

    var buffView = new DataView(_recBuffer, 0, 5);    

    //包的长度
    var packetLen = buffView.getUint16(0, true);
    if(_recBuffer.byteLength < packetLen + 2) return null;

    var packet = {};
    packet.Flag =  buffView.getUint8(2, true);
    packet.OpCode = buffView.getUint16(3, true);
    var buffView = null;
    if(packet.Flag == 0){
        packet.RpcID = 0;
        packet.bytes = _recBuffer.slice(5);
    }else{
        buffView = new DataView(_recBuffer, 0, 9);
        packet.RpcID = buffView.getUint32(5, true);
        packet.bytes = _recBuffer.slice(9);
    }
    return packet;
}




module.exports = EncodeTool;

var EncodeTool = {};

/**
 * rpc Packet
 * 
 *  Flag    : byte 1个字节 ox80// 0x80,Rpc Req; 0x40  Rpr Reponse; 0 ActorPacket 
 *  Opcode  : Uint16 2个字节
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
 *  Opcode  : Uint16 2个字节
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
 *  Opcode  : Uint16 2个字节
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
    packet.Opcode = buffView.getUint16(3, true);
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

/**
 * Leaf Server Packet
 * 
 * Opcode : Uint16 2个字节
 * bytes ://protobuffer 数据
 * 
 *  */
EncodeTool.EncodePacket_Leaf = function(_msgBuff, _opCode){

    var msgBuff = _msgBuff; //_pbMsg.toArrayBuffer();
    let packetBuff=new Uint8Array(msgBuff.length+2);

    let opCodeBinary = this.IntToUint8Array(_opCode,16);
    let opCodeUnit8 = new Uint8Array(opCodeBinary);
    packetBuff.set(opCodeUnit8,0);
    packetBuff.set(msgBuff.subarray(0, msgBuff.length),2);

    // var msgView = new Uint8Array(msgBuff);
    // var buffView = new DataView(packetBuff, 0, 2);
    // buffView.setUint16(0, _opCode, true);
    // buffView = new Uint8Array(packetBuff, 2, msgBuff.length);
    // buffView.set(msgView);

    return packetBuff.buffer;


},

EncodeTool.DecodePacket_Leaf = function(_recBuffer){

    var packet = {};

    let dataUnit8Array = new Uint8Array(_recBuffer);
    let opCode = EncodeTool.Uint8ArrayToInt(dataUnit8Array.slice(0,2));
    console.log("receive message opCode = "+opCode);
    dataUnit8Array = dataUnit8Array.slice(2);
    packet.Opcode = opCode;
    packet.bytes = dataUnit8Array;

    // var buffView = new DataView(_recBuffer, 0, 2);    
    // packet.Opcode = buffView.getUint16(0, true);
    // packet.bytes =  _recBuffer.slice(2);

    return packet;
}


/**
 * int 转 Uint8Array
 *  */
EncodeTool.IntToUint8Array = function(num, Bits){
    let resArry = [];
    let xresArry = [];
    let binaryStr = num.toString(2);
    for(let i=0;i<binaryStr.length;i++)
        resArry.push(parseInt(binaryStr[i]));

    if (Bits) {
        for(let r = resArry.length; r < Bits; r++) {
            resArry.unshift(0);
        }
    }

    let  resArryStr= resArry.join("");
    for(let j=0;j<Bits;j+=8)
        xresArry.push(parseInt(resArryStr.slice(j,j+8),2));

    return xresArry;
}

/**
 * Uint8Array[]转int
 * 相当于二进制加上4位。同时，使用|=号拼接数据，将其还原成最终的int数据
 * @param uint8Ary Uint8Array类型数组
 * @return int数字
 */
EncodeTool.Uint8ArrayToInt = function(_uint8Ary){
    let retInt =0;
    for(let i= 0;i<_uint8Ary.length;i++)
        retInt|=(_uint8Ary[i] << (8*(_uint8Ary.length-i-1)));
    return retInt;
}




module.exports = EncodeTool;

package internal

import (
	"github.com/name5566/leaf/gate"
	"github.com/name5566/leaf/log"
	"reflect"
	"server/msg"
)

func handleMsg(m interface{}, h interface{}) {
	skeleton.RegisterChanRPC(reflect.TypeOf(m), h)
}

func init() {
	handleMsg(&msg.C2R_Register_Req{}, aC2R_Register_Req)

}

func aC2R_Register_Req(args []interface{})  {
	// 收到的 消息
	m := args[0].(*msg.C2R_Register_Req)

	// 消息的发送者
	a := args[1].(gate.Agent)

	// 输出收到的消息的内容
	log.Debug("Account %v", m.Account)
	log.Debug("PassWord %v", m.Password)

	// 给发送者回应

	retBuf := &msg.R2C_Register_Ack{
		Error:0,
		Message:"ok",
	}
	a.WriteMsg(retBuf)

}

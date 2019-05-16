package internal

import (
	"github.com/name5566/leaf/gate"
	"github.com/name5566/leaf/log"
	"reflect"
	"regexp"
	"server/msg"
)

func handle(m interface{}, h interface{}) {
	skeleton.RegisterChanRPC(reflect.TypeOf(m), h)
}

func init() {
	handle(&msg.C2R_Login_Req{}, C2R_Login_Req)
	handle(&msg.C2R_Register_Req{}, C2R_Register_Req)

}

func C2R_Login_Req(args []interface{})  {
	// 收到的 消息
	m := args[0].(*msg.C2R_Login_Req)

	// 消息的发送者
	a := args[1].(gate.Agent)

	// 输出收到的消息的内容
	log.Debug("Account %v", m.Account)
	log.Debug("PassWord %v", m.Password)

	// 给发送者回应

	retBuf := &msg.R2C_Login_Ack{
		Error:0,
		Message:"ok",
		Key:123,
		Address:"127.0.0.1:10000",
	}
	a.WriteMsg(retBuf)

}

func C2R_Register_Req(args []interface{})  {
	// 收到的 消息
	m := args[0].(*msg.C2R_Register_Req)
	a := args[1].(gate.Agent)
	account := m.Account
	//password := m.Password
	log.Debug("receive register account %v", account)

	reg := regexp.MustCompile(`/^[a-zA-Z\d]\w{2,10}[a-zA-Z\d]$/`)
	matched := reg.FindString(account)
	if (matched != " ") {
		log.Debug("register name is licit")
	}


	// 给发送者回应

	retBuf := &msg.R2C_Register_Ack{
		Error:1,
		Message:"ok",
	}
	a.WriteMsg(retBuf)

}

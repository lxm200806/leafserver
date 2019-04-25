package internal

import (
	"github.com/golang/protobuf/proto"
	"reflect"
	"server/msg"

	"github.com/name5566/leaf/gate"
	"github.com/name5566/leaf/log"
)

func handlerMsg(m interface{}, h interface{}) {
	skeleton.RegisterChanRPC(reflect.TypeOf(m), h)
}
func init() {
	handlerMsg(&msg.Test{}, handleTest)

	// 向当前模块（game 模块）注册 Hello 消息的消息处理函数 handleHello
	handlerMsg(&msg.Hello{}, handleHello)
}

func handleTest(args []interface{}) {
	// 收到的 Test 消息
	m := args[0].(*msg.Test)
	// 消息的发送者
	a := args[1].(gate.Agent)

	// 输出收到的消息的内容
	log.Debug("hello %v", m.GetTest())

	retBuf := &msg.Test{
		Test: *proto.String("client"),
	}
	// 给发送者回应一个 Test 消息
	a.WriteMsg(retBuf)
}

func handleHello(args []interface{}) {

	// 收到的 Hello 消息
	m := args[0].(*msg.Hello)

	// 消息的发送者
	a := args[1].(gate.Agent)

	// 输出收到的消息的内容
	log.Debug("hello %v", m.Name)

	// 给发送者回应一个 Hello 消息
	a.WriteMsg(&msg.Hello{
		Name: "client",
	})
}


package msg

import (
	"github.com/name5566/leaf/network/protobuf"
)

// var Processor network.Processor

//var Processor = json.NewProcessor()
var Processor = protobuf.NewProcessor()

func init() {
	//Processor.Register(&Hello{})
	Processor.Register(&Test{})
	Processor.Register(&C2R_Login_Req{})
	Processor.Register(&R2C_Login_Ack{})
	Processor.Register(&C2R_Register_Req{})
	Processor.Register(&R2C_Register_Ack{})
}

type Hello struct {
	Name string
}

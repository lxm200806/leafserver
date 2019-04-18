// Code generated by protoc-gen-go. DO NOT EDIT.
// source: lobby.proto

/*
Package msg is a generated protocol buffer package.

It is generated from these files:
	lobby.proto

It has these top-level messages:
	Test
	UserLogin
	UserRegister
	UserResult
	UserST
*/
package msg

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Result int32

const (
	Result_REGISTER_SUCCESS Result = 0
	Result_REGISTER_FAIL    Result = 1
	Result_LOGIN_SUCCESS    Result = 2
	Result_LOGIN_FAIL       Result = 3
)

var Result_name = map[int32]string{
	0: "REGISTER_SUCCESS",
	1: "REGISTER_FAIL",
	2: "LOGIN_SUCCESS",
	3: "LOGIN_FAIL",
}
var Result_value = map[string]int32{
	"REGISTER_SUCCESS": 0,
	"REGISTER_FAIL":    1,
	"LOGIN_SUCCESS":    2,
	"LOGIN_FAIL":       3,
}

func (x Result) String() string {
	return proto.EnumName(Result_name, int32(x))
}
func (Result) EnumDescriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

type Test struct {
	Test string `protobuf:"bytes,2,opt,name=Test" json:"Test,omitempty"`
}

func (m *Test) Reset()                    { *m = Test{} }
func (m *Test) String() string            { return proto.CompactTextString(m) }
func (*Test) ProtoMessage()               {}
func (*Test) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *Test) GetTest() string {
	if m != nil {
		return m.Test
	}
	return ""
}

// 用户登陆协议
type UserLogin struct {
	LoginName string `protobuf:"bytes,1,opt,name=LoginName" json:"LoginName,omitempty"`
	LoginPW   string `protobuf:"bytes,2,opt,name=LoginPW" json:"LoginPW,omitempty"`
}

func (m *UserLogin) Reset()                    { *m = UserLogin{} }
func (m *UserLogin) String() string            { return proto.CompactTextString(m) }
func (*UserLogin) ProtoMessage()               {}
func (*UserLogin) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *UserLogin) GetLoginName() string {
	if m != nil {
		return m.LoginName
	}
	return ""
}

func (m *UserLogin) GetLoginPW() string {
	if m != nil {
		return m.LoginPW
	}
	return ""
}

// 注册协议
type UserRegister struct {
	LoginName string `protobuf:"bytes,1,opt,name=LoginName" json:"LoginName,omitempty"`
	LoginPW   string `protobuf:"bytes,2,opt,name=LoginPW" json:"LoginPW,omitempty"`
}

func (m *UserRegister) Reset()                    { *m = UserRegister{} }
func (m *UserRegister) String() string            { return proto.CompactTextString(m) }
func (*UserRegister) ProtoMessage()               {}
func (*UserRegister) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *UserRegister) GetLoginName() string {
	if m != nil {
		return m.LoginName
	}
	return ""
}

func (m *UserRegister) GetLoginPW() string {
	if m != nil {
		return m.LoginPW
	}
	return ""
}

// 消息返回协议
type UserResult struct {
	RetResult Result `protobuf:"varint,1,opt,name=RetResult,enum=msg.Result" json:"RetResult,omitempty"`
	ErrorInfo string `protobuf:"bytes,2,opt,name=ErrorInfo" json:"ErrorInfo,omitempty"`
}

func (m *UserResult) Reset()                    { *m = UserResult{} }
func (m *UserResult) String() string            { return proto.CompactTextString(m) }
func (*UserResult) ProtoMessage()               {}
func (*UserResult) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *UserResult) GetRetResult() Result {
	if m != nil {
		return m.RetResult
	}
	return Result_REGISTER_SUCCESS
}

func (m *UserResult) GetErrorInfo() string {
	if m != nil {
		return m.ErrorInfo
	}
	return ""
}

// 玩家有角色的情况
type UserST struct {
	UID      string `protobuf:"bytes,1,opt,name=UID" json:"UID,omitempty"`
	ServerID string `protobuf:"bytes,2,opt,name=ServerID" json:"ServerID,omitempty"`
	RoleUID  string `protobuf:"bytes,3,opt,name=RoleUID" json:"RoleUID,omitempty"`
	RoleName string `protobuf:"bytes,4,opt,name=RoleName" json:"RoleName,omitempty"`
	RoleLev  string `protobuf:"bytes,5,opt,name=RoleLev" json:"RoleLev,omitempty"`
	Coin     string `protobuf:"bytes,6,opt,name=Coin" json:"Coin,omitempty"`
}

func (m *UserST) Reset()                    { *m = UserST{} }
func (m *UserST) String() string            { return proto.CompactTextString(m) }
func (*UserST) ProtoMessage()               {}
func (*UserST) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{4} }

func (m *UserST) GetUID() string {
	if m != nil {
		return m.UID
	}
	return ""
}

func (m *UserST) GetServerID() string {
	if m != nil {
		return m.ServerID
	}
	return ""
}

func (m *UserST) GetRoleUID() string {
	if m != nil {
		return m.RoleUID
	}
	return ""
}

func (m *UserST) GetRoleName() string {
	if m != nil {
		return m.RoleName
	}
	return ""
}

func (m *UserST) GetRoleLev() string {
	if m != nil {
		return m.RoleLev
	}
	return ""
}

func (m *UserST) GetCoin() string {
	if m != nil {
		return m.Coin
	}
	return ""
}

func init() {
	proto.RegisterType((*Test)(nil), "msg.Test")
	proto.RegisterType((*UserLogin)(nil), "msg.UserLogin")
	proto.RegisterType((*UserRegister)(nil), "msg.UserRegister")
	proto.RegisterType((*UserResult)(nil), "msg.UserResult")
	proto.RegisterType((*UserST)(nil), "msg.UserST")
	proto.RegisterEnum("msg.Result", Result_name, Result_value)
}

func init() { proto.RegisterFile("lobby.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 299 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x51, 0xc1, 0x4e, 0x83, 0x40,
	0x14, 0x94, 0x52, 0x51, 0x5e, 0xb5, 0xc1, 0x8d, 0x07, 0xd2, 0x78, 0x30, 0x9c, 0xd4, 0x43, 0x0f,
	0xfa, 0x05, 0x86, 0xd2, 0x66, 0x13, 0x52, 0xcd, 0x2e, 0xc4, 0xa3, 0xb1, 0xc9, 0x4a, 0x9a, 0x00,
	0x6b, 0x76, 0x91, 0xc4, 0x5f, 0xf1, 0x6b, 0xcd, 0xdb, 0x5d, 0xe0, 0xee, 0x89, 0x99, 0xe1, 0xcd,
	0xec, 0x7b, 0x19, 0x58, 0xd4, 0xf2, 0x70, 0xf8, 0x59, 0x7f, 0x29, 0xd9, 0x49, 0xe2, 0x37, 0xba,
	0x4a, 0x56, 0x30, 0x2f, 0x84, 0xee, 0x08, 0xb1, 0xdf, 0x78, 0x76, 0xeb, 0xdd, 0x85, 0xcc, 0xe0,
	0x24, 0x85, 0xb0, 0xd4, 0x42, 0xe5, 0xb2, 0x3a, 0xb6, 0xe4, 0x06, 0x42, 0x03, 0xf6, 0x1f, 0x8d,
	0x88, 0x3d, 0x33, 0x35, 0x09, 0x24, 0x86, 0x33, 0x43, 0x5e, 0xdf, 0x5c, 0xc2, 0x40, 0x93, 0x2d,
	0x5c, 0x60, 0x08, 0x13, 0xd5, 0x51, 0x77, 0x42, 0xfd, 0x3b, 0xa7, 0x04, 0xb0, 0x39, 0xfa, 0xbb,
	0xee, 0xc8, 0x3d, 0x84, 0x4c, 0x74, 0x96, 0x98, 0x94, 0xe5, 0xe3, 0x62, 0xdd, 0xe8, 0x6a, 0x6d,
	0x25, 0x36, 0xfd, 0xc5, 0x07, 0x33, 0xa5, 0xa4, 0xa2, 0xed, 0xa7, 0x74, 0xa1, 0x93, 0x90, 0xfc,
	0x7a, 0x10, 0x60, 0x2e, 0x2f, 0x48, 0x04, 0x7e, 0x49, 0x37, 0x6e, 0x27, 0x84, 0x64, 0x05, 0xe7,
	0x5c, 0xa8, 0x5e, 0x28, 0xba, 0x71, 0xce, 0x91, 0xe3, 0xa6, 0x4c, 0xd6, 0x02, 0x1d, 0xbe, 0xdd,
	0xd4, 0x51, 0x74, 0x21, 0x34, 0x07, 0xce, 0xad, 0x6b, 0xe0, 0x83, 0x2b, 0x17, 0x7d, 0x7c, 0x3a,
	0xb9, 0x72, 0xd1, 0x63, 0x01, 0xa9, 0x3c, 0xb6, 0x71, 0x60, 0x0b, 0x40, 0xfc, 0x50, 0x40, 0xe0,
	0x8e, 0xb8, 0x86, 0x88, 0x65, 0x3b, 0xca, 0x8b, 0x8c, 0xbd, 0xf3, 0x32, 0x4d, 0x33, 0xce, 0xa3,
	0x13, 0x72, 0x05, 0x97, 0xa3, 0xba, 0x7d, 0xa6, 0x79, 0xe4, 0xa1, 0x94, 0xbf, 0xec, 0xe8, 0x7e,
	0x9c, 0x9a, 0x91, 0x25, 0x80, 0x95, 0xcc, 0x88, 0x7f, 0x08, 0x4c, 0xfd, 0x4f, 0x7f, 0x01, 0x00,
	0x00, 0xff, 0xff, 0x2a, 0x90, 0xd4, 0x4d, 0x0d, 0x02, 0x00, 0x00,
}
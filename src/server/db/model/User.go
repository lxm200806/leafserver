package model

import "database/sql"

type User struct {
	Id       int
	Name     sql.NullString
	Password sql.NullString
}

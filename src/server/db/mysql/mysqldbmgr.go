package mysqldbmgr

import (
	"database/sql"
	"fmt"
)
import _ "github.com/go-sql-driver/mysql"
import _ "server/db/model"

func init() {
	Connect()
}

func Connect() {
	db, err := sql.Open("mysql", "root:1111@/daodouservers")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer db.Close()
}

func Instance() *sql.DB {
	db, err := sql.Open("mysql", "root:1111@/daodouservers")
	defer db.Close()
	
	if err != nil {
		fmt.Println(err)
		return nil
	}

	return db
}

func GetUserByUserName(username string) I {
	db := Instance()
	
	stmt,_ := db.Prepare("select * from user where name == ?")
	defer stmt.Close()

	row = stmt.QueryRow(username).Scan()
	return row


}

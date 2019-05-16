package mysqldbmgr

import "database/sql"
import _ "github.com/go-sql-driver/mysql"
import "server/db/model"

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

func GetUserByUserName(username string) {
	db := mysqldbmgr.Instance()
	
	user := U
	
	rows, err := db.Query()
	rows.Close()
	
	if err != nil {
		panic(err)
	}

}

type 

func Example() {
	
}

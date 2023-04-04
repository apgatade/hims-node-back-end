
const Database = require("../Database");

class Company{
    constructor(){
        this.id = 0;
        this.name = "";
        this.sql = "";
        this.db = new Database()
    }


    save(){
        if(this.id == 0){
            this.sql = "INSERT INTO companies(name)";
            this.sql += "VALUES('"+this.name.replace(/'/g,"''") +"')";
        }
        else {
            this.sql = "UPDATE companies SET name = '" + this.name.replace(/'/g, "''") + "' ";
            this.sql += "WHERE id = " + this.id;
        }

        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    get(){
        this.sql = "SELECT * FROM companies WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

    list(){
        this.sql = "SELECT * FROM companies ORDER BY id";
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = "DELETE FROM companies WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

}

module.exports = Company;

const Database = require("./Database");

class History{
    constructor(){
        this.id = 0;
        this.history = "";
        this.sql = "";
        this.db = new Database()
    }


    save(){
        if(this.id == 0){
            this.sql = "INSERT INTO histories(history)";
            this.sql += "VALUES('"+this.history.replace(/'/g,"''") +"')";
        }
        else {
            this.sql = "UPDATE histories SET history = '" + this.history.replace(/'/g, "''") + "' ";
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
        this.sql = "SELECT * FROM histories WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

    list(){
        this.sql = "SELECT * FROM histories ORDER BY id";
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = "DELETE FROM histories WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

}

module.exports = History;
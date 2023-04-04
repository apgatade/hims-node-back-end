
const Database = require("./Database");

class Instructions{
    constructor(){
        this.id = 0;
        this.instruction = "";
        this.instructionsetid = 0;
        this.sql = "";
        this.db = new Database()
    }


    save(){
        if(this.id == 0){
            this.sql = "INSERT INTO instructions(instruction,instructionsetid) ";
            this.sql += "VALUES('"+this.instruction.replace(/'/g,"''") +"', ";
            this.sql += this.instructionsetid + ")";
        }
        else {
            this.sql = "UPDATE instructions SET instruction = '" + this.instruction.replace(/'/g, "''") + "', ";
            this.sql += "instructionsetid = " + this.instructionsetid + " ";
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
        this.sql = "SELECT * FROM instructions WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

    list(){
        this.sql = "SELECT *,(SELECT name FROM instructionsets AS U WHERE U.id = instructionsetid) AS instrsetname ";
        this.sql += "FROM instructions ORDER BY id";
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = "DELETE FROM instructions WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

}

module.exports = Instructions;

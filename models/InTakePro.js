
const Database = require("./Database");

class InTakePro{
    constructor(){
        this.id = 0;
        this.intake = "";
        this.sql = "";
        this.db = new Database()
    }


    save(){
        if(this.id == 0){
            this.sql = "INSERT INTO intakeprocedures(intake)";
            this.sql += "VALUES('"+this.intake.replace(/'/g,"''") +"')";
        }
        else {
            this.sql = "UPDATE intakeprocedures SET intake = '" + this.intake.replace(/'/g, "''") + "' ";
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
        this.sql = "SELECT * FROM intakeprocedures WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

    list(){
        this.sql = "SELECT * FROM intakeprocedures ORDER BY id";
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = "DELETE FROM intakeprocedures WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

}

module.exports = InTakePro;
let Database = require("./Database");
class Usertype{

    constructor(){
        this.id = 0;
        this.name = "";
        this.sql = "";
        this.db = new Database();
    }

    save(){
        if(this.id == 0)
            this.sql = "INSERT INTO usertypes(name) VALUES('" + this.name.replace(/'/g, "''") + "')";
        else
            this.sql = "UPDATE usertypes SET name = '" + this.name.replace(/'/g, "''") + "' WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    get(){
        this.sql = "SELECT * FROM usertypes WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    list(){
        this.sql = "SELECT * FROM usertypes ORDER BY id";
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = "DELETE FROM usertypes WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    getusertypemodules(){
        this.sql = "SELECT M.*, IF(MM.id IS NULL, 0, 1) AS tochecked ";
        this.sql += "FROM modules AS M LEFT OUTER JOIN usertypemodules AS MM ON M.id = MM.moduleid ";
        this.sql += "AND usertypeid = " +this.id + " ORDER BY M.srno";
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    }

    addusertypemodule(usertypeid, moduleid){
        this.sql = "INSERT INTO usertypemodules(usertypeid, moduleid) VALUES(" + usertypeid + ", " + moduleid + ")";
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    }

    removeusertypemodule(usertypeid, moduleid){
        this.sql = "DELETE FROM usertypemodules WHERE usertypeid = " + usertypeid + " AND moduleid = " + moduleid;
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    }
}

module.exports = Usertype;
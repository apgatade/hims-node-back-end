let Database = require("./Database");

class Module{
    constructor(){
        this.id = 0;
        this.srno ="";
        this.name ="";
        this.picpath = "";
        this.link = "";
        this.sql = "";
        this.db = new Database();
    }

    save(){
        if(this.id==0){
        this.sql = `INSERT INTO modules(srno,name,picpath,link) VALUES(${this.srno},'${this.name.replace(/'/g, "''")}','${this.picpath}','${this.link}')`;
        }
        else{
            this.sql =`UPDATE modules SET srno=${this.srno},name='${this.name.replace(/'/g, "''")}', `;
            if(this.picpath !== ""){
                this.sql += `picpath='${this.picpath}', `;
            }
            this.sql += `link='${this.link}' WHERE id = ${this.id}`;        
        }

        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    };

    list(){
        this.sql = "SELECT * FROM modules ORDER BY srno";
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    };

    get(){
        this.sql = "SELECT * FROM modules WHERE id = " +this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    };

    delete(){
        this.sql = "DELETE FROM modules WHERE id = " +this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    }

    getmodulemenus(){
        this.sql = "SELECT M.*, IF(MM.id IS NULL, 0, 1) AS tochecked FROM menus AS M LEFT OUTER JOIN modulemenus AS MM ON M.id = MM.menuid ";
        this.sql += "AND moduleid = " +this.id + " WHERE M.canhavechilds = 1 ORDER BY M.srno";
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    }

    addmodulemenu(moduleid, menuid){
        this.sql = "INSERT INTO modulemenus(moduleid, menuid) VALUES(" + moduleid + ", " + menuid + ")";
        console.log(this.sql);
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    }

    removemodulemenu(moduleid, menuid){
        this.sql = "DELETE FROM modulemenus WHERE moduleid = " + moduleid + " AND menuid = " + menuid;
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    }
}

module.exports = Module;
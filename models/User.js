const Database = require("./Database");

class User {
    constructor() {
        this.id = 0;
        this.name = "";
        this.username = "";
        this.password = "";
        this.mobileno = "";
        this.email = "";
        this.doctorid = 0;
        this.labid = 0;
        this.usertypeid = 0;
        this.query = "";
        this.db = new Database();
    }

    save = () => {
        if(this.id == 0){
            this.query = "INSERT INTO users(name, username, password, mobileno, email, usertypeid, doctorid, labid) ";
            this.query += "VALUES('" + this.name.replace(/'/g, "''") + "', '" + this.username.replace(/'/g, "''") + "', ";
            this.query += "'" + this.password.replace(/'/g, "''") + "', '" + this.mobileno + "', '" + this.email.replace(/'/g, "''") + "', ";
            this.query += this.usertypeid + ", " + this.doctorid + ", " + this.labid + ")";
        }
        else{
            this.query = "UPDATE users SET name = '" + this.name.replace(/'/g, "''") + "', ";
            this.query += "username = '" + this.username.replace(/'/g, "''") + "', ";
            this.query += "password = '" + this.password.replace(/'/g, "''") + "', ";
            this.query += "mobileno = '" + this.mobileno.replace(/'/g, "''") + "', ";
            this.query += "email = '" + this.email.replace(/'/g, "''") + "', ";
            this.query += "usertypeid = " + this.usertypeid + ", ";
            this.query += "doctorid = " + this.doctorid + ", ";
            this.query += "labid = " + this.labid + " ";
            this.query += "WHERE id = " + this.id;
        }
        return new Promise((resolve, reject) => {
            this.db.query(this.query).then((result) => {
                resolve(JSON.stringify({ status: "success", data: result }));
            }, (err => {
                reject(JSON.stringify({ status: "failed", data: err }));
            }));
        });
    }

    delete = () => {
        this.query = "DELETE FROM users WHERE id = " + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query).then((result) => {
                resolve(JSON.stringify({ status: "success", data: result }));
            }, (err => {
                reject(JSON.stringify({ status: "failed", data: err }));
            }));
        });
    }

    list = () => {
        this.query = "SELECT *, (SELECT name FROM usertypes AS U WHERE U.id = usertypeid) AS usertypename, ";
        this.query += "(SELECT name FROM doctors AS D WHERE D.id = doctorid) AS doctorname, ";
        this.query += "(SELECT name FROM labs AS L WHERE L.id = labid) AS labname ";
        this.query += "FROM users ORDER BY name";
        return new Promise((resolve, reject) => {
            this.db.query(this.query).then((result) => {
                resolve(JSON.stringify({ status: "success", data: result }));
            }, (err => {
                reject(JSON.stringify({ status: "failed", data: err }));
            }));
        });
    }

    get = () => {
        this.query = "SELECT * FROM users WHERE id = " + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query).then((result) => {
                resolve(JSON.stringify({ status: "success", data: result[0] }));
            }, (err => {
                reject(JSON.stringify({ status: "failed", data: err }));
            }));
        });
    }

    getforlogin = () => {
        this.query = "SELECT id, name, username, email, mobileno, doctorid, labid, usertypeid, ";
        this.query += "(SELECT name FROM usertypes AS U WHERE U.id = usertypeid) AS usertypename ";
        this.query += "FROM users WHERE username = '" + this.username.replace(/'/g, "''") + "' AND password = '" + this.password.replace(/'/g, "''") + "'";
        return new Promise((resolve, reject) => {
            this.db.query(this.query).then((result) => {
                resolve(result);
            }, (err => {
                reject(err);
            }));
        });
    }
}

module.exports = User;
let Database = require("./Database");


class Ipdservice{



    constructor(){

        this.id = 0;
        this.srno= 0;
        this.name = "";
        this.rate = "";
        this.toselectdoctor = false ;
        this.changesasperroom = false ;
        this.isitroom = false ;

        this.sql = "";
        this.db = new Database();


    }

    save(){
        if(this.id == 0){
            this.sql = `INSERT INTO ipdservices (srno, name, rate, toselectdoctor, changesasperroom, isitroom) VALUES(${this.srno}, '${this.name.replace(/'/g, "''")}' , ${this.rate},${this.toselectdoctor},${this.changesasperroom},${this.isitroom})`;

        }
        else{
            this.sql = `UPDATE ipdservices SET srno=${this.srno},name='${ this.name.replace(/'/g, "''") }',rate=${this.rate},toselectdoctor=${this.toselectdoctor},changesasperroom=${this.changesasperroom},isitroom=${this.isitroom} WHERE id = ${this.id}`;
           

        }
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err);
            })
        })
    }

    list(){
        this.sql = "SELECT id,srno, name, rate, IF(toselectdoctor, 'true', 'false') AS toselectdoctor, IF(changesasperroom, 'true', 'false') AS changesasperroom, IF(isitroom, 'true', 'false') AS isitroom FROM ipdservices ORDER BY srno";
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    
    get(){
        this.sql = "SELECT * FROM ipdservices WHERE id =" + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = "DELETE FROM ipdservices WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    getrates(categoryid,ipdservicesid){
        this.sql ="SELECT I.*, CSR.rate AS categoryrate FROM ipdservices AS I LEFT OUTER JOIN categorywiseipdservicerates AS CSR ON I.id = CSR.ipdserviceid AND CSR.categoryid = 1 ORDER BY I.srno";
               return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }


}
module.exports = Ipdservice;
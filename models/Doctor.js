let Database = require("./Database")

class Doctor{
  constructor(){
    this.id = 0;
    this.titleid = 0;
    this.fname = "";
    this.mname = "";
    this.lname = "";
    this.qualification = "";
    this.regno = 0;
    this.panno = 0;    
    this.birthdate = 0;
    this.doctortype = "";
    this.departmentid = 0;
    this.specializationid = 0;
    this.casepaperdays = 0;
    this.bankaccountno = 0;
    this.ifsccode = 0;
    this.mobileno = 0;
    this.email = "";
    this.address = "";
    this.isactive = 0;

    this.sql= "";
    this.db = new Database();
  }
  
  save(){
    if (this.id == 0){
        
        // this.sql = `INSERT INTO doctors (titleid,fname,mname,lname,qualification,regno,panno,birthdate,doctortype,departmentid,specializationid,casepaperdays,bankaccountno,ifsccode,mobileno,email,address,isactive) VALUES( ${this.titleid}, '${this.fname.replace(/'/g, "''")}','${this.mname.replace(/'/g, "''")}', '${this.lname.replace(/'/g, "''")}', ${this.qualification}, ${this.regno}, ${this.panno}, ${this.birthdate}, ${this.doctortype}, ${this.departmentid}, ${this.specializationid}, ${this.casepaperdays}, ${this.bankaccountno}, ${this.ifsccode}, ${this.mobileno}, ${this.email}, ${this.address}, ${this.isactive})`;

        // this.sql = `INSERT INTO doctors (titleid,fname,mname,lname,qualification,regno,panno, birthdate,doctortype,departmentid,specializationid,casepaperdays,bankaccountno,ifsccode, mobileno,email,address,isactive) VALUES (${this.titleid},'${this.fname.replace(/'/g, "''")}','${this.mname.replace(/'/g, "''")}','${this.lname.replace(/'/g, "''")}','${this.qualification}',${this.regno},${this.panno},${this.birthdate},'${this.doctortype}',${this.departmentid},${this.specializationid},'${this.casepaperdays}',${this.bankaccountno},'${this.ifsccode}',${this.mobileno},'${this.email}','${this.address}',${this.isactive})`;

        this.sql = "INSERT INTO doctors(titleid, fname, mname, lname, qualification, regno, panno, ";
        this.sql += "birthdate, doctortype, departmentid, specializationid, casepaperdays, ";
        this.sql += "bankaccountno, ifsccode, mobileno, email, address, isactive) ";
        this.sql += "VALUES (" + this.titleid + ", '" + this.fname + "', '" + this.mname + "', '" + this.lname + "', ";
        this.sql += "'" + this.qualification + "', '" + this.regno + "', '" + this.panno + "', '" + this.birthdate + "', ";
        this.sql += "'" + this.doctortype + "', " + this.departmentid + ", " + this.specializationid + ", ";
        this.sql += "" + this.casepaperdays + ", '" + this.bankaccountno + "', '" + this.ifsccode + "', ";
        this.sql += "'" + this.mobileno + "', '" + this.email + "', '" + this.address + "', " + this.isactive + ")";
        //  console.log(this.sql);
    }
    else{
        this.sql = `UPDATE doctors SET titleid= ${this.titleid}, fname='${this.fname.replace(/'/g, "''")}', mname='${this.mname.replace(/'/g, "''")}', lname='${this.lname.replace(/'/g, "''")}',qualification='${this.qualification}', regno=${this.regno}, panno=${this.panno}, birthdate=${this.birthdate},doctortype='${this.doctortype}',departmentid= ${this.departmentid},specializationid=${this.specializationid},casepaperdays=${this.casepaperdays},bankaccountno=${this.bankaccountno},ifsccode='${this.ifsccode}',mobileno=${this.mobileno},email='${this.email}',address='${this.address}',isactive =${this.isactive} WHERE id = ${this.id}`;
    }
    return new Promise((resolve, reject)=>{
        this.db.query(this.sql).then((result)=>{
            resolve(result);
        }, (err)=>{
            reject(err);
        })
    })  
  }
  
  list(){
    this.sql = "SELECT * FROM doctors ORDER BY fname";
    return new Promise((resolve, reject)=>{
        this.db.query(this.sql).then((result)=>{
            resolve(result);
        }, (err)=>{
            reject(err);
        })
    })
}

 
get(){
  this.sql = "SELECT * FROM doctors WHERE id = " + this.id;
  return new Promise((resolve, reject)=>{
      this.db.query(this.sql).then((result)=>{
          resolve(result);
      }, (err)=>{
          reject(err);
      })
  })
} 

delete(){
  this.sql = "DELETE FROM doctors WHERE id = " + this.id;
  return new Promise((resolve, reject)=>{
      this.db.query(this.sql).then((result)=>{
          resolve(result);
      }, (err)=>{
          reject(err);
      })
  })
}

}

module.exports = Doctor  







let Doctor = require ("../models/Doctor");
let express = require ("express");


let router = express.Router();


router.post("/", (req, res)=>{
    let body = req.body;
    console.log(body);
    let object = new Doctor();
    object.titleid = body.titleid;
    object.fname = body.fname;
    object.mname = body.mname;
    object.lname = body.lname;
    object.qualification = body.qualification;
    object.regno = body.regno;
    object.panno = body.panno;
    object.birthdate = body.birthdate;
    object.doctortype = body.doctortype;
    object.departmentid = body.departmentid;
    object.specializatonid = body.specializatonid;
    object.casepaperdays = body.casepaperdays;
    object.bankaccountno = body.bankaccountno;
    object.ifsccode = body.ifsccode;
    object.mobileno = body.mobileno;
    object.email = body.email;
    object.address = body.address;
    object.isactive = body.isactive;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        console.log(err);
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.get("/", (req, res)=>{
    let object = new Doctor();
    object.list().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
})


router.put("/:id", (req, res)=>{
    let body = req.body;
    let object = new Doctor();
    object.id = req.params.id;
    object.titleid = body.titleid;
    object.fname = body.fname;
    object.mname = body.mname;
    object.lname = body.lname;
    object.qualification = body.qualification;
    object.regno = body.regno;
    object.panno = body.panno;
    object.birthdate = body.birhdate;
    object.doctortype = body.doctortype;
    object.departmentid = body.departmentid;
    object.specializatonid = body.specializatonid;
    object.casepaperdays = body.casepaperdays;
    object.bankaccountno = body.bankaccountno;
    object.ifsccode = body.ifsccode;
    object.mobileno = body.mobileno;
    object.email = body.email;
    object.address = body.address;
    object.isactive = body.isactive;
    object.name = body.name;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
})

router.get("/:id", (req, res)=>{
    let object = new Doctor();
    object.id = req.params.id;
    object.get().then((result)=>{
        if(result.length > 0)
            res.end(JSON.stringify({status:"success", data:result[0]}));
        else
            res.end(JSON.stringify({status:"failed", data:"Record not found"}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
})

router.delete("/:id", (req, res)=>{
    let object = new Doctor();
    object.id = req.params.id;
    object.delete().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
})


module.exports = router;

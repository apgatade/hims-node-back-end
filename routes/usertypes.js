let express = require("express");
let Usertype = require("../models/Usertype");
let bodyparser = require("body-parser");

let router = express.Router();

router.post("/", (req, res)=>{
    let body = req.body;
    let object = new Usertype();
    object.id = 0;
    object.name = body.name;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.get("/", (req, res)=>{
    let object = new Usertype();
    object.list().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.get("/:id", (req, res)=>{
    let object = new Usertype();
    object.id = req.params.id;
    object.get().then((result)=>{
        if(result.length > 0)
            res.end(JSON.stringify({status:"success", data:result[0]}));
        else
            res.end(JSON.stringify({status:"failed", data:"Record not found"}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
 })

router.put("/:id", (req, res)=>{
    let body = req.body;
    let object = new Usertype();
    object.id = req.params.id;
    object.name = body.name;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.delete("/:id", (req, res)=>{
    let body = req.body;
    let object = new Usertype();
    object.id = req.params.id;
    object.delete().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
});


router.get("/usertypemodules/:usertypeid", (req, res)=>{
    let object = new Usertype();
    object.id = req.params.usertypeid;
    object.getusertypemodules().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.post("/addusertypemodule/:usertypeid/:moduleid", (req, res)=>{
    let object = new Usertype();
    object.addusertypemodule(req.params.usertypeid, req.params.moduleid).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.post("/removeusertypemodule/:usertypeid/:moduleid", (req, res)=>{
    let object = new Usertype();
    object.removeusertypemodule(req.params.usertypeid, req.params.moduleid).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

module.exports = router;
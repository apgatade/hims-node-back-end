var express = require("express");
var User = require("../models/User");
var router = express.Router();

router.post("/login", async (req, res) => {
    // try{
        var body = req.body;
        let user = new User();
        user.username = body.username;
        user.password = body.password;
        user.getforlogin().then(result=>{
            if(result.length > 0){
                res.end(JSON.stringify({ status: "success", data: result[0] }));
            }
            else{
                res.end(JSON.stringify({ status: "failed", data: "Invalid credentials" }));
            }
        }, err=>{
            res.end(JSON.stringify({ status: "failed", data: err }));
        });
    // }catch(ex){
    //     res.end(JSON.stringify({ status: "failed", data: ex }));
    // }
});

module.exports = router;
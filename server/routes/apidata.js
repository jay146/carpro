const express=require('express');
const jwt =require('jsonwebtoken');
const mongoose=require('mongoose');
const User = require('../models/user');
const r=express.Router();
const db='mongodb://localhost:27017/verizonn';

mongoose.connect(db,err=>{
    if(err){console.error("Error occured during connecting to mongodb"+err);
    }
    else {console.log("Connected to mongodb");}
});
r.get('/',(req,res)=>{
    res.send("from api route");
});

r.post('/register',(req,res)=>{
    let userData=req.body
    let user=new User(userData)
   user.save((error,registeredUser)=>{
                if(error){console.error(error)} 
                else {
                   let payload={subject:registeredUser._id}
                    let token=jwt.sign(payload,'secretKey')
                // res.status(200).send({token});
                    res.status(200).send({token});
                    }
            })             

});

r.post('/login',(req,res)=>{
        let userData= req.body;
        User.findOne({email:userData.email},(error,user)=>
        { 

                if(error)
                {
                    console.error("error occured during login "+error)
                }   
                    else{
                                    if(!user){
                                    res.status(401).send("Invalid email entered")
                                    }
                                    else
                                    if(user.password !== userData.password){
                                    res.status(401).send("Invalid password entered")
                                    }
                                    
                                
                        else { 
                        let payload={subject:user._id}
                        let token=jwt.sign(payload,'secretKey')
                        //  res.status(200).send({token});
                         res.status(200).send(user);
                       
                        }
                        }
                        
    })

    })


    r.get('/events',(req,res)=>{

    let events=[
        {"id":"1",
        "name":"a",
        "description":"aaa"
    },
    {"id":"2",
    "name":"b",
    "description":"bbb"
},
{"id":"",
"name":"c",
"description":"ccc"
}
    ]
    
    res.json(events)
    })


    r.get('/special',(req,res)=>{

        let sevents=[
            {"id":"100",
            "name":"a",
            "description":"aaa"
        },
        {"id":"200",
        "name":"b",
        "description":"bbb"
    },
    {"id":"300",
    "name":"c",
    "description":"ccc"
    }
        ]
        
        res.json(sevents);
        })


module.exports=r;
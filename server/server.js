const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const port=3000;
const apidata=require('./routes/apidata');
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use('/apidata',apidata);
app.listen(port,function(){
    console.log("server is listening to port no "+port);
});

app.get('/',function(req,res){
res.send(" Hello from server");
});
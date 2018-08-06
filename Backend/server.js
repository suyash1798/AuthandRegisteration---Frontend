const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jwt-simple');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://suyash1798:suyash1@ds113452.mlab.com:13452/authregistration',{ useNewUrlParser: true } ,(err)=>{
    if(err){
    console.log(err);
}
});

const port = 3000;

var posts = [
    {message:'Hello World'},
    {message:'what going on'}
]

var User = require('./models/user');

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/register',(req,res)=>{
   let userData = req.body;
   console.log(userData);
   let user = new User(userData);

   user.save((err,result)=>{
       console.log("its done");
       if(err){
           console.log("Having trouble Adding User");
           res.send(err);
       }else{

           res.sendStatus(200);
       }
   })
   console.log(userData.email);
   res.sendStatus(200);
});

app.get('/users',async (req,res)=>{
    try{
        let users = await User.find({});
        res.send(users);
        }catch(error){
           console.log(error);
           res.sendStatus(500);
        }
});

app.post('/login',async (req,res)=>{
    let userData = req.body;
    let user = await User.findOne({email:userData.email});

    if(!user){
        return res.status(401).send({message:'Email or Password Invalid'});
    }

    if(userData.password != user.password){
       return res.status(401).send({message:"Email or Password Invalid"})
    }

    let payload = {}

    let token = jwt.encode(payload,'123456')

    res.status(200).send({token});
});

app.get('/profile/:id',async(req,res)=>{
   try{
       let user = await User.findById(req.params.id,'-password -_v');
       res.send(user);
   }catch(error){
       console.log(error);
       res.sendStatus(500);
}
});

mongoose.connect('mongodb://suyash:suyash1234@ds113442.mlab.com:13442/meanstackauth',{ useNewUrlParser: true } ,(err)=>{
    if(!err){
        console.log('Connected to mongo Database');
}
})

app.listen(3000,()=>console.log('Example app listening on port 3000!'))
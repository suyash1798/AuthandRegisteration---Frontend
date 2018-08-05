const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

const port = 3000;

var posts = [
    {message:'Hello World'},
    {message:'what going on'}
]

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/register',(req,res)=>{
   let userData = req.body;
   console.log(userData.email);
   res.sendStatus(200);
});

mongoose.connect('mongodb://suyash:suyash@1798@ds113442.mlab.com:13442/meanstackauth',(err)=>{
    if(!err){
        console.log('Connected to mongo Database');
}
})

app.listen(3000,()=>console.log('Example app listening on port 3000!'))
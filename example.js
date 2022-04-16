const express = require('express');
const app = express();
const PORT = 3000;

const logger = require('./logger');



//app.disable('etag');
app.set('etag',false);
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended : false}))


app.post('/login',(req,res)=>{
    res.status(200).send('ok')
})


// app.get('/',(req,res)=>{
//     res.send('home')
// })

app.get('/about',(req,res)=>{
    console.log(req.user);
    res.send('home')
})

app.listen(PORT,()=>{
    console.log('run');
});


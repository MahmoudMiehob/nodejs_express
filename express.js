//const app = require('express')();

const express = require('express');
const app = express();
const path = require ('path')
const PORT =  5000 ;


app.use(express.static('./public'));

// app.get('/',(req,res)=>{
//     res.status(200).send(`home page with port : ${PORT}`);
//     res.status(200).sendFile(path.resolve(__dirname,'./index.html'));
// })

app.get('/about',(req,res)=>{
    res.status(200).send(`about page with port : ${PORT}`);
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>not found</h1>')
})

//app.disable('etag');
app.set('etag',false);



app.listen(PORT,()=>{
    console.log('run');
});


//app.get
//app.post
//app.put
//app.all
//app.delete
//app.use
//app.listen
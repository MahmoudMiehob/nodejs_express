const express = require('express');
const { get } = require('lodash');
const app = express();
const PORT = 3000;

const persons = [{
    'id' : 1,
    'name' : 'mahmoud',
    'age'  : 22,
    'languges' :['html','css','js','nodejs','php','laravel'],
    'about' : {
        'website' : 'Garage'
    }
},
{
    'id' :2,
    'name' : 'rafee',
    'age'  : 22,
    'languges' :['html','css','js','reactjs','php','laravel'],
    'about' : {
        'website' : 'invoices'
    }
}]

app.get('/api/myinfo',(req,res)=>{
    const newpersons = persons.map((person)=>{
        const {id,name,age,languges} = person;
        return {id,name,age,languges}    
})
res.json(newpersons)
})

// app.get('/api/myinfo/1',(req,res)=>{
//     const signalperson = persons.find((person)=>
//         person.id === 1  
// )
// res.json(signalperson)
// })

app.get('/api/myinfo/:personID',(req,res)=>{
    //console.log(req.params);
    const {personID} = req.params ; 

    const signalperson = persons.find((person)=>
        person.id === Number(personID) 
)
if (!signalperson){
    res.status(404).json({'message' : 'notfound'})
}
res.json(signalperson)


//res.status(200).json({success : true,data :[]})
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    res.send('hello');
    
})

app.all('*',(req,res)=>{
    //res.status(404).json({'messages' : 'not found'})
    res.status(404).json({'message' : 'notfound'})
})

app.listen(PORT,()=>{
    console.log('run');
})
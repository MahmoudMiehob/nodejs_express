const _ =require('lodash');

const item = [1,[2,[3,[4]]]] 

const newitems = _.flattenDeep(item)
console.log(newitems);

const http = require ('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('end')
    }
    if(req.url === '/abc'){
        res.end('abc')
    }

    // res.write('hello world');
    res.end(`
    <h1>opps !!!</h1>
    `)
})


server.listen(5000)
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
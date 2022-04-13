const fs = require('fs');

// const first = fs.readFileSync("./content/sub/test.txt",'utf-8')

// fs.writeFileSync("./content/sub/test.txt",'hell world');

// console.log(first);

fs.readFile('./content/sub/test.txt','utf-8',(err,result)=>{
    if(err){
        console.log("error");
        return
    }
    console.log(result);
})


const fs = require('fs');

const first = fs.readFileSync("./content/sub/test.txt",'utf-8')

console.log(first);
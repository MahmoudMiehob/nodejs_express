const _ =require('lodash');

const item = [1,[2,[3,[4]]]] 

const newitems = _.flattenDeep(item)
console.log(newitems);
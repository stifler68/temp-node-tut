//npm = global command, comes with nodes 
//npm --version 

// local dependency - use it onlyin this particular projects 
// npm i <packagename>

//gobal  dependency - use it in any project 
// npm install -g <packagename> 
// sudo install -g <packagename> (mac)

// package.json - mainfest file (stores imortant info about project/packages)'
// manual approach (create package.json it the root , create properties etc)
// npm init (step by step, press  enter to skip)
// npm init -y (everything default)


const _ = require('lodash');
const items = [1,[ 2,3],[4]]
const newitems= _.flattenDepth(items);
console.log(newitems);
// Globals - No window !
/*
console.log(__dirname);

setInterval(()=>{
    console.log('Hello World !');
},1000);
*/

// Modules - Encapsulated Code (only share minimum)
//CommanJs, every file is module by default
const firstModule = require('./firstModule');
const sayHi = require('./secondModule');
const data  =  require('./alternativeFlavour');
require('./mine-grenede');

console.log(data);
console.log(firstModule);

sayHi('susan');
sayHi(firstModule.john);
sayHi(firstModule.peter);
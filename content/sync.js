const {readFileSync,writeFileSync} = require('fs');

//Reading Files
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second)

//Writing Files
writeFileSync(
    './content/result.txt',
    `Here is the result : ${first},${second}`,{flag:'a'}
    )
import fs from 'fs';
const contents = fs.readFileSync('./text.txt');
console.log(contents);
console.log('Doing something else');

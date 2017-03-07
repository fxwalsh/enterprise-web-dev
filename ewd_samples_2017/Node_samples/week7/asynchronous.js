import fs from 'fs';
fs.readFile('./text.txt', (err, contents) => { console.log(contents); }); 
console.log('Doing something else');

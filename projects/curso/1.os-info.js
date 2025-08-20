const os = require('node:os');

console.log('Información: ');
console.log('Nombre: ', os.freemem() / 1024 / 1024);

// Esto solo en los módulos que no tienen promesas nátivas
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8'),
]).then(([text, secondText]) => {
  console.log('Primer texto', text);
  console.log('Segundo texto', secondText);
});

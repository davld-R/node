// Esto solo en los módulos que no tienen promesas nátivas
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8').then((text) => {
  console.log('Primer texto', text)
})

console.log('hacer cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8').then((text) => {
  console.log('Segundo texto', text)
})

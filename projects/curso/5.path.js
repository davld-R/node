const path = require('node:path')

// Barra separadora de carpetas segund sistema operativo
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/test.txt')
console.log(base)

const extension = path.extname('image.jpg')
console.log(extension)

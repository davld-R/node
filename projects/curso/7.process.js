// argumentos de entrada
// console.log(process.argv);

// controlar el proceso y su salida
// process.exit(1);

// podemos controlar eventos del proceso
process.on('exit', () => {
  // Ejemplo limpiar recursos
});

// recuperar el directorio en el que esta trabajando
console.log(process.cwd());

// plarform
console.log(process.env.PRUEBA);

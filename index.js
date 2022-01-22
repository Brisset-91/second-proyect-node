/**
 * Un script que reciba mi nombre como parametro y que nos salude con colores de arcoiris
 * node saludo.js --nombre=charles
 * - Debe ser un nuevo proyecto de node
 * - A terminar compartir el repositorio de github 
 *  - Que no este versionada la caarpeta node_modules
 *  - Que corra el proyecto
 */
 const colors = require('colors');
 const params = require('yargs-parser')(process.argv.slice(2))
 console.log('params: ', params)
 //console.log('OMG Rainbows!'.rainbow); 

const koderName = params.name
//const exists = nombres.includes(koderName)

console.log('Hola como estas', koderName.rainbow)
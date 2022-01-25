/**
 * Un script que reciba mi nombre como parametro y que nos salude con colores de arcoiris
 * node saludo.js --nombre=charles
 * - Debe ser un nuevo proyecto de node
 * - A terminar compartir el repositorio de github 
 *  - Que no este versionada la caarpeta node_modules
 *  - Que corra el proyecto
 */

 /*
 const colors = require('colors');
 const params = require('yargs-parser')(process.argv.slice(2))
 //console.log('params: ', params)
 //console.log('OMG Rainbows!'.rainbow); 

const koderName = params.name
//const exists = nombres.includes(koderName)

console.log('Hola como estas', koderName.rainbow)*/

const fs = require ('fs')
/*
fs.readFile('./pruebas/text.txt', 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data);
});

// write one archive
function atTheEnd(error) {
    if (error) {
        console.error('hubo un error al crear el archivo', error)
        return
    }
    console.log('el archivo fue escrito exitosamente')
}

fs.writeFile('hola.txt','Hola a todos \n desde nuevo archivo','utf-8',atTheEnd)*/

// APPEND FILE
function appendErr(err) {
    if (err) {
        console.error('data error', err)
    }
    console.log('The "data to append" was appended to file!');
}

fs.appendFile('hola.txt', 'data to append', 'utf8', appendErr);
 const colors = require('colors');
 const params = require('yargs-parser')(process.argv.slice(2))

 /*
const koderName = params.name
//const exists = nombres.includes(koderName)
//console.log('Hola como estas', koderName.rainbow)*/

const fs = require ('fs')
/*
// ------- READ A ARCHIVE ----------
fs.readFile('./pruebas/text.txt', 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data);
});

// ---------- WRITE A ARCHIVE ----------
function atTheEnd(error) {
    if (error) {
        console.error('hubo un error al crear el archivo', error)
        return
    }
    console.log('el archivo fue escrito exitosamente')
}
fs.writeFile('hola.txt','Hola a todos \n desde nuevo archivo','utf-8',atTheEnd)*/

// ---------- APPEND FILE ----------
function appendErr(err) {
    if (err) {
        console.error('data error', err)
    }
    console.log('The "data to append" was appended to file!');
}
fs.appendFile('hola.txt', ' data to append', 'utf8', appendErr);

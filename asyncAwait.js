  /**
 * Usando funciones asicronas de promesas (fsPromises)
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */

const fs = require ('fs/promises')

const file = 'message.txt'

async function asynchronousPromises() {
    const writeFiles = await fs.writeFile(file, 'nuevo archivo');

    console.log('Se realizó writeFiles', writeFiles)

    const appendFiles = await fs.appendFile(file, 'n/ nueva línea');
    
    console.log('Se realizó appendFiles',appendFiles)

    const unLink = await fs.unlink(file)

    console.log('Se realizó unLink',unLink)
}

asynchronousPromises()
 .then(()=>{
     console.log('Se resolvió correctamente con Async Await')
 })
 .catch(()=>{
    console.log('error: ',error)
 })

/**
 * Usando funciones asicronas
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */
 const fs = require ('fs')
// ---------- WRITE A ARCHIVE ----------
function atTheEnd(error) {
    if (error) {
        console.error('hubo un error al crear el archivo', error)
        return
    }
    console.log('el archivo fue escrito exitosamente')
}
fs.writeFile('holaDos.txt','Hola a todos desde nuevo archivo','utf-8',atTheEnd)


// ---------- APPEND FILE ----------
function appendErr(err) {
    if (err) {
        console.error('data error', err)
    }
    console.log('la nueva línea fue gregada');
}

//fs.appendFile('holaDos.txt', ' \n nueva linea', 'utf8', appendErr);

// ---------- UNLINK FILE ----------

function unLinkErr(err) {
    if (err) {
        console.error('No se pudo eliminar', err)
    } else {
        console.log('Se eliminó exitósamente');
    }
}

//fs.unlink('holaDos.txt', unLink);

// ---------- uso de setTimeout ----------
function appendAndUnLink(appen,unLink) {
    fs.appendFile('holaDos.txt', ' \n nueva linea', 'utf8', appen(err));

    setTimeout(() => {
        fs.unlink('holaDos.txt', unLink(err))
    }, 5000);
}

appendAndUnLink((appendErr(err)),(unLinkErr(err)))

//appendAndUnLink(appendErr,unLinkErr)
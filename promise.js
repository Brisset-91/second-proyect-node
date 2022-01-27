/**
 * 
 * 
 * 
 * 
 * 
 * 
 */

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
}

function construir (unMuro){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            unMuro.construido =  true

            if (!unMuro.construido) {
                reject(new Error('No se pudo construir'))
            } 
            resolve(unMuro)
        }, 2000);
    })
}

function aplanar (unMuro){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            unMuro.aplanado = true

            if (!unMuro) {
                reject(new Error('No se pudo construir'))
            } 
            resolve(unMuro)
        }, 2000);
    })
}

function pintar (unMuro){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            unMuro.pintado = true

            if (!unMuro) {
                reject(new Error('No se pudo construir'))
            } 
            resolve(unMuro)
        }, 2000);
    })
}



//Promesas
//new Promise((resolve, reject)=>{})
//resolve => Es una funcion que vamos a ejecutar cuando la promesa debe pasar de pendiente a resuelta
//reject => Es una funcion que vamos a ejecutar cuando la promesa debe pasar de pendiente a rechazada
//La promesa creada (objeto) tendrá dos metodos
//then
//catch
/*
const promesaDeConstruccion = construir(muro)

promesaDeConstruccion
.then((muroConstruido) => {
    console.log('muroConstruido: ', muroConstruido)
})
.catch((error)=>{
    console.log('error: ',error)
})

construir(muro)
.then((muroConstruido) => {
    console.log('muroConstruido: ', muroConstruido)
    aplanar(muroConstruido)
     .then((muroAplanado)=>{
        console.log('muroAplanado: ', muroAplanado)
        pintar(muroAplanado)
        .then((muroPintado)=>{
            console.log('muroPintado: ', muroPintado)
        })
        .catch(()=>{
            console.log('error: ',error)
         })
        
     })
     .catch(()=>{
        console.log('error: ',error)
     })
})
.catch((error)=>{
    console.log('error: ',error)
})*/
// async => palagra reservada que ocupamos para marcar una duncion asyncrona (toda aquella que una await internamente)
// await => palagra reservada que usaremos para esperar la resolución de una promesa

async function principal() {
    const muroConstruido = await construir(muro)
    const muroAplanado = await aplanar(muroConstruido)
    const muroPintado = await pintar(muroAplanado)
    
    console.log('muroPintado: ', muroPintado)
}

principal()
.then(()=>{
    console.log('FIN')
})
.catch((error)=>{
    console.log('error: ',error)
})
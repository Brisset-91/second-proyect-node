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

function construir(unMuro, unaFuncion) {
    setTimeout(() => {
        unMuro.construido = true

        unaFuncion(null,unMuro)
    }, 2000);
   
    return unMuro
}
function aplanar(unMuroConstruido, unaFuncion) {
    setTimeout(() => {
        unMuroConstruido.aplanado = true

        unaFuncion(null,unMuroConstruido)
    }, 2000);
}

function pintar(unMuroAplanado) {
    setTimeout(() => {
        unMuroAplanado.pintado = true

        unaFuncion(null,unMuroAplanado)
    }, 2000);
}

construir({...muro}, (error,muroConstruido)=>{
   aplanar(muroConstruido, (error, muroAplanado) => {
       pintar(muroAplanado, (error, muroAplanado) => {
        console.log('muro Listo: ', muroPintado)
        console.log('muro: ', muro)
       })
   })
})

/*
const muroConstruido = construir(muro)
const unMuroAplanado = aplanar(muroConstruido)
const muroPintado = pintar(unMuroAplanado)*/

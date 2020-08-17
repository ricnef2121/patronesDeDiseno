/**
 * patron modulo, todo es publico
 * se encuentra basado en los objetos literales de javascript
 * 
 * const b = {
 * 
 * }
 */

 const modulo = {
     prop:'mi prop',
     config:{
         lenguaje:'es',
         cache:'true'
     },
     setConfig : conf => {
         modulo.config = conf
     },
     isCacheEnabled : ()=>{
         console.log(modulo.config.cache ? 'si' : 'no')
     }
 }


 /**
  * modulo Revelador, contiene una api publica y una privada
  * ,permite no tener que usar la sintaxis de un objeto literal para definir su propiedades o
  * para acceder a ellas, es decir podemos usa una funcion para poder crear un moculo o ifis
  * 
  * 
  */

const resultado = (()=>{
    const x = {};

    return {
        a : () => console.log(x),
        b : (key,val) => x[key] = val
    }
})()
//debe de retorna un objeto vacio por que no se le han asiganado valores a este modulo
//api privada
resultado.a()
//asiganamos una propiedad y su valor
resultado.b('nombre','ricardo')
//vemos los valores asignados
resultado.a()
//api publica
console.log(resultado.x)

//caso practico modulo revelador

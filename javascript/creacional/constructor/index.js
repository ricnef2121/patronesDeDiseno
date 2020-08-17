/**
 * Patron constructor
 */
class Miclass {
  //utilizamos el metodo constructor para
  //asignarle propiedades
  constructor(p1, p2) {
    this.propiedad1 = p1;
    this.propiedad2 = p2;
    this.seeProperties = () => {
      console.log(`Propiedad 1 = ${p1}`);
      console.log(`Propiedad 2 = ${p2}`);
    };
  }
}

const instancia = new Miclass("valor 1", "valoe 2");
//instancia.seeProperties();

//patron constructor con portotipos
//ventajas
//todos los metodos o propiedas asigandas al prootipo no van a ser copiadas a cada una de las instancias echas

class Miclass2 {
  //utilizamos el metodo constructor para
  //asignarle propiedades
  constructor(p1, p2) {
    this.propiedad1 = p1;
    this.propiedad2 = p2;
  }

  seeProperties = () => {
    console.log(`Propiedad 1 = ${p1}`);
    console.log(`Propiedad 2 = ${p2}`);
  };
}

const instancia2 = new Miclass2(1, 2);
//console.log(instancia2)

//Usando la clase object, ¿por que la clase object?, todos los objetos en javascript la tienen

Object.prototype.log = function () {
  console.log(this);
};

const x = { a: 1 };
//ahora comprobamos que log esta dentro del objeto creado
x.log()

//creamos un polyfill
/**
 * Un polyfill o polyfiller es un módulo de código más o menos extenso 
 * que hace que las funciones modernas de HTML, CSS o JavaScript estén 
 * disponibles en navegadores antiguos que ya no son compatibles con estas. 
 */
if(!String.prototype.trim){
    String.prototype.trim = function(){
        try {
            return this.replace(/^\s+\s+$/g,"")
        } catch (error) {
            return this;
        }
    }
}

const y = "     lala    ".trim();
y.log()

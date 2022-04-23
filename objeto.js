//programa 0
var miAuto = {
    marca: "McLaren",
    modelo: "F1",
    año: 1995    
    }
    console.log(miAuto);



//Programa 1
// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.
var objecto = {}; //Sintaxis de objetos literales
var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Supra MK4",
    año: 1989,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
    return `Auto ${this.modelo} ${this.año}`; // para insertar este caracter ` pon alt+96 - variable concatenada
    }
};
miAuto.detallesDelAuto(); 
console.log(miAuto.detallesDelAuto());





//programa 2
    function auto(marca, modelo, año) {  // Crear una función con los parametros que va a recibir, 
        this.marca = marca;   // Utilizar el "this" para asignar valores a las propiedades del objeto 
        this.modelo = modelo;
        this.año = año;
    }
    
    var newAuto = new auto("Lamborghini", "Murciélago", 2004);

    console.log(newAuto)
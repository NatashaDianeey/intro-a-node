const cowsay = require("cowsay");
const inicio = require("./inicio");
const nudo = require("./nudo");
const final = require("./final");




// Se utilizara de forma, global
const nombre = "Natasha";

// local, Se puede cambiar
const edad = Math.floor(Math.random() * 100);

// Se usa para valores fijos, nunca cambiaran
const cabello = "obscuro";

const fraceVaquita = "Esta es la frase de la vaquita";

// Se creara una historia
const historia = "Hola, mi nombre es " + nombre + " y tengo " + edad + "años. Hoy aprendi a usar una dependencia de node que se llama cowsay";  




// Ejercicio de Hisstoria con inicio, nudo y final
const personaje = "Natt";
const villano = "juan";
const lugar = "Centraal";
const hobby = "natacion";


//Redondear hacia arriba y hacia abajo
// Math.round();

//Redondear hacia abajo unicamente
// Math.floor();

// Redeondear hacia arriba unicamente
// Math.cel();




// console.log(historia);

console.log(inicio.historia(personaje, villano, lugar, hobby, edad));

// console.log('hola');

console.log(cowsay.say({
	text : fraceVaquita,
	e : "++",
    T : "V"
}));


// console.log('estoy abriendo archivo js en terminal');

// or cowsay.think()
module.exports = {
    historia: function (personaje, lugar, villano, hobby, edad) {
        if(edad > 18 && edad < 80 ) {
            return `${personaje} vivia una triste existencia por que no lograba encontrar el sentido de la vida. Llevaba ${edad} años haciendose preguntas existenciales que no podia responder. `
        } else if(edad > 80) {
            return `Despues de viajar por el mundo ${personaje} por ${edad}, ${personaje} encontro el secreto de la felicidad que es tenerse a si misma.`
        } else {
            return `Habia una vez una chica llamada ${personaje} que se encontraba frustrada por no saber el por que de su sentir a los ${edad}.`
        }
        
        
    }
}


// module.exports = {
//     historia: function (personaje, lugar, villano, hobby ) {
//         return "Hola mi nombre es " + personaje + ", un dia me encontraba en " + hobby + "cuando llego "
//     }
// }

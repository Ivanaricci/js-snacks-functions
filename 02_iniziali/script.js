/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function iniziale (name){
    return name.charAt(0)
}

function arrayIniziali (array) {
    return array.map(iniziale)
}


// Invoca la funzione qui e stampa il risultato in console

let inizialiNomi = arrayIniziali(names)
console.log(inizialiNomi)



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
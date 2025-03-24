/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function startWord (word, letter) {
    return word.charAt(0).toLowerCase() === letter.toLowerCase();
}

function namesByLetter(namesArray, letter) {
    return namesArray.filter(name => startWord(name, letter));
}

// Invoca la funzione qui e stampa il risultato in console

let namesStartA = namesByLetter (names, 'A')
console.log(namesStartA)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
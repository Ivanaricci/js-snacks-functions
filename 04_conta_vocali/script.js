/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function numVocali(x) {
    const vocali = ['a', 'e', 'i', 'o', 'u']; 
    let vocaliArray = [];
  

    for (let i = 0; i < x.length; i++) {
      let letter = x[i];
      letter = letter.toLowerCase();
  
      
      if (vocali.includes(letter)) {
        vocaliArray.push(letter);
      }
    }
  
    return vocaliArray.length;
  }
  


// Invoca la funzione qui e stampa il risultato in console

let num = numVocali(word)
console.log(num)



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
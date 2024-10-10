/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}
console.log("Esercizio 1 : ", area(5, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (a !== b) {
      return a + b;
    } else {
      return (a + b) * 3;
    }
  } else {
    console.log("I numeri inseriti non sono validi");
  }
}
console.log("Esercizio 2: ", crazySum(1, 1));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a) {
  let diff = a - 19;
  if (a > 19) {
    return Math.abs(diff * 3);
  } else {
    return Math.abs(diff);
  }
}
console.log("Esercizio 3: ", crazyDiff(10));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
  if (Number.isInteger(n)) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return "true";
    } else {
      return "out of range";
    }
  }
}
console.log("Esercizio 4: ", boundary(100));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  if (typeof str === "string") {
    if (str.startsWith("EPICODE")) {
      return str;
    } else {
      return "EPICODE" + str;
    }
  } else {
    return "Quella che hai inserito non è una stringa";
  }
};
console.log("Esercizio 5: ", epify("EPICODEAndrea"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (x) {
  if (x > 0) {
    if (x % 3 === 0 || x % 7 === 0) {
      return "Il numero inserito è multiplo di 3 o di 7";
    } else {
      return "Il numero inserito non è un multiplo di 3 o di 7";
    }
  } else {
    return "Il numero inserito non è un numero positivo";
  }
};
console.log(check3and7(3));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  let strArr = str.split("");

  return strArr.reverse().join("");
};
console.log("La stringa invertita è:", reverseString("Andrea"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str) {
  //verifico che il parametro sia una stringa
  if (typeof str === "string") {
    //creo un array i cui elementi sono le parole della stringa inserita
    let word = str.split(" ");
    //creo un ciclo in cui dico che "a" è il contatore e si sposta nei vari elementi dell'array
    for (let i = 0; i < word.length; i++) {
      //assegno a una variabile l'elemento corrente dell'array word

      word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    }
    str = word.join(" ");
    return str;
  }
};
console.log(upperFirst("ciao mi chiamo andrea"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

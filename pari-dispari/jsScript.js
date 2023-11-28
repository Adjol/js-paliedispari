// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.



//faccio scegliere all'utente tra pari o dispari

let userChoice = prompt("scometti se 'pari' o dispari' ")
console.log(userChoice);

//faccio scegliere all'utente un numero tra 1 e 5
let userNumber = parseInt(prompt("inserisci un numero da 1 a 5") );
console.log(userNumber);

//genero un numero random
let pcNumber = Math.floor(Math.random() * 5) +1;
console.log(pcNumber);

//sommo il numero utente con quello random
let result = userNumber + pcNumber;

//definisco una variabile per la scelta del utente
let choice = userChoice;

//individuo se il risultato è pari o dispari
let resultPari = result % 2 ==0;

let resultDispari = result % 2 !==0;


//ciclo if per le varie combinazioni
if ((resultPari===true) && (choice==="pari")){

    console.log("hai vinto");

} else if((resultDispari===true) && (choice==="dispari")) {

    console.log("hai vinto");

} else(console.log("hai perso"));



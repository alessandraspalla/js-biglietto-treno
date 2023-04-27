// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// Dichiaro le variabili
let userKm, userEta, prezzoBiglietto, finalPrice, messaggio;

// Dichiaro le costanti
const tariffaBiglietto = 0.21;

// Chiedo all'user i km che dovrà percorrere
userKm = parseInt(prompt("Inserisci quanti chilometri dovrai percorrere"));
console.log(userKm);

// Chiedo l'età all'user
userEta = parseInt(prompt("Inserisci la tua età"));
console.log(userEta);

// Calcolo il prezzo del biglietto intero
prezzoBiglietto = tariffaBiglietto * userKm
console.log(prezzoBiglietto);


// Istruzioni Condizionali
if (userEta < 18) { // va applicato uno sconto del 20% per i minorenni

    finalPrice = prezzoBiglietto - (prezzoBiglietto * 20 / 100);

} else if (userEta > 65) { // va applicato uno sconto del 40% per gli over 65

    finalPrice = prezzoBiglietto - (prezzoBiglietto * 40 / 100);

} else { //quando non si è ne minorenni ne over 65

    finalPrice = prezzoBiglietto;
}

// Arrotondo il prezzo finale a massimo due cifre decimali
finalPrice = Math.round((finalPrice + Number.EPSILON) * 100) / 100;
console.log(finalPrice);

// Definisco il messaggio
messaggio = "Il prezzo del tuo biglietto è " + finalPrice + "€"


// Output
document.getElementById('ticket').innerHTML = messaggio

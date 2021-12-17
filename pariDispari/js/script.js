/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


let scelta = prompt("Scegli pari o dispari").trim();
let num = parseInt(prompt("Scegli un numero da 1 a 5"));



scelta.toLocaleLowerCase();

if ((scelta != "pari" || scelta != "dispari") && (num <1 || num >5)) {
    console.log("I DATI INSERITI NON SONO CORRETTI, RITENTA SEGUENDO LE ISTRUZIONI CHE TI VENGONO FORNITE!!");
}else{
    console.log(`Hai scelto ${scelta}`);
    console.log(`Hai scelto il numero ${num}`);
    let numComputer = random();
    console.log(`Il computer ha scelto il numero ${numComputer}`);

    let somma = sommaNumeri(num, numComputer);

    console.log(`la somma è ${somma}`)

    if (scelta == "pari") {
        pari(somma);
    }else{
        dispari(somma);
    }
}


function random(){
    let numero = Math.floor(Math.random()*5 +1);
    return numero;
}

function sommaNumeri(num1, num2){
    let somma = num1 + num2;
    return somma;
}

function pari(num){
    if (num % 2 == 0) {
        console.log("Hai vinto, Complimenti!");
    }else{
        console.log("Hai perso, Vergognati");
    }
}

function dispari(num){
    if (num % 2 != 0) {
        console.log("Hai vinto, Complimenti!");
    }else{
        console.log("Hai perso, Vergognati");
    }
}
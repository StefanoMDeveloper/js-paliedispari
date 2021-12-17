/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


let parola = prompt("Inserisci una parola o una frase per scoprire se è palindroma.");

let palindromo = palindroma(parola);
console.log(palindromo);




function palindroma(parola){
    let j = parola.length-1;
    let parolaInversa = [];

    for (let i = 0; i < parola.length; i++) {
        parolaInversa[i] = parola[j];
        j--;

        if(parola[i] != parolaInversa[i]){
            return "la parola o frase inserita NON è palindorma!"
        }
    }
    
    return "La parola o frase inserita è palindorma"
    
    
}



let word = prompt("inserisci una parola");








function invertiParola(str){
    let wordReverse = str.split('').reverse().join('');  
    return wordReverse;
}


let parolaInversa = invertiParola(word);

if(word === parolaInversa){
    alert('la parola è palindroma');
  } else {
    alert('la parola non è palindroma');
}
  

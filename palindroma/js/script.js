const parolaIns = 'ciao'; //prompt

if(isPalindroma(parolaIns)){
  console.log('la parola è palindroma')
}else{
  console.log('la parola non è palindroma')
};

function isPalindroma(parola){
  //1. giro la parola
  let parolaGirata = '';
  for(let i = parola.lenght - 1; i >= 0; i--){
    parolaGirata += parola[i];
    console.log(parolaGirata);
  }

  // metodo alternativo
  // parolaGirata = parola.split('').reverse().join('');

  //2. confronto se la parola inserita è uguale a quella girata

  //3. restituisco true se è palindroma e false se non lo è
  if(parolaGirata === parola) return true;
  else returne false;
}


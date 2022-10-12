// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha
//   una lista di nomi e una lista di cognomi, e da queste vuole generare una
//    falsa lista di invitati con nome e cognome.
const listaNomi=["Adriano", "Federico","Andrea","Marco"];
const listaCognome=["Barboza","Rossi","Bianchi","Rizzi"];

let nomeRandom="";
let cognomeRandom="";
const bottone3 = document.getElementById("btn3")
bottone3.addEventListener("click",function stampa2(){
   for(i=0;i<listaNomi.length;i++){
   iR=Math.floor(Math.random() * listaNomi.length);
   nomeRandom=listaNomi[iR]
   console.log(nomeRandom)
   document.getElementById("nome").innerHTML+=nomeRandom+"<br>"
   }

   for(i=0;i<listaCognome.length;i++){
    iR=Math.floor(Math.random() * listaCognome.length);
    cognomeRandom=listaCognome[iR]
    document.getElementById("cognome").innerHTML+=cognomeRandom+"<br>"
    console.log(cognomeRandom)
    }
   
})
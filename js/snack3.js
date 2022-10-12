// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
const lista =["1","2","3","4"];
const bottone2 = document.getElementById("btn2")
bottone2.addEventListener("click",function stampa1(){
    let somma=0
    for(i=0;i<lista.length;i++){
    somma +=parseInt(lista[i])
    let numeri=(lista[i])
        console.log(numeri)
    }
    console.log(somma)
    document.getElementById("testo2").innerHTML=somma
})
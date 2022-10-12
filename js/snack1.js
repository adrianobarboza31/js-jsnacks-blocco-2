// **Snack1**
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
const bottone = document.getElementById("btn")
bottone.addEventListener("click",function stampa1(){
    let numeroInserito= parseInt(document.getElementById("n").value)
    if(numeroInserito%2!=0){
        numeroInserito=numeroInserito+1
        document.getElementById("testo").innerHTML=numeroInserito
    }else{
        document.getElementById("testo").innerHTML=numeroInserito
    }
})
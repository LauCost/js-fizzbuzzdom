//Seleziona la lista non ordinata
let lista = document.querySelector("ul");

console.log(lista);

//Crea un ciclo di numeri che va da 1 a 100
for (let i = 1; i <= 100; i++) {

    //Crea un quadrato rosso se il valore i è divisibile per 15    
    if (i % 15 === 0) {
        const quadro = `<li class="rosso"> fizzBuzz </li>`;

        lista.innerHTML += quadro;

        //Crea un quadrato giallo se il valore i è divisibile per 5
    } else if (i % 5 === 0) {
        const quadro = `<li class="giallo"> buzz </li>`;

        //inserisce nell'html il quadrato
        lista.innerHTML += quadro;

        //Crea un quadrato Verde se il valore i è divisibile per 3
    } else if (i % 3 === 0) {
        const quadro = `<li class="verde"> fizz </li>`;

        //inserisce nell'html il quadrato
        lista.innerHTML += quadro;

        //Crea un quadrato blu se i non è divisilibile ner per 15 ne per 3 ne per 5
    } else {
        const quadro = `<li class="celeste"> ${i} </li>`;

        //inserisce nell'html il quadrato
        lista.innerHTML += quadro;
    }
}





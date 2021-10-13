//Seleziona la lista non ordinata
let lista = document.querySelector("ul");

console.log(lista);

//Crea un ciclo di numeri che va da 1 a 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        const quadro = `<li class="verde"> fizz </li>`;

        lista.innerHTML += quadro;

    } else if (i % 5 === 0) {
        const quadro = `<li class="giallo"> buzz </li>`;

        lista.innerHTML += quadro;

    } else if (i % 15 === 0) {
        const quadro = `<li class="rosso"> fizzBuzz </li>`;

        lista.innerHTML += quadro;
    } else {
        const quadro = `<li class="celeste"> ${i} </li>`;

        lista.innerHTML += quadro;
    }
}
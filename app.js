
let numBox = 100;

let tmpHtml = '';

// Utilizziamo un ciclo for per creare 100 box
for (let i = 0; i < numBox; i++) {
    let content = i + 1;
    let boxClass = 'box';

    // Se il numero è multiplo di 3 e di 5, lo sostituiamo con "FizzBuzz" e assegnamo una classe specifica per il colore
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
        content = "FizzBuzz";
        boxClass += ' fizzbuzz-color'; 
    }
    // Se il numero è multiplo di 3, lo sostituiamo con "Fizz" e assegnamo una classe specifica per il colore
    else if ((i + 1) % 3 === 0) {
        content = "Fizz";
        boxClass += ' fizz-color'; 
    }
    // Se il numero è multiplo di 5, lo sostituiamo con "Buzz" e assegnamo una classe specifica per il colore
    else if ((i + 1) % 5 === 0) {
        content = "Buzz";
        boxClass += ' buzz-color'; 
    }

    // Aggiungiamo il markup HTML per un box alla stringa temporanea tmpHtml
    tmpHtml += `<div class="${boxClass}">${content}</div>`;
}

// Creiamo un nuovo elemento <div> e lo assegniamo alla variabile box
const box = document.createElement('div');

// Aggiungiamo classi CSS al nostro elemento box
box.className = 'd-flex justify-content-between align-content-center flex-wrap';

// Aggiungiamo un attributo "id" all'elemento box
box.setAttribute('id', 'boxes');

// Assegniamo il markup HTML alla proprietà innerHTML del nostro elemento box, così da aggiungere i box all'elemento
box.innerHTML = tmpHtml;

// Output della console per verificare la struttura dell'elemento box
console.dir(box);

// Selezioniamo l'elemento HTML con la classe "container" utilizzando querySelector
const container = document.querySelector('.container');

// Aggiungiamo l'elemento box all'elemento container
container.append(box);

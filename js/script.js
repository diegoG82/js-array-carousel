// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// Input
// Creo Array delle immagini

const images = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

// inserisco immagini nel DOM con queryselector nel div slider-items
const item = document.querySelector(".slider-items");

// Creo un ciclo per far scorrere le immagini
for (let i = 0; i < images.length; i++) {
  const currentImg = images[i];

  // Creo una variabile per aggiungere il div con classe item
  const sliderItems = `<div class="item"><img src="${currentImg}"></div>`;
  item.innerHTML += sliderItems;
}

// Creo una variabile con la quale prelevo il contenitore
const itemArray = document.getElementsByClassName("item");

// Assegno al primo Elemento dell'array la variabile firstimage
let firstImage = 0;

// AL primo elemento dell'array vado ad aggiungere la classe active
itemArray[firstImage].classList.add("active");

// creo una variabile per selezionare l'elemento per scrorrere in basso
const downBtn = document.querySelector(".arrowdown");

// Aggiungo interazione al click di arrowdown
downBtn.addEventListener("click", function () {
  // Se firstimage e' maggiore della lunghezza di itemArray -1 (perche il primo elemento è 0)
  if (firstImage < itemArray.length - 1) {
    // rimuovo la classe active
    itemArray[firstImage].classList.remove("active");

    // avanzo al successivo elemento dell'array che diventera' firstimage
    firstImage++;

    // e gli aggiungo la classe active
    itemArray[firstImage].classList.add("active");
  }               
});

// Implemento lo scorrimento delle immagini con il bottone arrowup

const upBtn = document.querySelector(".arrowup");

upBtn.addEventListener("click", function () {
  if (firstImage > 0) {
    itemArray[firstImage].classList.remove("active");

    firstImage--;

    itemArray[firstImage].classList.add("active");
  }
});

// **BONUS 1:**
// Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.


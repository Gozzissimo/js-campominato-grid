// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const play = document.querySelector('.play');
const grid = document.querySelector('.grid');
const select = document.getElementById('difficulty');
let numMin = 1;
let numMax = 100;


// click sul pulsante play
play.addEventListener('click', function(){

    // condizione di partenza
    grid.innerHTML = '';

    let level = select.value;

    // creazione square
    for (let i = numMin; i <= numMax; i++) {

        // creare un div
        let square = document.createElement('div');

        //in base al livello sceglgo il numero di celle
        if (level == 1) {
            // grid grande
            numMax == 100;
            square.classList.add('large');

        } else if (level == 2) {
            // grid media
            numMax == 81;
            square.classList.add('medium');

        } else if (condition) {
            // grid piccola
            numMax == 49;
            square.classList.add('small');
        }

        // dargli la classe
        square.classList.add('square');

        // inserire il numero
        square.innerHTML = i;

        // click sulle celle
        square.addEventListener('click', function () {
            // colorare di azzurro la cella
            this.style.backgroundColor = 'lightblue';

        });

        // appendiamo in grid e rendiamola visibile
        grid.classList.add('active');
        grid.appendChild(square);
    }

});

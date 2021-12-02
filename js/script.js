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
    // console.log(level);
    
    //in base al livello sceglgo il numero di celle
    if (level == 'easy') {
        // grid grande
        numMax = 100;
        
    } else if (level == 'medium') {
        // grid media
        numMax = 81;
        
    } else if (level == 'crazy') {
        // grid piccola
        numMax = 49;
    }

    // creazione div square
    for (let i = numMin; i <= numMax; i++) {
        
        // creare un div
        let squareBox = document.createElement('div');

        // dargli la classe square
        squareBox.classList.add('square');

        // larghezza lato in base a grandezza grid
        if (level == 'easy') {
            // grid grande
            squareBox.classList.add('large');

        } else if (level == 'medium') {
            // grid media
            squareBox.classList.add('medium');

        } else if (level == 'crazy') {
            // grid piccola
            squareBox.classList.add('small');
        }

        // inserire il numero all'interno
        squareBox.innerHTML = i;

        // click sulle celle
        squareBox.addEventListener('click', function () {
            // colorare di azzurro la cella
            this.style.backgroundColor = 'cornflowerblue';

        });

        // appendiamo in grid e rendiamola visibile
        grid.classList.add('active');
        grid.appendChild(squareBox);
    }

});

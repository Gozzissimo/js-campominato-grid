// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: : party_wizard:
// Facciamo prima la parte grafica a mano e solo dopo passiamo allo script
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri ?
//     Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli in un secondo momento.

const play = document.querySelector('.play');
const grid = document.querySelector('.grid');
const select = document.getElementById('difficulty');
let numMin = 1;
let numMax = 100;


//tracciare il cambio di livello
select.addEventListener("change", function () {
    let level = select.value;
    console.log(level);

});

//in base al livello sceglgo il numero di celle


//vado a creare il numero di celleche mi serve

//click sulle celle
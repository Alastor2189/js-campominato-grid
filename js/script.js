// Consegna:
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Bonus:
// Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

//generazione della griglia di gioco 



const cellUndred = document.querySelector(".grid-container");


for (let i = 1; i <= 100; i++) {
    let cellGrid;
    cellGrid = i;

    const singleCell = document.createElement("div");
    singleCell.innerHTML += `${cellGrid}`;

    singleCell.classList.add("cell-grid");
    console.log(singleCell);

    singleCell.addEventListener("click", function() {
        this.classList.add("cell-active");
        console.log(this);
    });
    cellUndred.append(singleCell);
}
// const singleCell = document.querySelector(".cell-grid");
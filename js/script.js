// Consegna:
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Bonus:
// Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49


//Bottone di click per inizializzare il gioco

document.getElementById("btn-play").addEventListener("click",

    //generazione della funzione per i bonus 
    function() {

        const cellUndred = document.querySelector(".grid-container");
        cellUndred.innerHTML = "";
        const level = document.getElementById("level").value;
        console.log(level);

        let numberBox = 0;
        switch (level) {
            case 'easy':
                numberBox = 100;
                break;
            case 'medium':
                numberBox = 81;
                break;
            case 'hard':
                numberBox = 49;
                break;
        }
        for (let i = 1; i <= numberBox; i++) {
            let cellGrid;
            cellGrid = i;

            const singleCell = document.createElement("div");
            singleCell.innerHTML += `${cellGrid}`;

            singleCell.classList.add("cell-grid");
            console.log(singleCell);

            switch (level) {
                case 'easy':
                    singleCell.classList.add("cell-grid");
                    break;
                case 'medium':
                    singleCell.classList.add("cell-grid-m");
                    break;
                case 'hard':
                    singleCell.classList.add("cell-grid-h");
                    break;
            }

            singleCell.addEventListener("click", function() {
                this.classList.add("cell-active");
                console.log(this);
            });
            cellUndred.append(singleCell);
        }
    }



);
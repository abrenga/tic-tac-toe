let arrayCelle = [];
let toccaAllaX = true;



function creaCella(x, y) {
    let boxCella = {
        cellaHTML: document.getElementById("box_" + x + "-" + y),
        x: x,
        y: y,
        contenutoCella: ""

    }
    inizializza(boxCella);
    return boxCella
}

function creaGriglia(sizeX, sizeY) {
    for (let x = 0; x < sizeX; x++) {
        for (let y = 0; y < sizeY; y++) {
            let cella = creaCella(x, y);
            arrayCelle.push(cella)
            console.log(cella)

        }
    }


}

function selezionaCella(x, y, arrayCelle) {
    let myBox = null
    arrayCelle.forEach(boxCella => {
        if (boxCella.x == parseInt(x) && boxCella.y == parseInt(y)) {
            console.log(boxCella)
            myBox = boxCella;
        }
    })
    return myBox;
}

function inserisciLaX(cella) {
    if (cella.contenutoCella == "" && toccaAllaX == true) {
        cella.contenutoCella = "X";
        cella.cellaHTML.innerHTML = "x";
        toccaAllaX = false;

    }

}


function inserisciLaO(cella) {
    if (cella.contenutoCella == "" && toccaAllaX == false) {
        cella.contenutoCella = "O";
        cella.cellaHTML.innerHTML = "O";
        toccaAllaX = true;
    }
}

function onClick(cellaHtml) {
    let cellaId = cellaHtml.id.replace('box_', '');
    let coords = cellaId.split("-");
    let x = coords[0];
    let y = coords[1];

    let cellaSelezionata = selezionaCella(x, y, arrayCelle);
    inserisciLaX(cellaSelezionata)
    inserisciLaO(cellaSelezionata)
    return cellaSelezionata;

}



function inizializza(cella) {

    cella.cellaHTML.addEventListener("click", (e) => {
        onClick(e.target);

    })
}

creaGriglia(3, 3);
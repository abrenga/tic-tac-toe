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


        }
    }


}

function selezionaCella(x, y, arrayCelle) {
    let myBox = null
    arrayCelle.forEach(boxCella => {
        if (boxCella.x == parseInt(x) && boxCella.y == parseInt(y)) {

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
    console.log(cellaSelezionata)
    return cellaSelezionata;

}



function inizializza(cella) {

    cella.cellaHTML.addEventListener("click", (e) => {

        onClick(e.target);

    })
}


function vincitaOrizzonatale(sizeX, sizeY) {
    for (let y = 0; y < sizeY; y++) {
        let PrimaCellaNellaRiga = selezionaCella(0, y, sizeY);
        for (let x = 0; x < sixeX; x++) {
            let cella = selezionaCella(x, y, sizeX)
            if (cella.content == "") {
                break;
            } if (cella.content !== PrimaCellaNellaRiga.content) {
                break;
            } if (x == sizeX) {

            }
        }





    }

}

creaGriglia(3, 3);

let x = 0;
while (x < 3) {
    // Fai robe
    let y = 0;
    while (y < 3) {
        // Fai altre robe
        y++;
    }
    x++;
}

for (let x = 0; x < 3; x++) {
    // Fai robe
    for (let y = 0; y < 3; y++) {
        // Fai altre robe
    }
}
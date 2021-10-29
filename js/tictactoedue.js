let arrayCelle = [];
let toccaAllaX = true;
let sizeX = 0;
let sizeY = 0;



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

function creaGriglia(lunghezzaX, lunghezzaY) {
    sizeX = lunghezzaX;
    sizeY = lunghezzaY;
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
        vincitaOrizzonatale(sizeX, sizeY);
        vincitaVerticale(sizeX, sizeY)

    })
}


function vincitaOrizzonatale(sizeX, sizeY) {
    for (let y = 0; y < sizeY; y++) {
        let PrimaCellaNellaRiga = selezionaCella(0, y, arrayCelle);
        for (let x = 0; x < sizeX; x++) {
            let cella = selezionaCella(x, y, arrayCelle)
            if (cella.contenutoCella == "") {
                break;
            } if (cella.contenutoCella !== PrimaCellaNellaRiga.contenutoCella) {
                break;
            } if (x == sizeX - 1) {

                alert("ha vinto la " + cella.contenutoCella)

            }
        }
    }
}

function vincitaVerticale(sizeX, sizeY) {
    for (let x = 0; x < sizeX; x++) {
        let primaCellaNellaColonna = selezionaCella(x, 0, arrayCelle);
        for (let y = 0; y < sizeY; y++) {
            let cella = selezionaCella(x, y, arrayCelle)
            if (cella.contenutoCella == "") {
                break;
            } if (cella.contenutoCella !== primaCellaNellaColonna.contenutoCella) {
                break;
            } if (y == sizeY - 1) {

                alert("ha vinto la " + cella.contenutoCella)

            }

        }
    }
}
function vincitaObliquaUno(sizeX) {
    

}

creaGriglia(3, 3);




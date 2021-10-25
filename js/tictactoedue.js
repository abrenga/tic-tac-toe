let arreyCelle = [];
let toccaAllaX = true;


function creaCella(x, y) {
    let cella = {
        cellaHTML: document.getElementById("box_" + x + "-" + y),
        x: x,
        y: y,
        cellaSelezionata: ""
    }
    avviaIlgioco(cella);
}

function creaGriglia(sizeX, sizeY) {
   
    for (let x = 0; x < sizeX; x++) {
        for (let y = 0; y < sizeY; y++) {
            let cellaNellArray = creaCella(x, y);
            cellaNellArray.x = x;
            cellaNellArray.y = y;

            arreyCelle.push(cellaNellArray);

        }
    }
}


function selezionaCella(x, y, celle) {
    let myBox = null;
    celle.forEach(box => {
        if (box.x == parseInt(x) && box.y == parseInt(y)) {
            myBox = box;
            return myBox
        }

    })
}

creaGriglia(3, 3);




function onClick(cellaHTML) {
    let cellaId = cellaHTML.id.replace("box_", "");
    let cordinate = cellaId.split("-");
    let x = cordinate[0];
    let y = cordinate[1];

    let cella = selezionaCella(x, y, arreyCelle)
    inserisciLaX(cella);
    inserisciLaO(cella);
}


function inserisciLaX(cella) {
    if (cella.cellaHTML == "" && toccaAllaX == true) {
        cella.cellaHTML.textContent = "X";
        cella.cellaSelezionata = "x";
        toccaAllaX = false;



    }

}

function inserisciLaO(cella) {
    if (cella.cellaHTML == "" && toccaAllaX == false) {
        cella.cellaHTML.textContent = "Y";
        cella.cellaSelezionata = "y";
        toccaAllaX = true;
    }

}


function avviaIlgioco(cella) {
    cella.cellaHTML.addEventListener("click", function () {
        onClick(e.target)
    });

}

function vincitaVerticale(x, y, sizeX) {


}

function vincitaOrizzontale(x, y, sizeY) {

}
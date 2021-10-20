let celle = [];
let toccaAllaX = true;


function creaCella(x, y) {
    let cella = {
        box: document.getElementById("box_" + x + "-" + y),
        x: x,
        y: y
    }

    celle.push(cella);
}

function creaGriglia(sizeX, sizeY) {
    for (x = 0; x < sizeX; x++) {
        for (y = 0; y < sizeY; y++) {
            creaCella(x, y);
        }
    }
}


function selezionaCella(x, y, celle) {

    celle.forEach(box => {
        if (box.x == parseInt(x) && box.y == parseInt(y)) {
            let myBox = box;
            return myBox
        }

    })
}

creaGriglia(3, 3);


celle.forEach(cella => {
    cella.box.addEventListener("click", function () {
        if (cella.box.textContent == "" && toccaAllaX == true) {
           selezionaCella(cella.x,cella.y, celle);
           inserisciLaX(cella.box)
            
        } else {
           selezionaCella(box.x, box.y, celle)
            inserisciLaO(cella.box)
        }
    })
});



creaGriglia(3, 3);


function inserisciLaX(btn) {
    btn.textContent = "X";
    toccaAllaX = false;

}

function inserisciLaO(btn) {
    btn.textContent = "O";
    toccaAllaX = true;

}


function vincitaVerticale(x, y, sizeX) {
    for (x = 0; x < sizeX; x++) {
        for (y = 0; y < sizeY; y++) {
            
        }
    }


}

function vincitaOrizzontale(x, y, sizeY) {

}
let arreyCelle = [];
let toccaAllaX = true;


function creaCella(x, y) {
    let cella = {
        cellaHTML: document.getElementById("box_" + x + "-" + y),
        x: x,
        y: y,
        cellaSelezionata: ""
    }
    return cella;
}

function creaGriglia(sizeX, sizeY) {
    for (x = 0; x < sizeX; x++) {
        for (y = 0; y < sizeY; y++) {
            let cellaNellArray = creaCella(x, y);
            cellaNellArray.x = x;
            cellaNellArray.y = y;

            arreyCelle.push(cellaNellArray);
            
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






creaGriglia(3, 3);


function inserisciLaX(cella) {
   if(cella.cellaHTML ==""&& toccaAllaX == true){
       cella.textContent = "X";

   }

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
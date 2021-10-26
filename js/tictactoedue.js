let arrayCelle = [];
let toccaAllaX = true;


function creaCella(x, y) {
    let boxCella = {
        cellaHTML: document.getElementById("box_" + x + "-" + y),
        x: x,
        y: y,
        contenutoCella: ""

    }
    return boxCella;
}

function creaGriglia(sizeX, sizeY) {
    for (let x = 0; x < sizeX; x++) {
        for (let y = 0; y < sizeY; y++) {
            let cella = creaCella(x, y);
            arrayCelle.push(cella)

        }
    }


}

function selezionaCella(x, y) {
    arrayCelle.forEach(boxCella => {
        if (boxCella.x == x && boxCella.y == y) {
            return boxCella;

        }
    })

}


function onClick(cella) {

    cella.addEventListener("click", (e) => {



    })

}

creaGriglia(3, 3)
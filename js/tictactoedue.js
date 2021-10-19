let celle = [];
let toccaAllaX = true;


function creaCella(x, y) {
    let cella = document.getElementById("box_" + x + "-" + y)
    celle.push(cella);
}

function creaGriglia(sizeX, sizeY) {
    for (x = 0; x < sizeX; x++) {
        for (y = 0; y < sizeY; y++) {
            creaCella(x, y);
        }
    }
}

creaGriglia(3, 3);


celle.forEach(cella => {
    cella.addEventListener("click", function () {
        if (cella.textContent == "" && toccaAllaX == true) {
            inserisciLaX(cella);
        } else {
            inserisciLaO(cella)
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


function assegnaVincitore() {
    
}
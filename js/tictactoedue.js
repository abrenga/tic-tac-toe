let celle = [];
let toccaAllaX = true;
let sizeX = 3;
let sizeY = 3;


function creaCella(x, y) {
    let cella = {
        box: document.getElementById("box_" + x + "-" + y),
        x : x,
        y: y,
        simbolo:""
    } 
   console.log(cella)
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
    cella.box.addEventListener("click", function () {
        if (cella.box.textContent == "" && toccaAllaX == true) {
            cella.simbolo = inserisciLaX(cella.box); 
            vincitaOrizzontale(x, y, sizeX)
            
        } else {
            cella.simbolo =  inserisciLaO(cella.box
            )
        }
    })
});





function inserisciLaX(btn) {
    btn.textContent = "X";
    toccaAllaX = false;

}

function inserisciLaO(btn) {
    btn.textContent = "O";
    toccaAllaX = true;

}


function vincitaOrizzontale(x, y, sizeX) {
    for (x = 0; x < sizeX; x++){
        for (y = 0; y < sizeY; y++) {
           

        }
    }


};

function vincitaverticale(x, y, sizeY) {

}
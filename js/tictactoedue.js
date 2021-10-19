let celle = [];
let toccaAllaX = true;


function creaCella(x, y) {
    let box = {
        cella: document.getElementById("box_" + x + "-" + y),
        posizioneX: x,
        posizioneY: y
    }

    celle.push(box);

}



function creaGriglia(sizeX, sizeY) {
    for (x = 0; x < sizeX; x++) {
        for (y = 0; y < sizeY; y++) {
            creaCella(x, y);
        }
    }
}


console.log(celle)
celle.forEach(cella => {
       cella.cella.addEventListener("click", function(){
           console.log(cella.cella)
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


/*btns.forEach(btn => {
    btn.addEventListener("click", function () {
        if (btn.textContent == "" && toccaAllaX == true) {
            let cella= selezionaCella(btn.x,btn.y)
            inserisciLaX(cella);
            console.log(cella)

        } else {
            inserisciLaO(btn)
        }

    }
    )
});*/





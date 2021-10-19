let celle = [];
let toccaAllaX = true;


<<<<<<< HEAD
function creaCella(x, y) {
    let box = {
        cella: document.getElementById("box_" + x + "-" + y),
        posizioneX: x,
        posizioneY: y
    }

    celle.push(box);

=======
function associaCella(x, y) {
    let cella = document.getElementById('box_' + x + '-' + y);
    console.log(cella)
    return cella
    
>>>>>>> b518d47693adcfd01fef47bb52606f04e6da1d58
}



function creaGriglia(sizeX, sizeY) {
<<<<<<< HEAD
    for (x = 0; x < sizeX; x++) {
        for (y = 0; y < sizeY; y++) {
            creaCella(x, y);
=======
    for (y = 0; y <= sizeY; y++) {
        for (x = 0; x <= sizeX; x++) {
            associaCella(x, y);
>>>>>>> b518d47693adcfd01fef47bb52606f04e6da1d58
        }
    }
}

creaGriglia(3, 3);


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
<<<<<<< HEAD
        if (btn.textContent == "" && toccaAllaX == true) {
            let cella= selezionaCella(btn.x,btn.y)
            inserisciLaX(cella);
            console.log(cella)

=======
        console.log(btn)
        if (btn.textContent == "" && toccaAllaX == true) {
            inserisciLaX(btn);
>>>>>>> b518d47693adcfd01fef47bb52606f04e6da1d58
        } else {
            inserisciLaO(btn)
        }

    }
    )
});*/





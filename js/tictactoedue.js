btns = document.querySelectorAll(".box");
let toccaAllaX = true;


function associaCella(x, y) {
    let cella = document.getElementById('box_' + x + '-' + y);
    console.log(cella)
    return cella
    
}



function creaGriglia(sizeX, sizeY) {
    for (y = 0; y <= sizeY; y++) {
        for (x = 0; x <= sizeX; x++) {
            associaCella(x, y);
        }
    }
}

creaGriglia(3, 3);


function inserisciLaX(btn) {
    btn.textContent = "X";
    toccaAllaX = false;

}

function inserisciLaO(btn) {
    btn.textContent = "O";
    toccaAllaX = true;

}


btns.forEach(btn => {
    btn.addEventListener("click", function () {
        console.log(btn)
        if (btn.textContent == "" && toccaAllaX == true) {
            inserisciLaX(btn);
        } else {
            inserisciLaO(btn)
        }

    }
    )
});





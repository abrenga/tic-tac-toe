btns = document.querySelectorAll(".box");
let toccaAllaX = true;


function creaCella (){
   let box = {
       x: x,
       y: y
   }
   return box;
}



function creaGriglia( sixeX, sizeY){
    for(y=0; z<= SixeY.lenght; y++){
        for(x=0; x<= sizeX; x++){
            creaCella(x, y);
        }
    }
}


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
        if(btn.textContent=="" && toccaAllaX == true){
            inserisciLaX(btn);
        } else{
            inserisciLaO(btn)
        }

    }
    )
});





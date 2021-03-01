
let icsX = "X";
let laO = "O";

let trisArray = [];


/*for (let i = 1; i <= 9; i++)
{
    const box = document.getElementById("box-" + i);
    trisArray.push(box);
}*/



let boxOne = document.getElementById("box-one");
trisArray.push(boxOne);
let boxTwo = document.getElementById("box-two");
trisArray.push(boxTwo);
let boxThree = document.getElementById("box-third");
trisArray.push(boxThree);
let boxFour = document.getElementById("box-four");
trisArray.push(boxFour);
let boxFive = document.getElementById("box-five");
trisArray.push(boxFive);
let boxSix = document.getElementById("box-six");
trisArray.push(boxSix);
let boxSeven = document.getElementById("box-seven");
trisArray.push(boxSeven);
let boxEight = document.getElementById("box-eight");
trisArray.push(boxEight);
let boxNine = document.getElementById("box-nine");
trisArray.push(boxNine);

let tris = {




    generareIlClick: function () {

        trisArray.forEach(box => {
            //dobbiamo specificare se al click compare la x o la O come?
            //se nel quadrato== "X" allora O
            $(document).ready(function () {
                $(box).click(function () {
                    if (box.innerHTML !== icsX || box.innerHTML == "") {
                        $(this).text(icsX);
                    }


                });


            });

        });
    },







}


tris.generareIlClick();



/*

ho nove caselle vuote 
appena clicco su una delle caselle compare la X(inizia la X)
se ci riclicco a x scompare.

se si cambia casella compare la O se si riclicca scompare.

*/


let caselle = [];


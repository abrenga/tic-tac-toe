
let icsX = "X";
let laO= "O";






let trisArray = [];

    

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




    generareIlClick : function(){

        trisArray.forEach(box => {
            $(document).ready(function () {
                $(box).click(function () {
                    $(this).text(icsX);
                    
                    
    
                  
                });
            
            });
            
        });
    },

    





}


tris.generareIlClick();




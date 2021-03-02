
let icsX = "X";
let laO = "O";

let trisArray = [];


for (let i = 1; i <= 9; i++) {
    const box = document.getElementById("box-" + i);
    trisArray.push(box);


}




let tris = {



    inserisciXInCasella: function () {

        trisArray.forEach(box => {
            $(document).ready(function () {
                $(box).click(function () {
                    box.innerHTML = icsX;
                })
            });

        });



    },


    inserisciOInCasella: function () {

        trisArray.forEach(box => {
            $(document).ready(function () {
                $(box).click(function () {
                    box.innerHTML = laO;
                })
            });

        });



    },




    iniziaIlgioco : function(){

        

       
    }



};


tris.iniziaIlgioco();



/*

ho nove caselle vuote
appena clicco su una delle caselle compare la X(inizia la X)
se ci riclicco a x scompare.

se si cambia casella compare la O se si riclicca scompare.

*/





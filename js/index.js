let arrayDicelle = [];


let tris = {

    creaCella: function () {
        let box = {
            x: 0,
            y: 0,
            content: ""
        }
        return box;
    },

    generaCelle: function (sizeX, sizeY) {
        for (let x = 0; x < sizeX; x++) {
            for (let y = 0; y < sizeY; y++) {
                let cella = this.creaCella();
                cella.x = x;
                cella.y = y;
                arrayDicelle.push(cella);
            }
        }
    },

    selezionaCasella: function (x, y) {
        arrayDicelle.forEach(box => {
            if (box.x == x && box.y == y){
                return box;
            }
            
        });

    },


    insericiLaX: function () {

    },


    insericiLaO: function () {

    },



    inizioGioco: function () {

    }

}

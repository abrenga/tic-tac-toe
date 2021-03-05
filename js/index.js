let arrayDicelle = [];


/*let tris = {

    creaCella: function () {
        let box = {
            x: 0,
            y: 0,
            content: ""
        }
        return box;
    },


    per generare la griglia essendo questa fatta di 2 misure ovvero una lunghezza x e una lunghezza y
     io assegnerò alla funzione due parametri che fungono da lunghezza definitiva della griglia(le lunghezze sono due).
     arbitrariamente assegnamo sizeX e sizeY.

     dato che le lunghezze sono due e non una per incrociare le coordinate bisogna fare due for uno dentro l'altro, cosi nel primo for andiamo a scorrerte tutta la lunghezza x e per ogni elemento della lunghezza x corrispondera ogni(tutti) elemento y.
     Ogni giro del for avrà un parametro x e un parametro y quando ha finito per il primo parametro x tutti i parametri y ripartira con il secondo parametro X.

Bene! Ora che li abbiamo scorsi dobbiamo puntarli ovvero assegnamo ai parametri box.X e box.y esattamente la x(che sarà ogni x che scorre assume su ogni for) e la y(uguale corrispondente).
Abbiamo cosi ogni box con le sue coordinate esatte. pushamo poi tutto nell'arrey (quindi l'intera cella).

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


    Ora arrivati a questo punto abbiamo ogni box con le coordiante esatte. ogniuno con le sue.
    Dobbiamo rendere posibile la selezione come?
    tieni presente ora che ogni box tu l'hai messo in un'array, quindi possiamo scorrerlo tranquillamente per ogni elemento dell'arrey
    e per ciascuno di questi mi chiedo se box.x e box.y sono uguali alla coordinata che sto selezionando in quel moemnto(perchè ricordati che hai assegnato in automatico a tutti i box delle coordinate specifiche)
    se si ritornami esattamente quel box che ho cliccato e solo quello.



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

}*/

let arrayCelle = [];

let toccaX = true;


let tris = {

    creaCella: function () {
        let box = {
            X: "0",
            Y: "0",
            content: " "

        },
        return box;

    },

    creaGriglia: function (sizeX, sizeY) {
        for (let x = 0; x <= sizeX; x++) {
            for (let y = 0; y <= sizeY; y++) {

                let cella = this.creaCella();
                box.X = x;
                box.Y = y;
                arrayCelle.push(cella);
            }
        }

    },


    selezionaCella: function (x, y) {
        arrayCelle.forEach(box => {
            if (box.X == x && box.Y == y) {

                return box

            }

        })

    },


    inserisciX: function (cella) {

        if (cella.content == "" && toccaX == true) {

            cella.content = "X";
        }
        toccaX = false;
    },


    inserisciY: function (cella) {
        

        if (cella.content == "" && toccaX !== true) {

            cella.content = "Y";
        }

        toccaX = true;

    },







}

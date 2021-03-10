


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



    selezionaCasella: function (x, y, arrayCelle) {
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

}----------------------------------------------------------------------------------------------------------


let tris = {

    arrayCelle: [],

    toccaX: true,


    creaCella: function (x, y) {
        let box = {
            X: x,
            Y: y,
            content: "",
            cellaHtml: document.getElementById('box-' + x + '-' + y)
        }
        this.bindClickEvent(box);
        return box;


    },

    creaGriglia: function (sizeX, sizeY) {
        for (let x = 0; x < sizeX; x++) {
            for (let y = 0; y < sizeY; y++) {

                let cella = this.creaCella(x, y);
                this.arrayCelle.push(cella);
            }
        }

    },


    selezionaCella: function (x, y, arrayCelle) {
        let myBox = null;
        arrayCelle.forEach(box => {
            if (box.X == parseInt(x) && box.Y == parseInt(y)) {


                myBox = box;

            }


        });
         return myBox;

    },


    inserisciX: function (cella, self) {

        if (cella.content == "" && self.toccaX == true) {

            cella.content = "X";
            cella.cellaHtml.innerHTML = "X";
            self.toccaX = false;

        }

    },


    inserisciO: function (cella, self) {


        if (cella.content == "" && self.toccaX == false) {

            cella.content = "O";
            cella.cellaHtml.innerHTML = "O";
            self.toccaX = true;
        }



    },

    onClick: function (cellaHtml, self) {

        let cellaId = cellaHtml.id.replace('box-', '');
        let coords = cellaId.split("-");
        let x = coords[0];
        let y = coords[1];

        let cella = self.selezionaCella(x, y, self.arrayCelle);
        self.inserisciX(cella, self);
        self.inserisciO(cella, self);


    },

    bindClickEvent: function (cella) {
        const self = this;
        cella.cellaHtml.addEventListener("click", (e) => {
            self.onClick(e.target, self);
        });

    }






}



*/




let tris = {

    sizeX: 0,

    sizeY: 0,

    arrayCelle: [],

    toccaAllaX: true,

    creaCella: function (x, y) {
        let box = {
            X: x,
            Y: y,
            content: "",
            cellaHtml: document.getElementById("box-" + x + "-" + y)
        }
        this.initTris(box);

        return box;

    },

    creaGriglia: function (sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        for (let x = 0; x < sizeX; x++) {
            for (let y = 0; y < sizeY; y++) {
                let cella = this.creaCella(x, y);
                cella.x = x;
                cella.y = y;
                this.arrayCelle.push(cella);


            }
        }

    },

    inserisciX: function (cella, self) {

        if (cella.content == "" && self.toccaAllaX == true) {
            cella.content = "X";
            cella.cellaHtml.innerHTML = "x";
            self.toccaAllaX = false;

        }


    },

    inserisciO: function (cella, self) {
        if (cella.content == "" && self.toccaAllaX == false) {
            cella.content = "O";
            cella.cellaHtml.innerHTML = "O";
            self.toccaAllaX = true;

        }

    },

    selezionaCella: function (x, y, arrayCelle) {
        let myBox = null;
        arrayCelle.forEach(box => {
            if (box.X == parseInt(x) && box.Y == parseInt(y)) {
                myBox = box;
            }

        });
        return myBox;
    },

    onClick: function (cellaHtml, self) {
        let cellaId = cellaHtml.id.replace('box-', '');
        let coords = cellaId.split("-");
        let x = coords[0];
        let y = coords[1];

        let cella = self.selezionaCella(x, y, self.arrayCelle)
        this.inserisciX(cella, self);
        this.inserisciO(cella, self);
        console.log(cella)

    },

    initTris: function (cella) {

        let self = this;

        cella.cellaHtml.addEventListener("click", (e) => {

            self.onClick(e.target, self);
            self.vincitaVerticale(self, self.sizeX, self.sizeY);
            self.vincitaOrizontale(self, self.sizeY, self.sizeX);
        })

    },
    vincitaVerticale: function (self, sizeX, sizeY) {
        for (let x = 0; x < sizeX; x++) {
            let primaCellaNellaColonna = self.selezionaCella(x, 0, self.arrayCelle);

            for (let y = 0; y < sizeY; y++) {
                let cella = self.selezionaCella(x, y, self.arrayCelle);
                if (cella.content == "") {
                    break;
                }

                if (primaCellaNellaColonna.content !== cella.content) {
                    break;
                }

                if (y == sizeY - 1) {
                    alert("Ha vinto la " + cella.content);
                }
            }
        }

    },

    vincitaOrizontale: function (self, sizeY, sizeY) {
        let primaCellaNellaRiga = self.selezionaCella(0, y, self.arrayCelle);
        for (y = 0; y < sizeY; y++) {
            for (x = 0; x < this.sizeY; x++) {
                let cella = self.selezionaCella(x, y, self.arrayCelle);
                if (cella.content == "") {
                    break;
                }

                if (primaCellaNellaRiga.content !== cella.content) {
                    break;
                }

                if (x == sizeX - 1) {
                    alert("Ha vinto la " + cella.content);
                }

            }

        }

    }











}




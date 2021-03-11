
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


    },

    initTris: function (cella) {

        let self = this;

        cella.cellaHtml.addEventListener("click", (e) => {

            self.onClick(e.target, self);
            self.vincitaVerticale(self, self.sizeX, self.sizeY);
            self.vincitaOrizzontale(self, self.sizeY, self.sizeX);
            self.vincitaObliquaUno(self, self.sizeX);
            self.vincitaObliquaDue(self, self.sizeX);
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

    vincitaOrizzontale: function (self, sizeX, sizeY) {

        for (let y = 0; y < sizeY; y++) {
            let primaCellaNellaRiga = self.selezionaCella(0, y, self.arrayCelle);
            for (let x = 0; x < sizeX; x++) {
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

    },


    vincitaObliquaUno: function (self, sizeX) {

        let primaCellaNellaPrimaColonna = self.selezionaCella(0, 0, self.arrayCelle);

        for (x = 0; x < sizeX; x++) {

            let cella = self.selezionaCella(x, x, self.arrayCelle);
            if (cella.content == "") {
                break;
            }
            if (primaCellaNellaPrimaColonna.content !== cella.content) {
                break;
            }

            if (x == sizeX - 1) {

                alert("Ha vinto la " + cella.content);
            }

        }
    },

    vincitaObliquaDue: function (self, sizeX) {

        let UltimaCellaNellaPrimaColonna = self.selezionaCella(0, sizeX - 1, self.arrayCelle);

        for (let x = 0; x < sizeX; x++) {
            let y = sizeX - 1 - x;
            let cella = self.selezionaCella(x, y, self.arrayCelle);

            if (cella.content == "") {
                break;
            }

            if (UltimaCellaNellaPrimaColonna.content !== cella.content) {
                break;
            }

            if (x == sizeX - 1) {

                alert("Ha vinto la " + cella.content);
            }
        }



    }


};



















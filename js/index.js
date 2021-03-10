
/*let tris = {

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

    creaGriglia: function (sizeX, sizeY, sizeZ) {
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


}*/



/*Beh eccoci qua! come ho detto precedentemente, la cosa in cui maggiormente faccio difficoltà è il ragionamento logico e matematico che c'è dietro alla programmazione, e ovviamente per riuscire ad abbattere questo muro, non mi resta che esercitarmi, esercitarmi, esercitarmi...

Ecco allora che ho decisto di programmare il famoso giochino tic-tac-toe anche detto più comunemente il tris.

chi non ha mai giocato a questo gioco?
Ricordo che in classe era uno dei giochi più in voga da fare con il compagno di banco insieme all'impiccato e a battaglia navale.
Ma come passare da:" traccio due righe e due line e iniziamo!!"  a :" ok! inizializza un'oggetto e sviluppaci dentro tutto il ragionamento che rende possibile il gioco??"

I consigli che mi hanno dato sono : 1.Pensa al tris, come  è fatto? cosa deve avere per funzionare?
 ora scrivi il progetto, anche su un foglio, disegnalo se è necessario,questo ti sarà utile per tenere il focus su quello che devi fare, devi poi analizzare ogni elemento singolarmente.

2. il ragionamento crealo in javascript, senza pensare al'HTML e al css questi andranno inseriti successivamente.

E cosi ho fatto.

Tic-Tac-Toe.

caratteristiche del gioco:

    .il gioco è formato da un quadrato con 3 celle in orizzontale e 3 in vericale.

    .Abbiamo 2 giocatori: giocatore1: "X" e giocatore2: "O", scelgo convenzionalemente che tra i due inizia prima il giocatore 1.

chi vince?

    Vince chi tra i due giocatori disegna una successione di simboli uguali in orizzontale in veritcle o in obliquo.

N.B ogni giocatore ha la possibiltà di cliccare su una casella una sola volta e solo se questa è libera.


come iniziare:

. il quadrato è formato da singole celle, dichiariamo quindi una funzione che le "crea", passando come parametri delle coordinate, che    serviranno ad identificare poi l'esatta posizione della cella all'interno del quadrato. 

. Dichiariamo in seguito un'altra funzione che si occuperà di raggruppare le celle per formare una griglia, inserendo come parametri le  grandezze dei due lati (parametri necessari per stabilire quante celle andranno a comporre la griglia stessa).

N.B una griglia non è altro che un'array di celle, è bene dunque posizionare ogni singola cella all'interno di un'array assegnando a questa una posizione o coordinata(x,y). 

Per poter permettere alle celle di posizionarsi correttamente bisonerà tener conto di ben due grandezze, va formato quindi un doppio for.
Il  primo che  andrà da x = 0 per tutta la lunghezza orizzontale e un'altro for all'interno del primo che, per ogni x avrà ogni y per tutta la lunghezza verticale.

Abbiamo Ora il nostro Array di celle.

Per procedere con il progetto sarà necessario a questo punto selezionare la singola cella interessata.
Per ogni elemento dell'Array dunque, specifichiamo di prendere esattamente le coordinate che ci interessano e ritorniamo la cella stessa.

all'interno di questa poi andrà invocata o la funzione che si occupa di inserire la X o la O a seconda del turno in cui ci troviamo.


Inserisci la X inserisci la O.


Vorrei soffermarmi su queste due funzioni che 





















"*/
var prompt = require("prompt");
let numMystere = Math.round(Math.random() * 100);
//console.log(numMystere);
let nbCoup = 7;
function play() {
    if (nbCoup >= 0) {
        prompt.get(['numUser'], function (err, res) {
            let numUser2 = Number(res.numUser)
            if (numMystere === numUser2) {
                console.log("Bravo  !");
            } else if (numMystere < numUser2) {
                console.log("Non, c'est plus petit !");
                console.log("Nombre de coups restants: ", nbCoup--);
                play();
            }
            else if (numMystere > numUser2) {
                console.log("Non, c'est plus grand !");
                console.log("Nombre de coups restants: ", nbCoup--);
                play();
            }
            else if (isNaN(numUser2)) {
                console.log("Erreur : ceci n'est pas un nombre");
                console.log("Nombre de coups restants: ", nbCoup--);
                play();
            }
        });
    }
};
play();


let nombre1 = document.querySelector("#nombre1");
let nombre2 = document.querySelector("#nombre2");
let operateur = document.querySelector("#operateur");
let bouton = document.querySelector("#calculer");
let resultat = document.querySelector("#resultat");


bouton.addEventListener("click", function() {

    let a = nombre1.valueAsNumber;
    let b = nombre2.valueAsNumber;
    let choix = operateur.value;

    
    if (nombre1.value === "" || nombre2.value === "" ||
        Number.isNaN(a) || Number.isNaN(b)) {

        resultat.textContent = "Vous devez saisir un nombre";
        resultat.style.color = "red";

    } else {

        let calcul;
        let message;

        
        switch (choix) {

            case "+":
                calcul = a + b;
                message = "Le résultat de l'addition est : ";
                break;

            case "-":
                calcul = a - b;
                message = "Le résultat de la soustraction est : ";
                break;

            case "*":
                calcul = a * b;
                message = "Le résultat de la multiplication est : ";
                break;

            case "/":
                if (b === 0) {
                    resultat.textContent = "Impossible de diviser par zéro.";
                    resultat.style.color = "red";
                    return;
                }

                calcul = a / b;
                message = "Le résultat de la division est : ";
                break;
        }

        resultat.textContent = message + calcul;
        resultat.style.color = "black";
    }

});

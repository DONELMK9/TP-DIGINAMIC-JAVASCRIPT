
function fonctionConstante() {
    return 33;
}


console.log("Exercice 1 :", fonctionConstante());



 
function bonjourUntel(prenom) {
    return "Bonjour " + prenom;
}


console.log("Exercice 2 :", bonjourUntel("Marcel"));



function fonctionCalcul(a, b) {
    return a * b + a + b;
}


console.log("Exercice 3 :", fonctionCalcul(5, 3));


console.log("Test avec des chaînes :", fonctionCalcul("2", "3"));


function fonctionMoyenne(tableau) {

    
    if (!Array.isArray(tableau)) {
        return "Erreur : le paramètre doit être un tableau.";
    }

    
    if (tableau.length === 0) {
        return 0;
    }

    let somme = 0;

    
    for (let i = 0; i < tableau.length; i++) {

        
        if (typeof tableau[i] !== "number") {
            return "Erreur : un élément du tableau n'est pas un nombre.";
        }

        somme = somme + tableau[i];
    }

    return somme / tableau.length;
}


console.log("Exercice 4 - Tableau :", fonctionMoyenne([10, 15, 20, 25]));
console.log("Exercice 4 - Tableau vide :", fonctionMoyenne([]));
console.log("Exercice 4 - Chaîne :", fonctionMoyenne("Bonjour"));



function fonctionLitterale(a, b) {

    return {
        somme: a + b,
        soustraction: a - b,
        multiplication: a * b,
        division: a / b
    };
}


console.log("Exercice 5 :", fonctionLitterale(10, 5));

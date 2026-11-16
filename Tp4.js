

let google = {
    nom: "Google",

    siegeSocial: "Googleplex, Mountain View, California, United States",

    fondateurs: [
        {
            nom: "Larry Page",
            dateNaissance: "26/03/1973",
            lieuNaissance: "East Lansing, Michigan"
        },
        {
            nom: "Sergey Brin",
            dateNaissance: "21/08/1973",
            lieuNaissance: "Moscou, Union Sovietique"
        }
    ],

    chiffresAffaires: [
        { annee: 2008, montant: 16.49 },
        { annee: 2012, montant: 37.97 },
        { annee: 2016, montant: 89.46 },
        { annee: 2018, montant: 136.2 }
    ]
};



console.log("Nom de la societe :", google.nom);
console.log("Siege social :", google.siegeSocial);



console.log("\n--- FONDATEURS DE GOOGLE ---");

for (let i = 0; i < google.fondateurs.length; i++) {

    console.log("Nom :", google.fondateurs[i].nom);
    console.log("Date de naissance :", google.fondateurs[i].dateNaissance);
    console.log("Lieu de naissance :", google.fondateurs[i].lieuNaissance);
    console.log("-------------------------");

}



console.log("\n--- CHIFFRES D'AFFAIRES ---");

for (let i = 0; i < google.chiffresAffaires.length; i++) {

    console.log(
        google.chiffresAffaires[i].annee + " : " +
        google.chiffresAffaires[i].montant + " milliards de dollars"
    );

}

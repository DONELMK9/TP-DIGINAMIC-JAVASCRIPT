
const url = "https://digicode.cleverapps.io/json/pays/pollution";

let champMin = document.querySelector("#min");
let champMax = document.querySelector("#max");
let bouton = document.querySelector("#valider");

let titre = document.querySelector("#titre");
let annee = document.querySelector("#annee");
let listePays = document.querySelector("#listePays");
let message = document.querySelector("#message");

let donneesPollution = null;

fetch(url)
    .then(response => response.json())
    .then(data => {

        donneesPollution = data;

        titre.textContent = data.polluant + " en " + data.unite;
        annee.textContent = "Année : " + data.annee;

        afficherPays(0, Number.MAX_VALUE);

    })
    .catch(error => {
        message.textContent = "Erreur lors du chargement des données.";
        console.error(error);
    });

function afficherPays(min, max) {

    listePays.innerHTML = "";

    let paysFiltres = donneesPollution.pays.filter(function(pays) {
        return pays.valeur >= min && pays.valeur <= max;
    });

    paysFiltres.forEach(function(pays) {

        let ligne = document.createElement("tr");

        ligne.innerHTML = `
            <td>${pays.nom}</td>
            <td>${pays.valeur}</td>
            <td>${pays.pourcentage}%</td>
            <td>${pays.code}</td>
        `;

        listePays.appendChild(ligne);

    });

    message.textContent = paysFiltres.length + " pays affichés.";
}


bouton.addEventListener("click", function() {

    let min = champMin.value === ""
        ? 0
        : Number(champMin.value);

    let max = champMax.value === ""
        ? Number.MAX_VALUE
        : Number(champMax.value);

    if (min < 0 || max < 0) {
        alert("Vous devez saisir des valeurs positives.");
        return;
    }

    if (min > max) {
        alert("Le MIN ne peut pas être supérieur au MAX.");
        return;
    }

    
    afficherPays(min, max);

});

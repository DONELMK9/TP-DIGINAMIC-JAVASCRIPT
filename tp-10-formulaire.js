
const idCreateur = "DONEL";

const url = "https://digicode.cleverapps.io/utilisateurs/";

let listeUtilisateurs = document.querySelector("#listeUtilisateurs");
let message = document.querySelector("#message");
let boutonAjouter = document.querySelector("#ajouter");

function chargerUtilisateurs() {

    fetch(url + idCreateur)

        .then(response => {

            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des utilisateurs");
            }

            return response.json();
        })

        .then(utilisateurs => {

            
            listeUtilisateurs.innerHTML = "";

            utilisateurs.forEach(function(utilisateur) {

                let ligne = document.createElement("tr");

                ligne.innerHTML = `
                    <td>${utilisateur.id}</td>
                    <td>${utilisateur.nom}</td>
                    <td>${utilisateur.prenom}</td>
                    <td>${utilisateur.dateNaissance}</td>
                    <td>${utilisateur.lieuNaissance}</td>
                    <td>
                        ${utilisateur.numeroRue || ""}
                        ${utilisateur.libelleRue || ""},
                        ${utilisateur.codePostal || ""}
                        ${utilisateur.ville || ""}
                    </td>
                    <td>
                        <button onclick="supprimerUtilisateur(${utilisateur.id})">
                            
                        </button>
                    </td>
                `;

                listeUtilisateurs.appendChild(ligne);

            });

            message.textContent = utilisateurs.length + " utilisateur(s) trouvé(s).";
        })

        .catch(error => {

            message.textContent = error.message;
            console.error(error);

        });
}


chargerUtilisateurs();

let formulaire = document.querySelector("#formulaireUtilisateur");


formulaire.addEventListener("submit", function(event) {

    
    event.preventDefault();

    let utilisateur = {

        id: null,
        idCreateur: idCreateur,
        dateMaj: null,

        nom: document.querySelector("#nom").value,
        prenom: document.querySelector("#prenom").value,
        genre: document.querySelector("#genre").value,
        dateNaissance: document.querySelector("#dateNaissance").value,
        lieuNaissance: document.querySelector("#lieuNaissance").value,
        departementNaissance: document.querySelector("#departementNaissance").value,

        numeroRue: document.querySelector("#numeroRue").value,
        libelleRue: document.querySelector("#libelleRue").value,
        codePostal: document.querySelector("#codePostal").value,
        ville: document.querySelector("#ville").value
    };

    fetch(url, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(utilisateur)

    })

    .then(response => {

        return response.json().then(data => {

            if (!response.ok) {
                throw new Error(data.message || "Erreur lors de la création.");
            }

            return data;
        });

    })

    .then(data => {

        alert("Utilisateur créé avec succès !");

        formulaire.reset();

        chargerUtilisateurs();

    })

    .catch(error => {

        message.textContent = error.message;
        message.style.color = "red";

        console.error(error);

    });

});

function supprimerUtilisateur(id) {

    let confirmation = confirm(
        "Voulez-vous vraiment supprimer cet utilisateur ?"
    );

    if (!confirmation) {
        return;
    }

    fetch(url + idCreateur + "/" + id, {

        method: "DELETE"

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Erreur lors de la suppression de l'utilisateur.");
        }

        message.textContent = "Utilisateur supprimé avec succès.";
        message.style.color = "green";

        chargerUtilisateurs();

    })

    .catch(error => {

        message.textContent = error.message;
        message.style.color = "red";

        console.error(error);

    });

}

// Sélection des éléments
let inputNom = document.querySelector("#nom");
let inputPrenom = document.querySelector("#prenom");
let inputAnnee = document.querySelector("#annee");
let inputAge = document.querySelector("#age");
let form = document.querySelector("form");

// Création du bouton Valider
let bouton = document.createElement("button");
bouton.textContent = "Valider";
form.appendChild(bouton);

//  Calcul automatique de l'âge à partir de l'année
inputAnnee.addEventListener("change", function CalculAge(anneeNaissance) {
    let annee = parseInt(inputAnnee.value);
    let anneeActuelle = new Date().getFullYear();

    if (!isNaN(annee) && annee <= anneeActuelle) {
        inputAge.value = anneeActuelle - annee;
    } else {
        inputAge.value = "";
    }
});

// Vérification mineur/majeur au clic du bouton
bouton.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre

    let nom = inputNom.value.trim();
    let prenom = inputPrenom.value.trim();
    let age = parseInt(inputAge.value);

    if (!nom || !prenom) {
        alert("Veuillez entrer votre nom et prénom !");
        return;
    }

    if (isNaN(age) || age < 0) {
        alert("Veuillez entrer un âge valide !");
        return;
    }

    if (age < 18) {
        alert(`${nom} ${prenom}, vous êtes mineur`);
    } else {
        alert(`${nom} ${prenom}, vous êtes majeur`);
    }
});
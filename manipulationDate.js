console.log("Bienvenue sur mon orloge")


// Fonction pour mettre à jour les dates et heures
function updateDateHeure() {
  const maDate = new Date();
  const anneeEnCours = maDate.getFullYear();
  const moisEnCours = maDate.getMonth() +1

  // Heures dynamiques
  const heureParis = new Date().toLocaleTimeString("fr-FR", {
    timeZone: "Europe/Paris",
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric"
  });
  const heureTokyo = new Date().toLocaleTimeString("ja-JP", {
    timeZone: "Asia/Tokyo"
  });

  // Mise à jour des éléments
  document.querySelector("#annee").textContent = anneeEnCours;
  document.querySelector("#mois").textContent = moisEnCours;
  document.querySelector("#dateComplet").textContent = maDate.toLocaleString();
  document.querySelector("#heureParis").textContent = heureParis;
  document.querySelector("#heureTokyo").textContent = heureTokyo;
}

// Appel immédiat pour ne pas attendre 1 seconde
updateDateHeure();

// Met à jour toutes les secondes
setInterval(updateDateHeure, 1000);







 
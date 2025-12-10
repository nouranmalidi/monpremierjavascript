
console.log("Section je suis dans  la boucle");

let nombreTour = 0
/**
 * La boucle WHILE
 * while signifie "tant que"
 * Tant que la limite n'est pas atteinte, alors l'action s'exécute.
 * La boucle while va exécuter la même opération autant de fois que le limite n'est pas atteinte.
 * Et à chaque tour, la variable nombreTour augmente de 1 (+1)
 */
while (nombreTour < 7){
    console.log("Tour de la maison :", nombreTour);
    nombreTour = nombreTour + 1;

    console.log("Nombre de tours après le passage :", nombreTour);
}

// Boucle For 
for (let i = 0; i < 3; i++){
console.log("L\'indice est de : ", i);
}

// Application de la boucle For sur une liste d'élèves

let tableauEleve = ["Nouran", "Azilati","Chadia", "Mchagama", "Bonobo", "Oustad", "Fiji", "deGamin", "Rachid", "Lidya"];

console.log("Taille du tableau :",tableauEleve.length);

for(let i = 0; i < tableauEleve.length; i++){
console.log(tableauEleve[i]);
}

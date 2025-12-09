// Les conditions de JavaScript

let nombreFruit = 19;

// J'affiche l'alerte si le nombre de fruit est égal à 18
/**
 * Ma condition commence par le mot-clé if
 * La syntaxe à respecter est : 
 * if (ma condition) {
 * Action à exécuter
 * }
 */

if (nombreFruit == 18) { // Nous avons une comparaison à égalité stricte (==)
    alert("Vous avez atteint 18 fruits."); // fonction alert()

};

let noteEleve = 1;

if (noteEleve >= 10) {
    alert("Vous êtes admis avec une note de " + noteEleve);
};

// Alerte pour une recommandation de film selon l'age

let Age = 20;

if (Age >= 18) {
    alert("Vous pouvez regarder Rambo");
};

if (Age < 18) {
    alert("Vous pouvez regarder Le Roi Lion");
};

// La condition avec IF ELSE

let pointPermis = 11;
if(pointPermis == 12) {
    alert("Vous avez un bonus!");

}

else{
    alert("Vous avez des malus!");
};
console.log("ici je code les operateur en javaScript");

// Addition 

let prixUnitaire = 13;
let valeurAjoutee = 7;
let valeurReduction = 5;
let valeurDivision = 4;

let prixAdditionne1 = 3+7;

console.log("prixAdditionne1 : ", prixAdditionne1); // Sous forme de string j'affiche la variable

//Deuxième méthode d'additionner des nombres
let prixAdditionne2 = prixUnitaire + valeurAjoutee; // Calcule a l'aide de variable

console.log("prixAdditionne2 :",prixAdditionne2);

// Addition des chaines de caractères
 // Exemple "Fatima" + "Amina"; Résultat attendu est "Fatima Amina"
let eleve1 = "Fatima";
let eleve2 = "Amina";

console.log(eleve1+" "+eleve2); // Concaténation on ajoutant un espace entre guillemets

// Je concatène deux variables. Et, je les stocke dans une autre variable.
let eleveCombo = "Fatima" + " " + "Amina";
console.log("eleveCombo :" ,eleveCombo);

// La soustraction

let prixReduit = prixUnitaire - valeurReduction;
console.log("prixReduit :" , prixReduit);

// La multiplication 
// Le signe * permet d emultiplier des nombres.
let prixMultiple = prixUnitaire * valeurAjoutee;
console.log("prixMultiple :" , prixMultiple);

// Division /
// Le signe (/) permet de diviser des nombres
let prixDivise = prixUnitaire / valeurDivision;
console.log("prixDivise :" , prixDivise);


// Les opérateur de comparaison
// Nous allons comparer les valeurs stocker dans les variables.

console.log("Section de comparaison");

let villages = "Mamoudzou";
let communes = "MAMOUDZOU";

console.log(villages == communes); // Les deux égal compare la valeur (true ou false)
console.log(villages === communes); // Les trois égal compare la valeur et le type de donné

// Signes > signifie "supérieur à" ou "bien plus granf que"
let ages = 12;
let distanceParcourue = 5;

// Est-ce que l'age est supérieur à la distance parcourue ?
console.log(ages > distanceParcourue);

let sup = 2>1; // signe supérieur
let inf = 2<1; // signe inférieur

console.log(sup , inf);

// Est-ce que l'age est supérieur ou égal à la distance parcourue ?
console.log(ages >= distanceParcourue);

// Est-ce que l'age est inférieur ou égal à la distance parcourue ?
console.log(ages <= distanceParcourue);

// Est-ce que le village est différent de la commune?
console.log(villages != communes);

// Est-ce que la commune est strictement différent du village?
console.log(communes !== villages);
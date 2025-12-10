
/**
 * Les fonction en JavaScript
 */

console.log("Section fonction")

/**
 * La fonction additionner (+) doit additionner des membre et de retourner les résultats
 */
function additionner (chiffre1, chiffre2) {
    let resulatat = chiffre1 + chiffre2;
    return resulatat;

}

// J'utilise la fonction additionner (chiffre1, chiffre2) pour calculer la somme de deux nombre


let sommesAddition = additionner(15, 8);

console.log("sommes Addition :", sommesAddition);

/**
 * La fonction soustraire (-) doit soustraire des membre et de retourner les résultats
 */
function soustraire (chiffre1, chiffre2) {
 let resulatat = chiffre1 - chiffre2;
    return resulatat;
}

let resteSoustraction = soustraire(14, 7);
console.log("reste :", resteSoustraction);


/**
 * La fonction multiplication (*) doit multiplier deux paramètre : a et b , le résultat est stocké dans la variable résultat.
 * Pour finir, la fonction retourne renvoit le résultat.
 */
function multiplication (a, b) {
 let resulatat = a * b;
    return resulatat;
}

let produitMultiplication = multiplication(3, 3);
console.log("produitMultiplication :", produitMultiplication);
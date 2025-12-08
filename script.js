        // Ici, je rédige mon script JavaScript
        let nom = "BACAR SAID";  /*--variable de type string, chaines de caractères--*/  //Je déclare la variable nom qui est est 
        // relié à BACAR SAID-->
        let prenom = "Abdou";  //Je déclare la variable prenom qui  est relié a Nouran-->
        let prixNetflix= 19.99;   /*--varaible de type number, nombre*/
        let age = 23;
       
        let salutation = "Bonjour les gens";
        let greeting = 'Good morning';
        let andabu = 'Kwezi';
        let commune = "M'tsamboro";
      
        /*--L'antislash permet de de pas prendre en compte l'apostrophe*/
        let village = 'M\'tsamboro';
       
        let vrai = true; /*--variable de type boolean permettent de mettre des des information qui sont soit vraie ou fausse.*/
        let est_faux = false;
       
        /*Variable de type Array permet de faire un tableau pour stocker une liste d'information.*/
        let eleves = ["Nouran", "Azilati","Chadia", "Mchagama", "Bonobo", "Oustad"];
        
        /*Variable de type objets qui peut contenire plusieurs propriétés qui on leurs propre valeur.*/
        let client = {
            nom: "Bacar",
            village: "Choungui",
            age: 25,
            scores: [4,7,2]

        };
       
        // Je définis un objet qui représente un joueur de football professionnel
        let joueurProfessionnel = {
            nom: "Zinedine Yazid Zidane",
            nationalite: ["Française", "Algérienne"], // Définis sous forme de tableau
            dateNaissance: new Date(1972, 5, 23), /*Affichage d'une date de naissance complète*/
            taille: 1.85, // la propriété taille désigne la taille du joueur
            piedFort: "droit",
            poste: "Milieu offensif"

        };  // Ne pas oublier de fermer l'objet avec (;)

        let Zena = {
            nom: "Zéna M\'Déré",
            nationalite: "Française",
            dateNaissance: new Date("1920"), /*Affichage d'une date de naissance */
            deces: new Date(1999, 9, 27),
            membre: "Chatouilleuses",
            distinction: "Officier de la Légion d'honneur"

        };

        const prixTomate = 3.5;
        const nombreFraction = 1/3;
        const nombreNegatif = -509;
        const nombreDecimal = 3.4123;
        
        console.log("Bonjour,je m'appelle",prenom,nom,"j'ai",age,"j'ai payé l'abonnement à",prixNetflix);
        console.log("J'ai payé ce kilo de tomate à",prixTomate);
        console.log("Mon compte en banque affiche actuellement",nombreNegatif);
        console.log("En Asie les pizza sont découpé en",nombreFraction);
        
        console.log(salutation);
        console.log(greeting);
        console.log(andabu);
       
        console.log("j'habite à",commune);
        console.log("j'habite à",village);
        console.log("Je suis au RSMA",vrai);
        
        console.log(eleves); /*Affichage du tableau eleves*/
        console.log(eleves[0]); /*Affichage des membres du tableau eleves avec les indinces*/
        console.log(eleves[1]);
        console.log(eleves[2]); 
        
        console.log(client.nom); /*Affichage de l'objet client avec la valeur nom*/
        console.log(client.village);
        console.log(client.age);
        console.log(client.scores);
        console.log(client.scores[1]); /*Affichage du tableau scores avec l'indice 1 qui se trouve dans l'objet client */

        console.log(joueurProfessionnel); // J'affiche l'ensemble de l'objet joueurProfessionnel
        console.log(Zena); // J'affiche l'ensemble de l'objet Zena
        console.log(Zena.deces); // J'affiche la date de deces de Zena avec (.)
        console.log(joueurProfessionnel.nationalite[0]) // J'affiche la première nationalité de Zidane

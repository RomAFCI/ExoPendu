// DÉCLARATION

// Déclaration d'une liste de mot en tableau pour le jeu, liste faite avec IA.
let words = [
  "console",
  "pixel",
  "manette",
  "boss",
  "niveaux",
  "joueur",
  "multijoueur",
  "solo",
  "quetes",
  "loot",
  "inventaire",
  "respawn",
  "checkpoint",
  "fps",
  "rpg",
  "arcade",
  "score",
  "gameplay",
  "bonus",
  "combo",
  "mission",
  "aventure",
  "gamer",
  "joystick",
  "skin",
  "avatar",
  "ennemi",
  "allie",
  "equipe",
  "serveur",
  "recompense",
  "glitch",
  "succes",
  "trophee",
  "cinematique",
  "pause",
  "option",
  "attaque",
  "defense",
  "strategie",
  "simulation",
  "interface",
  "mode",
  "graphismes",
  "niveau",
  "bataille",
  "competence",
  "vie",
  "energie",
  "armure",
  "agro",
  "arena",
  "balise",
  "ban",
  "build",
  "camper",
  "clan",
  "combo",
  "cooldown",
  "coupcritique",
  "crafting",
  "dash",
  "debuff",
  "drop",
  "emote",
  "esport",
  "farm",
  "farming",
  "grind",
  "healer",
  "hitbox",
  "hud",
  "inventory",
  "jukes",
  "karma",
  "laning",
  "launcher",
  "macro",
  "mana",
  "matchmaking",
  "metagame",
  "mob",
  "mount",
  "nerf",
  "patch",
  "pet",
  "ping",
  "platformer",
  "poison",
  "powerup",
  "pvp",
  "questlog",
  "ragequit",
  "ranked",
  "rotation",
  "sandbox",
  "skillshot",
  "smurf",
  "spawn",
  "stealth",
  "tank",
];

// Déclaration letter = Créer pour l'identification des lettres.
let letter;
// Déclaration error = Créer pour l'identification des erreurs.
let error = 0;
// Déclaration chek = Créer pour vérifier des conditions dans ma fonction.
let check = false;

// Déclaration answer = récupérer la classe en HTML,
// pour afficher la réponse du mot lors du jeu.
let answer = document.querySelector(".answer");
// Déclaration input = récupérer la classe,
// pour pouvoir appliquer un événement sur celui-ci,
let input = document.querySelector(".input");
// Déclaration fault = récupérer la classe,
// pour changer l'affichage des erreur, faire un compteur de tour.
let fault = document.querySelector(".fault");
// Déclaration announcement = récupérer la classe,
// pour annoncer une victoire, une défaite ou un caractère incorrect.
let announcement = document.querySelector(".announcement");

// Déclaration wordsRandom = Créer pour trouver un nombre dans mon tableau aléatoirement
//(random pour le nombre aléatoire grâce au length et floor pour arrondir le nombre trouvé).
let wordsRandom = Math.floor(Math.random() * words.length);
// Déclaration wordsFound = Créer pour combiner
//le nombre et le mot afin de définir un mot aléatoire.
let wordsFound = words[wordsRandom];
console.log(wordsFound);
// Déclaration tabWordsTransform = Créer pour séparer chaque lettre du mot.
let tabWordsTransform = wordsFound.split("");
console.log(tabWordsTransform);
// Déclaration tabAnswer = Créer pour afficher en HTML les bonnes réponses (chaque lettre du mot),
// fill permet d'ajouter un "_" pour les lettres qui n'ont pas était trouvée,
// new Array est fait pour calculer la longueur du mot
let tabAnswer = new Array(tabWordsTransform.length).fill("_");

// FUNCTION
// La fonction créer ici permet d'identifier les bonnes ou les mauvaise réponses,
// elle sert également de condition de victoire, gagné ou perdu lorsque le jeu est fini,
// elle est composée d'une boucle et de if.
/**
 * @param {}
 * @returns
 */
function searchGoodLetters() {
  // La boucle sert a identifier chaque lettre du mot, lettre par lettre,
  // par rapport a la longueur du mot.
  for (let i = 0; i < tabWordsTransform.length; i++) {
    // Ici ma comparaison est : la lettre saisie est identique a une lettre du mot selon l'index.
    if (letter == tabWordsTransform[i]) {
      // Si c'est le cas alors,
      // la lettre est placé en HTML selon son index
      tabAnswer[i] = letter;
      console.log(tabAnswer);
      // Permet d'ajouter un espacement en HTML avec "join".
      answer.textContent = tabAnswer.join(", ");
      // Permet d'afficher un texte "Bonne réponse" en HTML.
      announcement.textContent = "Bonne reponse";
      // Le chek vérifie si la condition est remplie
      check = true;
    }
  }

  // Ici ma comparaison est : mon chek est identique à false
  // par rapport a la condition juste avant si le chek n'est pas true
  // on rentre alors dans cette condition (ce qui équivaut à une mauvaise réponse).
  if (check == false) {
    // Permet d'afficher un texte "Essaye encore" en HTML.
    announcement.textContent = "Essaye encore";
    // On incrémente l'erreur de +1 à chaque erreur
    error++;
    // Permet d'afficher les erreur en HTML de 0 à 12.
    fault.textContent = `Erreurs : ` + error + `/12`;
  }

  // Condition de victoire

  // Ici on n'utilise toString pour comparer des chaînes de caractères
  // car on peux pas comparer des tableau. Donc si mom mot à deviner
  // est identique au mot trouvé alors.
  if (tabWordsTransform.toString() == tabAnswer.toString()) {
    // Affiche un message "Gagné" en HTML
    announcement.textContent = "Gagné";
    // Désactive la saisie dans l'input pour bloquer le jeu.
    input.disabled = true;
  }

  // Ici ma condition est : si mon nombre d'erreur est supérieur ou égale à 12 alors.
  if (error >= 12) {
    // Affiche un message "Perdu" en HTML
    announcement.textContent = "Perdu";
    // Désactive la saisie dans l'input pour bloquer le jeu.
    input.disabled = true;
  }

  // Le chek repasse en false pour pouvoir relancer la fonction
  check = false;
}

// EVENT
// L'écouteur d'événement réagit lorsqu'une touche est pressée dans l'input.
input.addEventListener("keypress", (event) => {
  // event.key cible l'événement sur la pression du clavier.
  // letter = permet d'affecter mon événement à ma lettre.
  letter = event.key;
  // permet de réinitialiser la valeur de l'input.
  input.value = "";
  // Le "match" oblige l'utilisateur à utiliser les caractères de "a" à "z"
  // en minuscule et en majuscule.
  if (!letter.match(/^[a-zA-Z]$/)) {
    announcement.textContent = "ecrit une lettre entre a et z";
    return;
  }
  // Ici j'appelle ma fonction qui gére plusieurs choses dans le jeu,
  // (voir commentaires de la fonction).
  searchGoodLetters();
});

// Notes perso pendant la création du projet.

// 📓 NOTES:

// .fill
// La méthode fill() remplit tous les éléments d'un tableau entre deux index avec
// une valeur statique. La valeur de l'index de fin n'est pas incluse.
// Cette méthode renvoie le tableau modifié.

// .join(", ") La concaténation utilise la virgule ou une autre chaîne,
//  fournie en argument, comme séparateur. - permet d'ajouter un espace et une virgule
//  au propositions de lettre.

// toString
// La méthode toString() renvoie une chaîne de caractères représentant l'objet.

// Verifier la longueur du mot en tableau peu importe sa taille avec lenght
// console.log(answer[2]);
// console.log(answer.length);

// ⚠️ A REVOIR ⚠️
// Spread operator -> copie d'un tableau sans modif de l'original
// JSON.stringify() -> comparaison de tableau avec if
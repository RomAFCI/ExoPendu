
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
// // Déclaration chek = Créer pour vérifier des conditions dans ma fonction.
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

function searchGoodLetters() {
  for (let i = 0; i < tabWordsTransform.length; i++) {
    if (letter == tabWordsTransform[i]) {
      tabAnswer[i] = letter;
      console.log(tabAnswer);
      answer.textContent = tabAnswer.toString("");
      announcement.textContent = "Bonne reponse";
      check = true;
    }
  }
  if (check == false) {
    announcement.textContent = "Essaye encore";
    error++;
    fault.textContent = `Erreurs : ` + error + `/12`;
  }

  if (tabWordsTransform.toString() == tabAnswer.toString()) {
    console.log("Gagné");
    announcement.textContent = "Gagné";
    input.disabled = true;
  }

  if (error >= 12) {
    announcement.textContent = "Perdu";
    input.disabled = true;
  }

  check = false;
}

// EVENT
// L'écouteur d'événement réagit lorsqu'une touche est pressée dans l'input.
input.addEventListener("keypress", (event) => {
  letter = event.key;
  console.log(input.value);

  input.value = "";

  console.log(letter);

  // Le "match" oblige l'utilisateur à utiliser les caractères de "a" à "z" en minuscule et en majuscule 
  if (!letter.match(/^[a-zA-Z]$/)) {
    announcement.textContent = "ecrit une lettre entre a et z";

    return;
  }

  searchGoodLetters();
});

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

// 💡❔ Spread operator ❔💡

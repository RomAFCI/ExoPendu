/**
 * @param {*} text
 * @returns {}
 */

// DÉCLARATION

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

let letter;
let error = 0;
let check = false;

let answer = document.querySelector(".answer");
let input = document.querySelector(".input");
let fault = document.querySelector(".fault");
let announcement = document.querySelector(".announcement");

let wordsRandom = Math.floor(Math.random() * words.length);
let wordsFound = words[wordsRandom];
console.log(wordsFound);
let tabWordsTransform = wordsFound.split("");
console.log(tabWordsTransform);
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

input.addEventListener("keypress", (event) => {
  letter = event.key;
  console.log(input.value);

  input.value = "";

  console.log(letter);

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

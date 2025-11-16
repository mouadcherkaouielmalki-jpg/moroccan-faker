const { randomInt, randomElement } = require("../utils/random");

/**
 * Génère un numéro de CIN marocain valide
 * @returns {string} CIN (format: AB123456 ou K123456)
 */
function generateCIN() {
  // Les lettres possibles pour le CIN
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // Ancien format : 1 ou 2 lettres + 6 chiffres
  const useDoubleLetters = Math.random() > 0.5;

  let cin = "";

  if (useDoubleLetters) {
    cin += randomElement(letters) + randomElement(letters);
  } else {
    cin += randomElement(letters);
  }

  // Ajoute 6 chiffres
  for (let i = 0; i < 6; i++) {
    cin += randomInt(0, 9);
  }

  return cin;
}

module.exports = {
  generateCIN,
};

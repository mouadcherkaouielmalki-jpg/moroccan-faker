const { randomInt, randomElement } = require("../utils/random");

/**
 * Génère un numéro de téléphone marocain valide
 * @returns {string} Numéro de téléphone (format: 06XXXXXXXX)
 */
function generatePhone() {
  // Préfixes mobiles marocains : 06, 07, 05
  const prefixes = ["06", "07", "05"];
  const prefix = randomElement(prefixes);

  // Génère 8 chiffres aléatoires
  let number = prefix;
  for (let i = 0; i < 8; i++) {
    number += randomInt(0, 9);
  }

  return number;
}

module.exports = {
  generatePhone,
};

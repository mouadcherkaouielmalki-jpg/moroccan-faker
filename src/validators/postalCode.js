const villes = require("../data/villes.json");

/**
 * Valide un code postal marocain
 * @param {string} code - Code postal à valider
 * @param {string} ville - Nom de la ville (optionnel)
 * @returns {boolean} true si valide, false sinon
 */
function validatePostalCode(code, ville = null) {
  // Vérifie que c'est une chaîne
  if (typeof code !== "string") {
    return false;
  }

  // Format général : 5 chiffres
  const postalRegex = /^\d{5}$/;

  if (!postalRegex.test(code)) {
    return false;
  }

  // Si une ville est spécifiée, vérifie que le code correspond
  if (ville) {
    const villeData = villes.find(
      (v) => v.nom.toLowerCase() === ville.toLowerCase()
    );

    if (!villeData) {
      return false;
    }

    return villeData.codesPostaux.includes(code);
  }

  // Sinon, vérifie juste que le code existe dans notre liste
  const allCodes = villes.flatMap((v) => v.codesPostaux);
  return allCodes.includes(code);
}

module.exports = {
  validatePostalCode,
};

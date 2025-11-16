/**
 * Valide un numéro de CIN marocain
 * @param {string} cin - CIN à valider
 * @returns {boolean} true si valide, false sinon
 */
function validateCIN(cin) {
  // Vérifie que c'est une chaîne
  if (typeof cin !== "string") {
    return false;
  }

  // Supprime les espaces
  const cleaned = cin.replace(/\s/g, "").toUpperCase();

  // Format 1 : 1 lettre + 6 chiffres (K123456)
  // Format 2 : 2 lettres + 6 chiffres (AB123456)
  const cinRegex1 = /^[A-Z]{1}\d{6}$/;
  const cinRegex2 = /^[A-Z]{2}\d{6}$/;

  return cinRegex1.test(cleaned) || cinRegex2.test(cleaned);
}

module.exports = {
  validateCIN,
};

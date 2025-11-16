/**
 * Valide un numéro de téléphone marocain
 * @param {string} phone - Numéro de téléphone à valider
 * @returns {boolean} true si valide, false sinon
 */
function validatePhone(phone) {
  // Vérifie que c'est une chaîne
  if (typeof phone !== "string") {
    return false;
  }

  // Supprime les espaces et tirets
  const cleaned = phone.replace(/[\s-]/g, "");

  // Format : 10 chiffres commençant par 06, 07 ou 05
  const phoneRegex = /^(06|07|05)\d{8}$/;

  return phoneRegex.test(cleaned);
}

module.exports = {
  validatePhone,
};

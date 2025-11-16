const { randomElement, randomInt } = require("../utils/random");
const villes = require("../data/villes.json");
const rues = require("../data/rues.json");
const quartiersData = require("../data/quartiers.json");

/**
 * Génère une adresse marocaine complète
 * @param {string} villeNom - Nom de la ville (optionnel)
 * @returns {Object} Adresse complète
 */
function generateAddress(villeNom = null) {
  // Sélectionne une ville
  let ville;
  if (villeNom) {
    ville = villes.find((v) => v.nom.toLowerCase() === villeNom.toLowerCase());
    if (!ville) {
      ville = randomElement(villes);
    }
  } else {
    ville = randomElement(villes);
  }

  // Trouve les quartiers de cette ville
  const villeQuartiers = quartiersData.find((q) => q.ville === ville.nom);
  const quartier = villeQuartiers
    ? randomElement(villeQuartiers.quartiers)
    : "Centre Ville";

  // Génère les autres éléments
  const numero = randomInt(1, 200);
  const rue = randomElement(rues);
  const codePostal = randomElement(ville.codesPostaux);

  return {
    numero,
    rue,
    quartier,
    ville: ville.nom,
    codePostal,
  };
}

module.exports = {
  generateAddress,
};

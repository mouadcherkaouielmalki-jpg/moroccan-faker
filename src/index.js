// Importation des generators
const { generatePhone } = require("./generators/phone");
const { generateCIN } = require("./generators/cin");
const { generateAddress } = require("./generators/address");
const { generatePerson, generatePersons } = require("./generators/person");

// Importation des validators
const { validatePhone } = require("./validators/phone");
const { validateCIN } = require("./validators/cin");
const { validatePostalCode } = require("./validators/postalCode");

// Importation des données brutes (si l'utilisateur veut y accéder)
const prenomsM = require("./data/prenoms-masculins.json");
const prenomsF = require("./data/prenoms-feminins.json");
const noms = require("./data/noms-famille.json");
const villes = require("./data/villes.json");
const rues = require("./data/rues.json");
const quartiers = require("./data/quartiers.json");

// Export de toutes les fonctions publiques
module.exports = {
  // Generators
  generatePhone,
  generateCIN,
  generateAddress,
  generatePerson,
  generatePersons,

  // Validators
  validatePhone,
  validateCIN,
  validatePostalCode,

  // Raw data (pour les utilisateurs avancés)
  data: {
    prenomsM,
    prenomsF,
    noms,
    villes,
    rues,
    quartiers,
  },
};

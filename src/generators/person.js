const { randomElement } = require("../utils/random");
const { randomDate, formatDate } = require("../utils/random");
const prenomsM = require("../data/prenoms-masculins.json");
const prenomsF = require("../data/prenoms-feminins.json");
const noms = require("../data/noms-famille.json");
const { generatePhone } = require("./phone");
const { generateCIN } = require("./cin");
const { generateAddress } = require("./address");

/**
 * Génère une personne marocaine complète
 * @param {Object} options - Options de génération
 * @param {string} options.genre - 'masculin' ou 'feminin'
 * @param {string} options.ville - Ville spécifique
 * @param {Object} options.age - {min, max} Age range
 * @returns {Object} Personne complète
 */
function generatePerson(options = {}) {
  // Détermine le genre
  const genre = options.genre || (Math.random() > 0.5 ? "masculin" : "feminin");

  // Sélectionne un prénom selon le genre
  const prenom =
    genre === "masculin" ? randomElement(prenomsM) : randomElement(prenomsF);

  // Sélectionne un nom de famille
  const nom = randomElement(noms);

  // Génère la date de naissance
  const ageMin = options.age?.min || 18;
  const ageMax = options.age?.max || 65;

  const today = new Date();
  const startDate = new Date(today.getFullYear() - ageMax, 0, 1);
  const endDate = new Date(today.getFullYear() - ageMin, 11, 31);
  const dateNaissance = formatDate(randomDate(startDate, endDate));

  // Génère les autres données
  const cin = generateCIN();
  const telephone = generatePhone();
  const adresse = generateAddress(options.ville);

  return {
    nom,
    prenom,
    genre,
    cin,
    telephone,
    dateNaissance,
    adresse,
  };
}

/**
 * Génère plusieurs personnes
 * @param {number} count - Nombre de personnes à générer
 * @param {Object} options - Options de génération
 * @returns {Array} Tableau de personnes
 */
function generatePersons(count, options = {}) {
  const persons = [];
  for (let i = 0; i < count; i++) {
    persons.push(generatePerson(options));
  }
  return persons;
}

module.exports = {
  generatePerson,
  generatePersons,
};

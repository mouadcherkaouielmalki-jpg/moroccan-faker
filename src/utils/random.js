/**
 * Retourne un élément aléatoire d'un tableau
 * @param {Array} array - Le tableau
 * @returns {*} Un élément aléatoire
 */
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Retourne un nombre aléatoire entre min et max (inclus)
 * @param {number} min - Valeur minimale
 * @param {number} max - Valeur maximale
 * @returns {number} Nombre aléatoire
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Retourne une date aléatoire entre deux dates
 * @param {Date} start - Date de début
 * @param {Date} end - Date de fin
 * @returns {Date} Date aléatoire
 */
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

/**
 * Formate une date en YYYY-MM-DD
 * @param {Date} date - La date à formater
 * @returns {string} Date formatée
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

module.exports = {
  randomElement,
  randomInt,
  randomDate,
  formatDate,
};

const moroccanFaker = require("../src/index");

console.log("🇲🇦 Moroccan Faker - Examples\n");

// 1. Générer une personne complète
console.log("1 : Génération d'une personne complète:");
const person = moroccanFaker.generatePerson();
console.log(person);
console.log("\n---\n");

// 2. Générer une personne féminine de Marrakech
console.log("2 : Génération d'une femme de Marrakech:");
const woman = moroccanFaker.generatePerson({
  genre: "feminin",
  ville: "Marrakech",
  age: { min: 25, max: 35 },
});
console.log(woman);
console.log("\n---\n");

// 3. Générer 5 personnes
console.log("3 : Génération de 5 personnes:");
const persons = moroccanFaker.generatePersons(5);
console.log(persons);
console.log("\n---\n");

// 4. Générer juste un téléphone
console.log("4 : Génération d'un téléphone:");
const phone = moroccanFaker.generatePhone();
console.log(phone);
console.log("\n---\n");

// 5. Générer juste un CIN
console.log("5 : Génération d'un CIN:");
const cin = moroccanFaker.generateCIN();
console.log(cin);
console.log("\n---\n");

// 6. Générer juste une adresse
console.log("6 : Génération d'une adresse à Casablanca:");
const address = moroccanFaker.generateAddress("Casablanca");
console.log(address);
console.log("\n---\n");

// 7. Valider un CIN
console.log("7 : Validation de CIN:");
console.log("AB123456 est valide?", moroccanFaker.validateCIN("AB123456"));
console.log("INVALID est valide?", moroccanFaker.validateCIN("INVALID"));
console.log("\n---\n");

// 8. Valider un téléphone
console.log("8 : Validation de téléphone:");
console.log(
  "0612345678 est valide?",
  moroccanFaker.validatePhone("0612345678")
);
console.log(
  "1234567890 est valide?",
  moroccanFaker.validatePhone("1234567890")
);
console.log("\n---\n");

// 9. Valider un code postal
console.log("9 : Validation de code postal:");
console.log(
  "20000 pour Casablanca est valide?",
  moroccanFaker.validatePostalCode("20000", "Casablanca")
);
console.log(
  "99999 pour Casablanca est valide?",
  moroccanFaker.validatePostalCode("99999", "Casablanca")
);

const {
  generatePhone,
  generateCIN,
  generateAddress,
  generatePerson,
} = require("../src/index");

describe("Generators", () => {
  describe("generatePhone", () => {
    it("devrait générer un téléphone valide", () => {
      const phone = generatePhone();
      expect(phone).toMatch(/^(06|07|05)\d{8}$/);
    });

    it("devrait générer des téléphones différents", () => {
      const phone1 = generatePhone();
      const phone2 = generatePhone();
      // Peu probable qu'ils soient identiques
      expect(phone1).not.toBe(phone2);
    });
  });

  describe("generateCIN", () => {
    it("devrait générer un CIN valide", () => {
      const cin = generateCIN();
      expect(cin).toMatch(/^[A-Z]{1,2}\d{6}$/);
    });

    it("devrait avoir 7 ou 8 caractères", () => {
      const cin = generateCIN();
      expect(cin.length).toBeGreaterThanOrEqual(7);
      expect(cin.length).toBeLessThanOrEqual(8);
    });
  });

  describe("generateAddress", () => {
    it("devrait générer une adresse complète", () => {
      const address = generateAddress();
      expect(address).toHaveProperty("numero");
      expect(address).toHaveProperty("rue");
      expect(address).toHaveProperty("quartier");
      expect(address).toHaveProperty("ville");
      expect(address).toHaveProperty("codePostal");
    });

    it("devrait générer une adresse pour une ville spécifique", () => {
      const address = generateAddress("Casablanca");
      expect(address.ville).toBe("Casablanca");
      expect(address.codePostal).toMatch(/^20\d{3}$/);
    });
  });

  describe("generatePerson", () => {
    it("devrait générer une personne complète", () => {
      const person = generatePerson();
      expect(person).toHaveProperty("nom");
      expect(person).toHaveProperty("prenom");
      expect(person).toHaveProperty("genre");
      expect(person).toHaveProperty("cin");
      expect(person).toHaveProperty("telephone");
      expect(person).toHaveProperty("dateNaissance");
      expect(person).toHaveProperty("adresse");
    });

    it("devrait respecter le genre spécifié", () => {
      const person = generatePerson({ genre: "feminin" });
      expect(person.genre).toBe("feminin");
    });

    it("devrait respecter la ville spécifiée", () => {
      const person = generatePerson({ ville: "Marrakech" });
      expect(person.adresse.ville).toBe("Marrakech");
    });
  });
});

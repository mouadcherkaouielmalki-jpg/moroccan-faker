const {
  validatePhone,
  validateCIN,
  validatePostalCode,
} = require("../src/index");

describe("Validators", () => {
  describe("validatePhone", () => {
    it("devrait valider un téléphone correct", () => {
      expect(validatePhone("0612345678")).toBe(true);
      expect(validatePhone("0723456789")).toBe(true);
      expect(validatePhone("0534567890")).toBe(true);
    });

    it("devrait rejeter un téléphone invalide", () => {
      expect(validatePhone("1234567890")).toBe(false);
      expect(validatePhone("06123")).toBe(false);
      expect(validatePhone("0812345678")).toBe(false);
      expect(validatePhone("invalid")).toBe(false);
    });

    it("devrait accepter les formats avec espaces", () => {
      expect(validatePhone("06 12 34 56 78")).toBe(true);
      expect(validatePhone("06-12-34-56-78")).toBe(true);
    });
  });

  describe("validateCIN", () => {
    it("devrait valider un CIN correct", () => {
      expect(validateCIN("AB123456")).toBe(true);
      expect(validateCIN("K123456")).toBe(true);
      expect(validateCIN("XY999999")).toBe(true);
    });

    it("devrait rejeter un CIN invalide", () => {
      expect(validateCIN("ABC123456")).toBe(false);
      expect(validateCIN("A12345")).toBe(false);
      expect(validateCIN("123456")).toBe(false);
      expect(validateCIN("INVALID")).toBe(false);
    });

    it("devrait être insensible à la casse", () => {
      expect(validateCIN("ab123456")).toBe(true);
      expect(validateCIN("k123456")).toBe(true);
    });
  });

  describe("validatePostalCode", () => {
    it("devrait valider un code postal correct", () => {
      expect(validatePostalCode("20000", "Casablanca")).toBe(true);
      expect(validatePostalCode("10000", "Rabat")).toBe(true);
    });

    it("devrait rejeter un code postal incorrect pour une ville", () => {
      expect(validatePostalCode("99999", "Casablanca")).toBe(false);
      expect(validatePostalCode("20000", "Marrakech")).toBe(false);
    });

    it("devrait valider le format sans ville", () => {
      expect(validatePostalCode("20000")).toBe(true);
      expect(validatePostalCode("12345")).toBe(false);
    });
  });
});

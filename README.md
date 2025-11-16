# 🇲🇦 Moroccan Faker

Generate realistic Moroccan fake data for testing applications.

[![npm version](https://img.shields.io/npm/v/moroccan-faker.svg)](https://www.npmjs.com/package/moroccan-faker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation
```bash
npm install moroccan-faker
```

## Quick Start
```javascript
const moroccanFaker = require('moroccan-faker');

// Generate a complete person
const person = moroccanFaker.generatePerson();
console.log(person);
// {
//   nom: "Bennani",
//   prenom: "Mehdi",
//   cin: "AB123456",
//   telephone: "0612345678",
//   dateNaissance: "1995-03-15",
//   adresse: {
//     numero: 45,
//     rue: "Avenue Hassan II",
//     quartier: "Maarif",
//     ville: "Casablanca",
//     codePostal: "20100"
//   }
// }

// Generate just an address
const address = moroccanFaker.generateAddress();

// Generate a phone number
const phone = moroccanFaker.generatePhone();

// Validate Moroccan CIN
const isValid = moroccanFaker.validateCIN("AB123456");
```

## API Reference

### Generators

#### `generatePerson(options)`
Generate a complete person with all details.

**Options:**
- `genre`: `'masculin'` or `'feminin'` (optional)
- `ville`: Force a specific city (optional)
- `age`: `{ min: number, max: number }` (optional)
```javascript
const person = moroccanFaker.generatePerson({
  genre: 'feminin',
  ville: 'Marrakech',
  age: { min: 25, max: 35 }
});
```

#### `generateAddress(ville)`
Generate a Moroccan address.
```javascript
const address = moroccanFaker.generateAddress('Rabat');
```

#### `generatePhone()`
Generate a valid Moroccan phone number.
```javascript
const phone = moroccanFaker.generatePhone();
// Returns: "0612345678"
```

#### `generateCIN()`
Generate a valid Moroccan CIN (Carte d'Identité Nationale).
```javascript
const cin = moroccanFaker.generateCIN();
// Returns: "AB123456"
```

### Validators

#### `validateCIN(cin)`
Validate a Moroccan CIN format.
```javascript
moroccanFaker.validateCIN("AB123456"); // true
moroccanFaker.validateCIN("INVALID"); // false
```

#### `validatePhone(phone)`
Validate a Moroccan phone number.
```javascript
moroccanFaker.validatePhone("0612345678"); // true
moroccanFaker.validatePhone("1234567890"); // false
```

#### `validatePostalCode(code, ville)`
Validate a postal code for a specific city.
```javascript
moroccanFaker.validatePostalCode("20000", "Casablanca"); // true
```

## Use Cases

### Testing
```javascript
describe('User Registration', () => {
  it('should register a user with valid Moroccan data', () => {
    const testUser = moroccanFaker.generatePerson();
    // Use testUser in your tests
  });
});
```

### Database Seeding
```javascript
const users = [];
for (let i = 0; i < 100; i++) {
  users.push(moroccanFaker.generatePerson());
}
// Insert users into database
```

### Prototyping
```javascript
// Quickly populate your app with realistic data
const mockUsers = Array(50).fill(null).map(() => 
  moroccanFaker.generatePerson()
);
```

## Available Data

- 100+ Moroccan first names (male & female)
- 150+ Moroccan family names
- 20+ Major Moroccan cities
- 50+ Street names
- 40+ Neighborhoods
- Valid CIN format
- Valid Moroccan phone numbers (06XX, 07XX, 05XX)
- Real postal codes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Add more data
You can help by adding more:
- First names
- Family names
- Cities
- Street names
- Neighborhoods

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT © [mouadcherkaouielmalki-jpg]

## Links

- [npm package](https://www.npmjs.com/package/moroccan-faker)
- [GitHub repository](https://github.com/mouadcherkaouielmalki-jpg/moroccan-faker)
- [Report issues](https://github.com/mouadcherkaouielmalki-jpg/moroccan-faker/issues)

## Support

If you find this package useful, please give it a star on GitHub!
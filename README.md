# Crypi :snake:

![NPM Downloads](https://img.shields.io/npm/d18m/crypi?label=Downloads)
![NPM Version](https://img.shields.io/npm/v/crypi?label=Version)
![License](https://img.shields.io/npm/l/crypi?label=License)

**A fun and simple security library for NodeJS with easy integration.**

## Installation :package:

To install Crypi, use npm:

```sh
npm install crypi
```

## Usage :computer:

Import the package into your project:

```javascript
import { caesarCipher, caesarDecipher } from 'crypi';
```

Encrypt a message:

```javascript
const originalText = 'Hello World!';
const encryptedText = caesarCipher(originalText);
console.log('Encrypted text:', encryptedText);
```

Decrypt a message:

```javascript
const decryptedText = caesarDecipher(encryptedText);
console.log('Decrypted text:', decryptedText);
```

## Documentation :book:

### Caesar Cipher:

The Caesar cipher is a substitution cipher used in cryptography that shifts the alphabet by a fixed number of positions. It is one of the simplest and most widely known encryption techniques.

#### caesarCipher (text: string, shift: number = 3): string

Encrypts a message using the Caesar cipher.

- `text`: The message to be encrypted.
- `shift`: The number of positions to shift the alphabet. Default is 3.

#### caesarDecipher (text: string, shift: number = 3): string

Decrypts a message using the Caesar cipher.

- `text`: The message to be decrypted.
- `shift`: The number of positions to shift the alphabet. Default is 3.

## Contributing :handshake:

Contributions are welcome! If you have a major change in mind, please open an `issue` to discuss it before submitting a `pull request`.

## License :scroll:

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Contact :email:

For questions or support, please contact me at [dev.juliogarciape@gmail.com](mailto:dev.juliogarciape@gmail.com).

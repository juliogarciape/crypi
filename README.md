# Crypi :snake:

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

## Contributing :handshake:

Contributions are welcome! If you have a major change in mind, please open an `issue` to discuss it before submitting a `pull request`.

## Contact :email:

For questions or support, please contact me at [dev.juliogarciape@gmail.com](mailto:dev.juliogarciape@gmail.com).

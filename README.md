# Crypi :snake:

![Downloads](https://img.shields.io/npm/dm/crypi?label=Downloads)
![Build status](https://img.shields.io/github/actions/workflow/status/juliogarciape/crypi/ci.yml?branch=main&label=Status)
![Npm Version](https://img.shields.io/npm/v/crypi?label=Version)
![License](https://img.shields.io/npm/l/crypi?label=License)

**A fun and simple security library for NodeJS with easy integration**

## Support Us :sparkling_heart:

If you find this project useful and want us to keep improving it, please consider:

- **Star the Repo**: [Give it a star](https://github.com/juliogarciape/crypi) on GitHub to help increase its visibility.
- **Share**: Let others know about this project.

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

### > Caesar Cipher:

The Caesar Cipher is a substitution cipher used in cryptography that shifts the alphabet by a fixed number of positions. It is one of the simplest and most widely known encryption techniques.

#### caesarCipher (text: string, shift: number = 3): string

Encrypts a message using the Caesar cipher.

- `text`: The message to be encrypted.
- `shift`: The number of positions to shift the alphabet. Default is 3.

#### caesarDecipher (text: string, shift: number = 3): string

Decrypts a message using the Caesar cipher.

- `text`: The message to be decrypted.
- `shift`: The number of positions to shift the alphabet. Default is 3.

> During encryption, characters not part of the Latin alphabet like uppercase letters, accented characters, non-alphanumeric characters, or numbers will be ignored and retain their original form.

## Contributing :handshake:

Contributions are welcome! If you have a major change in mind, please open an `Issue` to discuss it before submitting a `Pull Request`.

## License :scroll:

This project is licensed under the GNU General Public License v3.0 see the [LICENSE](LICENSE) file for details.

## Contact :email:

For questions or support, please contact me at [dev.juliogarciape@gmail.com](mailto:dev.juliogarciape@gmail.com).

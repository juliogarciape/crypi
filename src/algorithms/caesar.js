export const caesarCipher = (text, shift = 3) => {
	const latinAlphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	const cleanedText = text.split('');
	const encryptedText = cleanedText.map((char) => {
		let newChar = char;
		if (latinAlphabet.includes(char)) {
			let rotatedIndex = latinAlphabet.indexOf(char) + shift;

			if (rotatedIndex >= latinAlphabet.length) {
				rotatedIndex = rotatedIndex - latinAlphabet.length;
			}

			if (rotatedIndex < 0) {
				rotatedIndex = latinAlphabet.length + rotatedIndex;
			}

			newChar = latinAlphabet[rotatedIndex];
		}
		return newChar;
	});

	return encryptedText.join('');
};

export const caesarDecipher = (text, shift = 3) => {
	return caesarCipher(text, -shift);
};

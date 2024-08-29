import { caesarCipher, caesarDecipher } from '../src/algorithms/caesar';

test('Caesar Cipher:', () => {
	expect(caesarCipher('abc', 3)).toBe('def');
	expect(caesarCipher('xyz', 3)).toBe('abc');
	expect(caesarCipher('hello')).toBe('khoor');
	expect(caesarCipher('world', 6)).toBe('cuxrj');
	expect(caesarCipher('JulioCesar')).toBe('JxolrChvdu');
	expect(caesarDecipher('abc')).toBe('xyz');
	expect(caesarDecipher('xyz')).toBe('uvw');
	expect(caesarDecipher('jdwr', 3)).toBe('gato');
	expect(caesarDecipher('JxolrChvdu')).toBe('JulioCesar');
	expect(caesarDecipher('abcdef')).toBe('xyzabc');
	expect(caesarCipher('tuvwxyz')).toBe('wxyzabc');
});

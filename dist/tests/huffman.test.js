"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Huffman_1 = require("../src/Huffman");
describe('Huffman Encoding and Decoding', () => {
    it('should encode and decode the text correctly', () => {
        const text = "si ton tonton tond mon tonton";
        const huffman = new Huffman_1.Huffman(text);
        huffman.build();
        const encoded = huffman.encode("si ton");
        const decoded = huffman.decode(encoded);
        expect(decoded).toBe("si ton");
        expect(Object.keys(huffman.codes).length).toBeGreaterThan(0);
        for (const char of "si ton") {
            expect(huffman.codes[char]).toBeDefined();
        }
    });
    it('should encode and decode the entire text correctly', () => {
        const text = "si ton tonton tond mon tonton";
        const huffman = new Huffman_1.Huffman(text);
        huffman.build();
        const encoded = huffman.encode(text);
        const decoded = huffman.decode(encoded);
        expect(decoded).toBe(text);
    });
});

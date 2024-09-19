"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Huffman_1 = require("./Huffman");
const main = (text) => {
    const huffman = new Huffman_1.Huffman(text);
    huffman.build();
    const encoded = huffman.encode(text);
    const decoded = huffman.decode(encoded);
    console.log("Char codes:", huffman.codes);
    console.log("Encoded string:", encoded);
    console.log("Decoded string:", decoded);
};
const inputText = process.argv[2] || "si ton tonton tond mon tonton";
main(inputText);

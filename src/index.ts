import { Huffman } from './Huffman';

const main = (text: string) => {
    const huffman = new Huffman(text);

    huffman.build();

    const encoded = huffman.encode(text);
    const decoded = huffman.decode(encoded);

    console.log("Char codes:", huffman.codes);
    console.log("Encoded string:", encoded);
    console.log("Decoded string:", decoded);
};

const inputText = process.argv[2] || "si ton tonton tond mon tonton";

main(inputText);

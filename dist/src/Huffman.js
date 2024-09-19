"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Huffman = void 0;
const Node_1 = require("./Node");
class Huffman {
    constructor(vocabulary) {
        this.codes = {};
        this.root = null;
        this.vocabulary = vocabulary;
    }
    setCodes(node, prefix = "") {
        if (node.char) {
            this.codes[node.char] = prefix;
            return;
        }
        node.left && this.setCodes(node.left, prefix + "0");
        node.right && this.setCodes(node.right, prefix + "1");
    }
    build() {
        var _a;
        const freqList = {};
        const nodes = [];
        for (const char of this.vocabulary) {
            (_a = freqList[char]) !== null && _a !== void 0 ? _a : (freqList[char] = 0);
            freqList[char]++;
        }
        for (const key in freqList) {
            nodes.push(new Node_1.Node(freqList[key], key));
        }
        nodes.sort((a, b) => a.freq - b.freq);
        while (nodes.length > 1) {
            const [left, right] = nodes.splice(0, 2);
            const parent = new Node_1.Node(left.freq + right.freq);
            parent.left = left;
            parent.right = right;
            let index = 0;
            while (index < nodes.length && nodes[index].freq <= parent.freq)
                index++;
            nodes.splice(index, 0, parent);
        }
        this.root = nodes[0];
        this.setCodes(this.root);
    }
    encode(text) {
        let encodedStr = '';
        for (const char of text) {
            encodedStr += this.codes[char];
        }
        return encodedStr;
    }
    decode(encodedText) {
        let decodedStr = '';
        let currentNode = this.root;
        for (const bit of encodedText) {
            currentNode = bit === '0' ? currentNode === null || currentNode === void 0 ? void 0 : currentNode.left : currentNode === null || currentNode === void 0 ? void 0 : currentNode.right;
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.char) {
                decodedStr += currentNode.char;
                currentNode = this.root;
            }
        }
        return decodedStr;
    }
}
exports.Huffman = Huffman;

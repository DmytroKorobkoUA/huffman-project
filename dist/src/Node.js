"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(freq, char = null) {
        this.freq = freq;
        this.char = char;
        this.left = null;
        this.right = null;
    }
}
exports.Node = Node;

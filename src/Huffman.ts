import { Node } from './Node';

export class Huffman {
    vocabulary: string;
    codes: Record<string, string> = {};
    root: Node | null | undefined = null;

    constructor(vocabulary: string) {
        this.vocabulary = vocabulary;
    }

    setCodes(node: Node, prefix: string = "") {
        if (node.char) {
            this.codes[node.char] = prefix;
            return;
        }

        node.left && this.setCodes(node.left, prefix + "0");
        node.right && this.setCodes(node.right, prefix + "1");
    }

    build(): void {
        const freqList: { [key: string]: number } = {};
        const nodes: Node[] = [];

        for (const char of this.vocabulary) {
            freqList[char] ??= 0;
            freqList[char]++;
        }

        for (const key in freqList) {
            nodes.push(new Node(freqList[key], key));
        }

        nodes.sort((a, b) => a.freq - b.freq);

        while (nodes.length > 1) {
            const [left, right] = nodes.splice(0, 2);
            const parent = new Node(left.freq + right.freq);
            parent.left = left;
            parent.right = right;

            let index = 0;
            while (index < nodes.length && nodes[index].freq <= parent.freq) index++;
            nodes.splice(index, 0, parent);
        }

        this.root = nodes[0];
        this.setCodes(this.root);
    }

    encode(text: string): string {
        let encodedStr = '';
        for (const char of text) {
            encodedStr += this.codes[char];
        }
        return encodedStr;
    }

    decode(encodedText: string): string {
        let decodedStr = '';
        let currentNode = this.root;

        for (const bit of encodedText) {
            currentNode = bit === '0' ? currentNode?.left : currentNode?.right;

            if (currentNode?.char) {
                decodedStr += currentNode.char;
                currentNode = this.root;
            }
        }

        return decodedStr;
    }
}

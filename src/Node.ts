export class Node {
    freq: number;
    char: string | null;
    left: Node | null;
    right: Node | null;

    constructor(freq: number, char: string | null = null) {
        this.freq = freq;
        this.char = char;
        this.left = null;
        this.right = null;
    }
}

# Huffman Encoding Project

This project implements **Huffman encoding** using **TypeScript**. It includes a CLI to encode and decode text, as well as unit tests using **Jest**.

## Task Description

You are tasked with building a Huffman Tree and encoding text using Huffman encoding. The goal is to compress text by assigning shorter codes to frequently occurring characters and longer codes to less frequent characters.

### Example

Given the input: `si ton tonton tond mon tonton`

The program will:

1. **Build a Huffman Tree** based on the frequency of each character in the text.
2. **Encode the text** using the generated codes.
3. **Decode the encoded string** back to the original text.

### Sample Output

For the input `si ton tonton tond mon tonton`, the output could be:

- **Character Codes**:
  ```json
  {
    "s": "0000",
    "i": "0001",
    " ": "001",
    "t": "01",
    "o": "10",
    "n": "110",
    "d": "1110",
    "m": "11110",
    "r": "11111"
  }
  ```

- **Encoded String**: ```000000010011010```
- **Decoded String**: ```si ton```

## Getting Started
### Prerequisites
Make sure you have Node.js and npm installed on your machine. You will also need TypeScript and Jest for testing.

To check if you have Node.js installed, run:

```bash
node -v
```

To check if npm is installed, run:

```bash
npm -v
```

### Installation
1. Clone the repository:

```bash
git clone https://github.com/DmytroKorobkoUA/huffman-project.git
```
  
2. Navigate to the project directory:

```bash
cd huffman-project
```

3. Install dependencies:

```bash
npm install
```

4. Build the project:

```bash
npm run build
```

## Usage

### Running the Huffman Encoding CLI

You can encode and decode a string using the Huffman algorithm by running the following command:

```bash
npm run start -- "your text here"
```

For example:

```bash
npm run start -- "si ton tonton tond mon tonton"
```

The output will include the Huffman codes, the encoded string, and the decoded string.

## Testing
Unit tests are written using Jest. To run the tests, use the following command:

```bash
npm run test
```

The tests will check if the Huffman encoding and decoding work correctly with various input strings.

### Example Test Output
```bash
PASS  tests/huffman.test.ts
Huffman Encoding and Decoding
✓ should encode and decode the text correctly (12 ms)
✓ should encode and decode the entire text correctly (8 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```

## Project Structure
```graphql
huffman-project/
│
├── src/
│   ├── Huffman.ts    
|   ├── Node.ts       
│   └── index.ts      
│
├── tests/
│   └── huffman.test.ts  
│
├── package.json      
├── jest.config.js    
├── tsconfig.json     
└── README.md         
```
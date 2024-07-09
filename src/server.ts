import { throws } from "assert";

// Initialize a string variable 'text' with the value "hello    world"
let text: string = "hello    world";
let textResult: string = "";

// Replace multiple consecutive whitespace characters with a single space and trim leading/trailing spaces
// text.replace(/\s+/g, ' ') performs the replacement:
// - \s matches any whitespace character (spaces, tabs, etc.)
// - + means one or more of the preceding token (whitespace characters)
// - g is the global flag to replace all occurrences in the string
// - ' ' is the replacement value, a single space
// .trim() removes any leading and trailing whitespace characters from the resulting string
text = text.replace(/\s+/g, ' ').trim();

// Split the string 'text' into an array of individual characters
// .split("") splits the string at each character, resulting in an array of characters
let textArray: string[] = text.split("");

// Reverse the array of characters
// .reverse() reverses the elements of the array in place
textArray.reverse();

// Join the array of characters back into a single string without any separators
// .join("") concatenates all elements of the array into a single string, using an empty string as the separator
text = textArray.join("");

// Output the reversed string to the console
console.log(text);  // Output: "dlrow olleh"


// Another way to do it
for (let i: number = 0; i <= text.length - 1; i++) {
    textResult += text[i];
}

console.log(textResult);

// 2 . How many times a character is repeated
const charCounter = (text: string, wordOrChar: string): number => {
    let textArray: string[] = text.split(/\W+/);
    let count: number = 0;

    if (wordOrChar.length > 1) {
        textArray.forEach(word => {
            if (word === wordOrChar) {
                count++;
            }
        });
    } else {
        for (let i = 0; i < text.length; i++) {
            if (text[i] === wordOrChar) {
                count++;
            }
        }
    }

    return count;
}

let complexText: string = "Hello, World! 123 Hello, Universe! 456 Hello, Multiverse! @#$% Hello, Megaverse!";
let targetedWord: string = "Hello";

let wordFrecuency: number = charCounter(complexText, targetedWord);

console.log(`The word ${targetedWord} is reapeted ${wordFrecuency} times in the text using a function`);


// Another way to do it
// We use regex to find all the ocurrences this is not upper or lower case sensitive
let matches = complexText.match(new RegExp(targetedWord, 'gi'));

// We count the ocurrencies if matches is not null if it is we set its value as 0
let count = matches ? matches.length : 0;

console.log(`The word ${targetedWord} is repeated ${count} times in the text.`);

// 3. Hamming distance (Compare two strings which have the same length y count how many characters are different)
const findHamming = (string1: string, string2: string): number => {
    let count = 0;
    if (string1.length !== string2.length) {
        console.error("The strings are different in length");
    } else {
        for (let i = 0; i < string1.length; i++) {
            if (string1[i] !== string2[i]) {
                count++;
            }
        }
    }

    return count;
}

let string1: string = "machinelearning";
let string2: string = "machinedevelope";
let distance: number = findHamming(string1, string2);

console.log(`The Hamming distance is ${distance}`);

// Another way to do it simpler
let distance2: number = string1.split('').reduce((distance, char, index) => {
    return char !== string2[index] ? distance + 1 : distance;
}, 0);

console.log(`The Hamming distance is ${distance2} with reduce`);

// 4. Contador de palabras
let textToCountWords: string = "     una        palabra      queremos   contar    ";
let textReplacement: string = textToCountWords.replace(/\s+/g, " ").trim();
let counter: number = (textReplacement.split(" ")).length; 

console.log(`The numer of words is : ${counter}`);

// 5. Contar numeros en una cadena de caracteres
let numberInString: string = "asd576as12390assd67a237sad6a7s6d08as8ssass7";
let regex: RegExp = /[0-9]/g;
let numberCounter: number = numberInString.match(regex)?.length || 0;

console.log(`We have found ${numberCounter} numbers in the string.`);
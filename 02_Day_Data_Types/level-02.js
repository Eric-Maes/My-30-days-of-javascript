/**
 * Print the following statement using console.log() :
 * The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
 */
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

/**
 * Print the following quote from Mother Teresa using console.log() :
 * "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
 */
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

// Check whether type '10' is exactly equal to 10. If not, make it exactly equal.
let stringValue = "10";
let numberValue = Number(stringValue);
console.log(numberValue === 10);

// Check if parseFloat('9.8') is equal to 10. If not, make it exactly equal to 10.
let num = "9.8";
let parseNum = parseFloat("9.8");
let arroundNum = Math.floor(Math.round(parseNum));
console.log(arroundNum == 10);

// Check if "on" is found in both the string "python" and the string "jargon".
let python = "Python";
let jargon = "Jargon";
let checkIfOn = python.includes("on") && jargon.includes("on");

// Check whether the word "jargon" is present in the sentence "I hope this course isn't full of jargon".
let sentence = "I hope this course isn't full of jargon";
let containsJargon = sentence.includes("jargon");

// Generate a random number between 0 and 100 inclusive.
let randomNumber = Math.floor(Math.random() * 101);

// Generate a random number between 50 and 100 inclusive.
let randomNumber2 = Math.floor(Math.random() * 51) + 50;

// Generate a random number between 0 and 255 inclusive.
let randomNumber3 = Math.floor(Math.random() * 256);

// Access the characters in the "JavaScript" string using a random number.
let jsString = "JavaScript";
let randomIndex = Math.floor(Math.random() * jsString.length);
let randomCharacter = jsString[randomIndex];

/**
 * Use console.log() and escape characters to print the following pattern :
 * 1 1 1 1 1
 * 2 1 2 4 8
 * 3 1 3 9 27
 * 4 1 4 16 64
 * 5 1 5 25 125
 */
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

/**
 * Cut out the string "because because because because because" in the following sentence: 
 * "You can't end a sentence with because because because because because is a conjunction" using substr().
 */
let sentence2 = "You can't end a sentence with because because because because because is a conjunction";
let extracted = sentence2.substr(30, 36);
console.log(extracted);
// Declare a variable named challenge and assign it the initial value 'My 30 Days Of JavaScript'.
let challenge = "My 30 Days Of JavaScript";

// Print the challenge variable in the console using console.log().
console.log(challenge);

// Print the length of the challenge variable in the console using console.log().
console.log(challenge.length);

//Transform all characters in the challenge variable into uppercase letters using the toUpperCase() method.
let challengeUpperCase = challenge.toUpperCase();

// Transform all characters in the challenge variable into lowercase letters using the toLowerCase() method.
let challengeLowerCase = challenge.toLowerCase();

// Cut (slice) the first word of the challenge variable using the substr() or substring() method.
let firstWord = challenge.substring(0, 2);

// Cut the 'Days Of JavaScript' sentence from 'My 30 Days Of JavaScript'.
let lastWords = challenge.substring(3, 24);

// Check whether the challenge variable contains the word Script using the includes() method.
let checkIfIncludeScript = challenge.includes("Script");

// Split the challenge variable into an array using the split() method.
let challengeSplit = challenge.split();

// Split the My 30 Days Of JavaScript string from the challenge variable at space level using the split() method.
let wordsArray = challenge.split(" ");

// "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" divides the string at the decimal point and transforms it into an array.
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let companiesArray = companies.split(", ");

// Replace "My 30 Days Of JavaScript" with "My 30 Days Of Python" using the replace() method.
let newChallenge = challenge.replace("JavaScript", "Python");

// Find the character at index 15 in the variable challenge using the charAt() method.
let charAtIndex15 = challenge.charAt(15);

// Find the code for the character J in the variable challenge using the charCodeAt() method.
let charCodeOfJ = challenge.charCodeAt("J");

// Determine the position of the first occurrence of "a" in the challenge variable using the indexOf() method.
let firstIndexOfA = challenge.indexOf("a");

// Determine the position of the last occurrence of "a" in the _challenge_ variable using the **lastIndexOf()** method.
let lastIndexOfA = challenge.lastIndexOf("a");

// Find the position of the first occurrence of the word "because" in the following sentence: "You can't end a sentence with because because because is a conjunction." using the indexOf() method.
let sentence = "You can't end a sentence with because because because is a conjunction.";
let firstIndexOfBecause = sentence.indexOf("because");

// Find the position of the last occurrence of the word "because" in the following sentence: "You can't end a sentence with because because because is a conjunction." using the lastIndexOf() method.
let lastIndexOfBecause = sentence.lastIndexOf("because");

// Find the position of the first occurrence of the word "because" in the following sentence: "You can't end a sentence with because because because is a conjunction." using the search() method.
let searchIndexOfBecause = sentence.search("because");

// Remove spaces at the beginning and end of a string, for example " My 30 Days Of JavaScript ", using the trim() method.
let stringWithSpaces = " My 30 Days Of JavaScript ";
let trimmedString = stringWithSpaces.trim();

// Use the startsWith() method with the variable challenge and get a true result.
let challengeStartsWith = challenge.startsWith("My 30 Days");

// Use the endsWith() method with the variable challenge and get a true result.
let challengeEndsWith = challenge.endsWith("Of JavaScript");

// Use match() to find all the "a "s in the challenge variable.
let allLettersA = challenge.match(/a/g);

// Use the concat() method to merge "My 30 Days Of" and "JavaScript" into a single string, "My 30 Days Of JavaScript".
let firstPart = "My 30 Days Of";
let lastPart = " JavaScript";
let combinedParts = firstPart.concat(lastPart);

// Use the repeat() method to print the challenge variable twice.
let repeatChallenge = challenge.repeat(2);


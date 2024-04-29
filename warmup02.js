/**
 * 1-write a function that returns the product of any number by 3.
 */
let productOf3 = n => n * 3;

/**
 * 2-complete the following function multiply to return the result of multiplying x and y
 */
const multiply = (x, y) => x * y;

/**
 * 3-complete the following function that Convert Fahrenheit to Celsius if the module for converting it
 */
const fahrenheitToCelsius = fahrenheit => `${(fahrenheit - 32) * 5 / 9} °C`;

/**
 * 4-Define a function named "sqArea", and make it display square area if you knew the length of its side.
 */
const sqArea = length => length ** 2; // ** is exponant
/* 5 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.
 */
const scoreToGrade = score => {
  if (score === 20) return "A+";
  else if (score >= 18) return "A-";
  else if (score >= 15) return "B+";
  else if (score >= 12) return "C+";
  else if (score >= 10) return "C";
  else return "F";
};
/**
 * 6 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.
 */
const sameLength=(string1, string2)=> string1.length === string2.length
/**
 *! 1 Write a function named helloWorld that:
 *! takes 1 argument, a language code (e.g. "fr", "es", "en")
 *! returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
 *! ex: helloWorld('fr') ==> 'Bonjour tout le monde'
 *!    helloWorld('es') ==> 'Hola, Mundo'
 *!    helloWorld('') ==> 'Hello, World'
 *!
 *! @function helloWorld
 *! @param {string} str
 *! @return {string}
 */

const helloWorld=(str)=> {
    if(str === "fr") return "Bonjour tout le monde"
    else if (str === "es") return "Hola, mundo como estas"
    else if (str === "tn") return "Aslema nes kol"
    else if ( str === "") return "Hello world"
    else if ( str === "en") return "Hello world"
}

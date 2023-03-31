// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePw();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//will have to make arrays of lower and upper letters, numbers, and symbols
lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var lowerLettersArray = lowerLetters.split("");
console.log(lowerLettersArray)

upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperLettersArray = upperLetters.split("");
console.log(upperLettersArray);

numbers = "0123456789"
var numbersArray = numbers.split("");
console.log(numbersArray);

symbols = "!@#$%^&*()_+"
var symbolsArray = symbols.split("");
console.log(symbolsArray);





//make generatePassword function
function generatePw() {

  var pwLength = Number(pwLength);
  var wantsLower;
  var wantsUpper;
  var wantsNumbers;
  var wantsSymbols;
  var fullList;

  //prompt for password length is a number
  pwLength = prompt("Choose a password ength: between 8-128 characters");

  //if statement if number is above 8 && below 128
  if (pwLength >= 8 && pwLength <= 128) {

    //confirm for lowercase, uppercase, numeric and special characters
    //store their response in a variable
    wantsLower = confirm("Include lowercase letters? \nOK for YES \nCANCEL for NO");

    wantsUpper = confirm("Include uppercase letters? \nOK for YES \nCANCEL for NO");

    wantsNumbers = confirm("Include numbers? \nOK for YES \nCANCEL for NO")

    wantsSymbols = confirm("Include symbols? \nOK for YES \nCANCEL for NO");

  } else {
    alert("bye")

  };

  //if statement for each confirm and if it is a yes or true I would push or add random characters to a big array of all characters selected so far.
  if (wantsLower && wantsUpper && wantsNumbers && wantsSymbols) {
    fullList = lowerLettersArray.concat(upperLettersArray, numbersArray, symbolsArray);
    console.log(fullList)

  } else if (wantsLower && wantsUpper && wantsNumbers) {
    fullList = lowerLettersArray.concat(upperLettersArray, numbersArray);
    console.log(fullList)

  } else if (wantsLower && wantsUpper) {
    fullList = lowerLettersArray.concat(upperLettersArray);
    console.log(fullList)

  } else if (wantsLower) {
    fullList = lowerLettersArray;
    console.log(fullList)

  } else if (wantsLower && wantsNumbers) {
    fullList = lowerLettersArray.concat(numbersArray);

  } else if (wantsLower && wantsSymbols) {
    fullList = lowerLettersArray.concat(symbolsArray);

  } else if (wantsUpper && wantsNumbers && wantsSymbols) {
    fullList = upperLettersArray.concat(numbersArray, symbolsArray);

  } else if (wantsUpper && wantsNumbers) {
    fullList = upperLettersArray.concat(numbersArray);

  } else if (wantsUpper) {
    fullList = upperLettersArray;

  } else if (wantsUpper && wantsSymbols) {
    fullList = upperLettersArray.concat(symbolsArray);

  } else if (wantsNumbers && wantsSymbols) {
    fullList = numbersArray.concat(symbolsArray);

  } else if (wantsNumbers) {
    fullList = numbersArray;

  } else if (wantsSymbols) {
    fullList = symbolsArray;

  } else {
    alert("Must choose something. Please try again.")
  }





  //for loop while i is less than their answer for num length prompt
  // it should randomly select an index of fullList after iterating through the fullList and concat or push that selection into a new password array. The new password should return to the writePassword function and only be as long as the user wanted when choosing pwLength


  //the for loop will randomly pull characters from the big array

  //pull random characters from the array using math.random. Must multiply math.random by the length of the array or else it will always math.floor out to 0. Math.random chooses a number between 0 and 1.

  //password var must be declared as an empty array in order to "join" the randomPick into it. Keep it inside the generatePw function scope.

  //must join the randomPick indexes together to form a new string. Then return the password var string

  var password = [];

  for (var i = 0; i < pwLength; i++) {
    var randomPick = fullList[Math.floor(Math.random() * fullList.length)];
    console.log(randomPick);
    password.push(randomPick);
  }
  return password.join("");
}

writePassword();

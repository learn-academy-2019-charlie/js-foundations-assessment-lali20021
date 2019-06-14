// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
const divBy3 = (number) => {
  if ((number / 3) % 2 === 0){
    return number + " is divisible by 3"
  } else {
      return (number + " is not divisible by 3");
  }
}
console.log(divBy3());

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
class HelloMe{
  constructor(first_name, last_name, age, hair){
    this.first_name = first_name
    this.last_name = last_name
    this.age = age
    this.hair = hair
  }
  description(){
    return "My name is: " + this.first_name +"\nMy Last name is: " + this.last_name + "\nI am: " + this.age +"\nMy hair is: " + this.hair
  }
}
let lali= new HelloMe("Lali", "Gabelaya", 34, "brown")
console.log(lali.description())
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
var grocery = ["bread", "butter", "milk", "eggs", "cheese"]
  for (let i=0; i<grocery.length; i++)
  if (i % 2 === 0) {
    console.log(grocery[i])
  }
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
const alphabetSoup = (str) => {
  return str.split('').sort().join('')
}
console.log(alphabetSoup("lalibear"))
// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

// output should be: "9 ducks", etc
var nums = [9, 5, 88, 2, 5, 42, 57]
var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
const animalNums = (arr1, arr2) => {
    if(arr1.length === arr2.length){
        for (let i=0; i<arr1.length; i++){
          console.log(arr1[i] + " " +(arr2[i]));
        }
    }
}
animalNums(nums, nouns)

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
var arr = [9, 5, 8, 2, 5]

const multBy5 = (arr1) =>{
  var newArr = []
  for (let i=0; i<arr1.length; i++){
    newArr.push(arr1[i]*5)
  }
    return newArr
}
 console.log(multBy5(arr));
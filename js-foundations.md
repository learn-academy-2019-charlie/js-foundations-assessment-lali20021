# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
    Object, string, number, boolean, null, undefined, symbol.
    All besides object are primitive.
    
2. What's the difference between =, ==, and === in JavaScript?
    = is used for assigning values to a variable in JS 
    == is used for comparison between two variables irrespective of the datattype of variable
    === is used for comparison between two variables but this will check strict type, which means it will check datatype and compare two values.

3. What is the difference between an array's index and length?
    index is a location of an item in an array
    length is a property that returns or sets the number of emelements in a given array.

4. What are the three parts of a for loop?
    initialization(sets a loop control variable to an initial value), condition(expression to be evaluated before each loop iteration), final-expression(an expression to be evaluated at the end of each loop iteration)

5. What is a function's declaration, argument, and call?
    *function declaration defines a function with the specific parameters.
    *arguments are values passed to the function when it is invoked
    *function call performs specific actions with the indicated parameters

6. What are the three main steps in saving work to github?
    git add .
    git commit -m "name of commit"
    git push 

7. What is the terminal command to move directories?
    mv

8. Do you have a suggestion for a Check In question?
    

9. What was your favorite topic this week?
    react
    
10. What was your "A-ha!" moment this week?

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
    it will be undefined

2. What is JSON? How does it relate to javascript objects?
    JSON is Javascript Object Notation. It is based on a subset of the JS programming language. 
    Its a collection of name/value pairs.
    JSON is a format for storing and transporting data.
    JSON has an ability to pass the value or data into a JS object.

3. Describe a closure, what is it good for and how do you recognize one?

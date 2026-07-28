"" + 1 + 0 //*10*//
"" - 1 + 0 //*-1*//
true + false //*1*//
!true //*false*//
6 / "3" //*2*//
"2" * "3" //*6*//
4 + 5 + "px" //*"9px"//
"$" + 4 + 5 //*"$45"*//
"4" - 2 //*2*//
"4px" - 2 //*NaN*//
" -9 " + 5 //*"-9 5"//
" -9 " - 5 //*-14*//
null + 1 //*1*//
undefined + 1 //*NaN*//
undefined == null //*true*//
undefined === null //*false*//
" \t \n" - 2 //*-2*//

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four //*"34"*/
let multiplication = three * four //*12*//
let division = three / four //*0.75*//
let subtraction = three - four //*-1*//
let lessThan1 = three < four //*true*//
let lessThan2 = thirty < four //*false*//

3. Which of the following console.log messages will 
print? Why?

if (0) console.log('#1 zero is true')//This will not print because 0 is falsy
if ("0") console.log('#2 zero is true')//This will print because "0" is a non-empty string and is truthy
if (null) console.log('null is true')//This will not print because null is falsy
if (-1) console.log('negative is true')//This will print because -1 is a non-zero number and is truthy
if (1) console.log('positive is true')//This will print because 1 is a non-zero number and is truthy

4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do?
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
} //*less than 10*//

//Rewritten using the ternary operator
let a = 2, b = 3;

let result = `${a} + ${b} is ${
    a + b < 10 ? 'less than 10' : 'greater than 10'
}`;

console.log(result); // This will print "2 + 3 is less than 10" because 2 + 3 is indeed less than 10
let a = 5, b = 6;

let result = `${a} + ${b} is ${
    a + b < 10 ? 'less than 10' : 'greater than 10'
}`;

console.log(result); // This will print "5 + 6 is greater than 10" because 5 + 6 is indeed greater than 10

// The '+=' operator is a shorthand for adding a value to a variable and then assigning the result back to that variable. 
// For example, 'result += 'less than 10';' is equivalent to 'result = result + 'less than 10';'.

5. Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same.
function getGreeting(name) {
return 'Hello ' + name + '!';
}
console.log(getGreeting("Roger")); //*Hello Roger!*//

// a) Function expression syntax
const getGreeting = function(name) {
    return 'Hello ' + name + '!';
}; // This is a function expression that assigns an anonymous function to the variable getGreeting

console.log(getGreeting("Roger")); //*Hello Roger!*//

// b) Arrow function syntax
const getGreeting = (name) => 'Hello ' + name + '!';

console.log(getGreeting("Roger")); //*Hello Roger!*//

console.log(getGreeting("Alice")); //*Hello Alice!*//


6. a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
const westley = {
    name: 'Westley',
    numFingers: 5
};

const rugen = {
    name: 'Count Rugen',
    numFingers: 6
};

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',

    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },

    // Arrow function + conditional operator
    getCatchPhrase: (person) =>
        person.numFingers === 6
            ? 'You killed my father. Prepare to die.'
            : 'Nice to meet you.'
};

inigo.greeting(westley);
inigo.greeting(rugen);


7. The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations.
const basketballGame = {
    score: 0,
    fouls: 0,

    freeThrow() {
        this.score++;
        return this;
    },

    basket() {
        this.score += 2;
        return this;
    },

    threePointer() {
        this.score += 3;
        return this;
    },

    foul() {
        this.fouls++;
        return this;
    },

    halfTime() {
        console.log('Halftime score is ' + this.score + ' | Fouls: ' + this.fouls);
        return this;
    },

    fullTime() {
        console.log('Fulltime score is ' + this.score + ' | Fouls: ' + this.fouls);
        return this;
    }
};

basketballGame
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .threePointer()
    .foul()
    .foul()
    .halfTime()
    .threePointer()
    .basket()
    .fullTime();

    8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

function printCity(city) {
    for (let property in city) {
        console.log(property + ": " + city[property]);
    }
}

printCity(sydney);

const tokyo = {
    name: 'Tokyo',
    population: 13960000,
    country: 'Japan',
    founded: '1603',
    timezone: 'Asia/Tokyo'
};

printCity(tokyo);

9. Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = {
    name: 'Fluffy',
    breed: 'Siberian'
};

// a)
let moreSports = [...teamSports];
moreSports.push('Basketball');
moreSports.unshift('Soccer');

// b)
let dog2 = dog1;
dog2 = 'Max';

// c)
let cat2 = { ...cat1 };
cat2.name = 'Whiskers';

// d)
console.log("teamSports:", teamSports);
console.log("moreSports:", moreSports);

console.log("dog1:", dog1);
console.log("dog2:", dog2);

console.log("cat1:", cat1);
console.log("cat2:", cat2);

//* The original teamSports, dog1, and cat1 variables have not changed because we created copies of them 
// (using the spread operator for arrays and objects) before making modifications. 
// This ensures that the original variables remain independent of the new ones.*//

// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    // e) Method to check if the person can drive
    this.canDrive = function() {
        return this.age >= 16;
    };
}

// a) Create the first person
let person1 = new Person("Roger", 25);

// b) Create the second person
let person2 = new Person("Alice", 14);

// c) Print each person's properties
console.log(person1);
console.log("Can drive:", person1.canDrive());

console.log(person2);
console.log("Can drive:", person2.canDrive());


// d) Rewrite as a class
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    // e) Method to check if the person can drive
    canDrive() {
        return this.age >= 16;
    }
}

// Create a third person using the class
let person3 = new PersonClass("John", 18);

// Print the third person
console.log(person3);
console.log("Can drive:", person3.canDrive());
1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.

function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;

    return function () {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

// Original counter
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

// a. Second independent counter
let counter2 = makeCounter();
counter2(); // 1
counter2(); // 2

counter1(); // 3
counter2(); // 3

// b. Counter starting from 10
let counter3 = makeCounter(10);
counter3(); // 11
counter3(); // 12

// c. Counter starting from 100 and increasing by 5
let counter4 = makeCounter(100, 5);
counter4(); // 105
counter4(); // 110
counter4(); // 115

2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all.
function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// a. 
#4: Not delayed at all
#3: Delayed by 0ms
#2: Delayed by 20ms
#1: Delayed by 100ms

// b.
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

// c.
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');

delayMsg('#4: Not delayed at all');

const timer5 = setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');

// d.
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');

delayMsg('#4: Not delayed at all');

const timer5 = setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');

clearTimeout(timer5);


3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
similar requests until there's a brief pause, then only executing the most recent of those
requests.
It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:
a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored.
b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms
c) Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement.
function printMe(msg) {
console.log('printing debounced message')
}
printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
1000ms of no calls
setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300);

// a.
function debounce(func) {

    let timeout;

    return function () {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            func();

        }, 1000);

    };

}

function printMe() {

    console.log("printing debounced message");

}

printMe = debounce(printMe);

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

// b. 

function debounce(func, ms) {

    let timeout;

    return function () {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            func();

        }, ms);

    };

}

function printMe() {

    console.log("printing debounced message");

}

printMe = debounce(printMe, 1000);

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

// c.
function debounce(func, ms) {

    let timeout;

    return function (msg) {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            func(msg);

        }, ms);

    };

}

function printMe(msg) {

    console.log("printing debounced message:", msg);

}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe("First"), 100);

setTimeout(() => printMe("Second"), 200);

setTimeout(() => printMe("Third"), 300);

4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.

// a.
function printFibonacci() {

    let first = 1;

    let second = 1;

    console.log(first);

    console.log(second);

    setInterval(() => {

        let next = first + second;

        console.log(next);

        first = second;

        second = next;

    }, 1000);

}

printFibonacci();

// b.
function printFibonacciTimeouts(first = 1, second = 1) {

    console.log(first);

    setTimeout(() => {

        printFibonacciTimeouts(second, first + second);

    }, 1000);

}

printFibonacciTimeouts();

// c.
function printFibonacci(limit) {

    let first = 1;

    let second = 1;

    let count = 2;

    console.log(first);

    console.log(second);

    let timer = setInterval(() => {

        if (count >= limit) {

            clearInterval(timer);

            return;

        }

        let next = first + second;

        console.log(next);

        first = second;

        second = next;

        count++;

    }, 1000);

}

printFibonacci(10);

5. The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?
let car = {
make: "Porsche",
model: '911',
year: 1964,

description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works
setTimeout(car.description, 200); //fails
a) Fix the setTimeout call by wrapping the call to car.description() inside a
function
b) Change the year for the car by creating a clone of the original and overriding it
c) Does the delayed description() call use the original values or the new values from
b)? Why?
d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function
e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d)

let car = {
    make: "Porsche",
    model: "911",
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description(); // Works
setTimeout(car.description, 200); // Fails

// a.
let car = {
    make: "Porsche",
    model: "911",
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description();

setTimeout(() => {
    car.description();
}, 200);

// b.
let newerCar = {
    ...car,
    year: 2024
};

newerCar.description();

// c. 
setTimeout(() => {
    car.description();
}, 200);

newerCar.description();

car.description();

// d.
let car = {
    make: "Porsche",
    model: "911",
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

let boundDescription = car.description.bind(car);

setTimeout(boundDescription, 200);

// e.
let sportsCar = {
    ...car,
    make: "Ferrari"
};

sportsCar.description();

setTimeout(boundDescription, 500);

This car is a Ferrari 911 from 1964
This car is a Porsche 911 from 1964

6. Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.
function multiply(a, b) {
console.log( a * b );
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters
b) Use apply to improve your solution so that delayed functions can take any number of
parameters
c) Modify multiply to take 4 parameters and multiply all of them, and test that your
delay prototype function still works.

// a.
Function.prototype.delay = function (ms) {

    let func = this;

    return function (a, b) {

        setTimeout(() => {

            func(a, b);

        }, ms);

    };

};

function multiply(a, b) {

    console.log(a * b);

}

multiply.delay(500)(5, 5);

// b.
Function.prototype.delay = function (ms) {

    let func = this;

    return function (...args) {

        setTimeout(() => {

            func.apply(this, args);

        }, ms);

    };

};

function multiply(a, b) {

    console.log(a * b);

}

multiply.delay(1000)(8, 9);
// c.
Function.prototype.delay = function (ms) {

    let func = this;

    return function (...args) {

        setTimeout(() => {

            func.apply(this, args);

        }, ms);

    };

};

function multiply(a, b, c, d) {

    console.log(a * b * c * d);

}

multiply.delay(1000)(2, 3, 4, 5);

7. The following DigitalClock class uses an interval to print the time every second once
started, until stopped.
class DigitalClock {
constructor(prefix) {
this.prefix = prefix;
}
display() {
let date = new Date();
//create 3 variables in one go using array destructuring
let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
}
stop() {
clearInterval(this.timer);
}
start() {
this.display();
this.timer = setInterval(() => this.display(), 1000);
}
}
const myClock = new DigitalClock('my clock:')
myClock.start()
a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied.
b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.

class DigitalClock {

    constructor(prefix) {

        this.prefix = prefix;

    }

    display() {

        let date = new Date();

        let [hours, mins, secs] = [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ];

        if (hours < 10) hours = "0" + hours;
        if (mins < 10) mins = "0" + mins;
        if (secs < 10) secs = "0" + secs;

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

    }

    stop() {

        clearInterval(this.timer);

    }

    start() {

        this.display();

        this.timer = setInterval(() => this.display(), 1000);

    }

}

const myClock = new DigitalClock("Clock:");

myClock.start();

// a.
class PrecisionClock extends DigitalClock {

    constructor(prefix, precision = 1000) {

        super(prefix);

        this.precision = precision;

    }

    start() {

        this.display();

        this.timer = setInterval(() => {

            this.display();

        }, this.precision);

    }

}

const fastClock = new PrecisionClock("Fast Clock:", 500);

fastClock.start();

// b.
class AlarmClock extends DigitalClock {

    constructor(prefix, wakeupTime = "07:00") {

        super(prefix);

        this.wakeupTime = wakeupTime;

    }

    start() {

        this.display();

        this.timer = setInterval(() => {

            let now = new Date();

            let hours = String(now.getHours()).padStart(2, "0");

            let minutes = String(now.getMinutes()).padStart(2, "0");

            let currentTime = `${hours}:${minutes}`;

            this.display();

            if (currentTime === this.wakeupTime) {

                console.log("Wake Up!");

                this.stop();

            }

        }, 1000);

    }

}

const alarm = new AlarmClock("Alarm:", "07:00");

alarm.start();

8. Using the following starter code, create a decorator function to validate function arguments
as strings. Test it by decorating the given orderItems function below.
function orderItems(itemName) {
return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error
a) Create a decorator function validateStringArg(fn) which will validate an
argument passed to fn to ensure that it is a string, throwing an error if not
b) Extend orderItems to use the ... rest operator, allowing multiple item name
arguments, and include them all in the returned string
c) Extend the decorator function to validate as strings all arguments passed to fn
d) When testing the decorated function, use try-catch blocks to handle errors thrown for
non-string arguments

function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}

const validatedOrderItem = validateStringArg(orderItems);

console.log(validatedOrderItem("Apple Watch"));
console.log(validatedOrderItem(123));

// a.
function validateStringArg(fn) {

    return function (arg) {

        if (typeof arg !== "string") {
            throw new Error("Argument must be a string.");
        }

        return fn(arg);

    };

}

function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}

const validatedOrderItem = validateStringArg(orderItems);

console.log(validatedOrderItem("Apple Watch"));

// b.
function orderItems(...itemNames) {

    return `Order placed for: ${itemNames.join(", ")}`;

}
    console.log(orderItems("Laptop", "Mouse", "Keyboard"));

// c.
function validateStringArg(fn) {

    return function (...args) {

        for (let arg of args) {

            if (typeof arg !== "string") {

                throw new Error("All arguments must be strings.");

            }

        }

        return fn(...args);

    };

}

function orderItems(...itemNames) {

    return `Order placed for: ${itemNames.join(", ")}`;

}

const validatedOrderItem = validateStringArg(orderItems);

// d.
try {

    console.log(validatedOrderItem("Apple Watch", "iPhone"));

}
catch (error) {

    console.log(error.message);

}

try {

    console.log(validatedOrderItem("Apple Watch", 123));

}
catch (error) {

    console.log(error.message);

}

9. We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.
a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below
b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value
function randomDelay() {
// your code
}
randomDelay().then((delay) => console.log(`There appears to have been a delay of ${delay} seconds.`)).catch((delay) => console.log(`Delay of ${delay} seconds failed.`));

function randomDelay() {

    return new Promise((resolve, reject) => {

        let delay = Math.floor(Math.random() * 20) + 1;

        setTimeout(() => {

            if (delay % 2 === 0) {

                resolve(delay);

            }
            else {

                reject(delay);

            }

        }, delay * 1000);

    });

}

// b.,c.,d.
randomDelay()

.then(delay => {

    console.log(`Success! Delay was ${delay} seconds.`);

})

.catch(delay => {

    console.log(`Failure! Delay was ${delay} seconds.`);

});

10.Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
comments before the function.)
a) Write a new version of this function using async/await
b) Test both functions with valid and invalid URLs
c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
using Promise.all to combine the results.
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}
});
return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

import fetch from "node-fetch";

globalThis.fetch = fetch;

// a.
async function fetchURLData(url) {

    try {

        const response = await fetch(url);

        if (response.status === 200) {

            const data = await response.json();

            return data;

        }

        throw new Error(`Request failed with status ${response.status}`);

    }

    catch (error) {

        throw error;

    }

}
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")

.then(data => {

    console.log(data);

})

.catch(error => {

    console.log(error.message);

});
{
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
}
// b.
fetchURLData("https://jsonplaceholder.typicode.com/todos/999999")

.then(data => {

    console.log(data);

})

.catch(error => {

    console.log(error.message);

});

// c.
async function fetchMultiple(urls) {

    try {

        const responses = await Promise.all(

            urls.map(url => fetchURLData(url))

        );

        return responses;

    }

    catch (error) {

        console.log(error.message);

    }

}

fetchMultiple([

"https://jsonplaceholder.typicode.com/todos/1",

"https://jsonplaceholder.typicode.com/todos/2",

"https://jsonplaceholder.typicode.com/todos/3"

])

.then(data => {

    console.log(data);

});

// 1. Object Person

const person = {
    firstName : "Lucy",
    lastName : "Sesega",
    age : 42,
    residency : "Samoa",
    admin : true,
};

for (const key in person) {
    const value = person[key];
    console.log(key, value);
};

// 2. Get Values

const getObjectValues = (object) => Object.values(object);

console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
  }));

// 3. Add a Method

let person2 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
    getString() {
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} old ${this.job} in ${this.city}`);
    },

};

person2.getString();

// Bonus 1: Convert keys and values into an array

const objectToArray = (object) => console.log(Object.entries(object));

objectToArray({
    cats: 1,
    dogs: 2, 
    turtles: 4,
});

// Bonus 2: List Properties

let student = {
    name: "Mike", 
    class: "4A", 
    course: "English",
};

const listProperties = (object) => console.log(Object.keys(object));

listProperties(student);

// Bonus 3: Merge

let first = {firstName: "John"};
let last = {lastName: "Smith"};

const mergeObjects = (obj1, obj2) => {
    const resultObj = {};
    resultObj.firstName = Object.values(obj1).join("");
    resultObj.lastName = Object.values(obj2).join("");
    return resultObj;
};

const result = mergeObjects(first, last);
console.log(result);

// Extra Credit:
// the way I solved the task here, I wouldn't get that problem, I think, as I'm only taking the values from both objects and assign the keys myself
// knowing from today's lecture (4.5.) I know that both the original and the modified object woulde be changed, as they are passed by reference :)

// Bonus 4: Switch Keys and Values

let person3 = {
    name: "John", 
    job: "teacher",
};

// this version actually makes the values keys and the keys values, so it doesn't produce the desired output, but at least I made it myself ;)

const switchKeysAndValues = (object) => {
    const resultObj = {};
    const entries = Object.entries(object);
    // get 2 separate arrays
    let job = entries.pop();
    let name = entries.pop();
    // get last element of both arrays
    const endOfJob = job.pop();
    const endOfName = name.pop();
    // add last elements to the start of the arrays
    job.unshift(endOfJob);
    name.unshift(endOfName);
    // assign values as last elements of the arrays; use computed properties with bracket notation
    resultObj[[endOfName]] = name[1];
    resultObj[[endOfJob]] = job[1];
    return resultObj;
};

const resultBonus4 = switchKeysAndValues(person3);
console.log(resultBonus4);

// this version also does not produces the expected output, found it online, not sure I will ever remember, but huuuuhhhh... how to get to this output: {"John": name, "teacher": job} ???

const switchAgain = (object) => {
    const resultObject = {};
    for (const property in object) {
        resultObject[object[property]] = property;
    };
    return resultObject;
};

const resultBonus4v2 = switchAgain(person3);
console.log(resultBonus4v2);

// last try for this Bonus 4
// doesn't work either, but at least I found a much shorter version for my first function of this 
// i give up - am open to advice!!

const switchIt = (object) => {
    const resObjAgain = {};
    const properties = Object.keys(object);
    const values = Object.values(object);
    resObjAgain[[values[0]]] = properties[0];
    resObjAgain[[values[1]]] = properties[1];
    return resObjAgain;
};

const resultBonus4v3 = switchIt(person3);
console.log(resultBonus4v3);

// Bonus 5: Return Keys and Values

const returnArray = (object) => {
    const resultArray = [];
    const keysArray = Object.keys(object);
    const valuesArray = Object.values(object);
    resultArray.push(keysArray);
    resultArray.push(valuesArray);
    return resultArray;
};

const resultBonus5 = returnArray({key: true});
console.log(resultBonus5);
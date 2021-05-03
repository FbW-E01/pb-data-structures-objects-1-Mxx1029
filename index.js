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
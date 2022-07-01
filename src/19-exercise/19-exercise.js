/**
 * Exercise 19:
 *
 * 1. Create a class named `Person` that takes in as parameters
 *
 *    firstName
 *    lastName
 *
 * 2. The class should use the constructor method to receive
 *    the parameters for when a new instance of the class
 *    is created.
 *
 * 3. Once you have created the Person class, you should
 *    create a new person using the `new Person(...)`
 *    expression. Then, you should store the newly created
 *    person in the `ana` variable.
 */

// Create the Person class
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Create a new instance of the class with the arguments:
//
// firstName: "Ana"
// lastName: "Spark"
//
// Store the new instance in the `ana` variable
let ana = new Person("Ana", "Spark");

// Don’t change the code bellow this line
export { Person, ana };

import setup19Exercise from "./19-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup19Exercise(() => console.log(ana));
}

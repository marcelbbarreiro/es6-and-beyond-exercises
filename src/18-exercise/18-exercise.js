/**
 * Exercise 18:
 *
 * Complete the code of the exercise18 function so that it:
 *
 * 1. Converts the exercise18 function to be of type `async`
 *
 * 2. Uses the await keyword in front of a fetch() call
 *    to the following url:
 *
 *    https://jsonplaceholder.typicode.com/users/1
 *
 * 3. Uses the await keyword again in front of the json() call
 *    to wait for the data of the promise
 *
 * 4. Obtains the data from the fetch json() call and executes
 *    the `displayContents` function by passing it as an argument
 *    the response data returned by the fetch json() method.
 */

// Finish the code of the function

async function exercise18() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    displayContents(data)
}

// Don’t change the code bellow this line
function displayContents(data) {
    const wrapper = document.querySelector(".ex-wrapper");

    wrapper.textContent = JSON.stringify(data, null, 2);
}

import setup18Exercise from "./18-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup18Exercise(() => exercise18());
}

export default exercise18;

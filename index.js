// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

let root = document.getElementById("root");
let h1El = document.createElement("h1");

h1El.textContent = "Hello React World!";
h1El.classList.add("header");

root.appendChild(h1El);
// Declarative Code
ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"));

// Imperative code
const root = document.getElementById("root");
const h1El = document.createElement("h1");

h1El.textContent = "Hello React World!";
h1El.className = "header";

root.appendChild(h1El);
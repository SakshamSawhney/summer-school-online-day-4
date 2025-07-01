console.log(x);  // undefined (hoisted declaration, not value)
var x = 10;

try {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 20;
} catch (err) {
  console.log("Error:", err.message);
}

/*
Explanation:
- var is hoisted with undefined value.
- let is hoisted too, but in a "temporal dead zone" and throws an error if accessed before declaration.
*/

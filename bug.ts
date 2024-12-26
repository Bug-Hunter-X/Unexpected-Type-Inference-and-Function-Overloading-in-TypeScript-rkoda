function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // 8
let result2 = subtract(10, 4); // 6

console.log(result1, result2); // 8 6

// Uncommon error: Type inference and function overloading

function process(x: number): number; // Overloading: Accepts numbers
function process(x: string): string; // Overloading: Accepts strings
function process(x: any): any {
  if (typeof x === 'number') {
    return x * 2; // Correct handling for numbers
  } else if (typeof x === 'string') {
    return x.toUpperCase(); // Correct handling for strings
  } else {
    return x; // Unexpected type. A more robust error handling
           // might be necessary here.
  }
}

let numResult = process(5); // 10
let strResult = process("hello"); // HELLO
let unexpectedResult = process(true); // true - This is not intuitive and might be unexpected behaviour.

console.log(numResult, strResult, unexpectedResult); // 10 HELLO true

// Another example with more potential ambiguity

function ambiguousFunction(param: string | number): string | number {
    if (typeof param === 'number') {
        return param * 2; 
    } else {
        return param + " added";
    }
}

console.log(ambiguousFunction(5)); // 10
console.log(ambiguousFunction("test")); // test added

// The issue here is that TypeScript can't give you an exact type
// The return type should be clearly stated
// Also handle the unexpected input more robustly

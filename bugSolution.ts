// Improved type safety and more robust error handling
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let sumResult = add(5, 3); // 8
let differenceResult = subtract(10, 4); // 6

console.log(sumResult, differenceResult); // 8 6

// Improved process function with explicit return types and better error handling
function process(x: number): number;
function process(x: string): string;
function process(x: any): any {
  if (typeof x === 'number') {
    return x * 2;
  } else if (typeof x === 'string') {
    return x.toUpperCase();
  } else {
    throw new Error(`Unsupported type: ${typeof x}`); // Improved error handling
  }
}

let processedNumber = process(5); // 10
let processedString = process("hello"); // HELLO

console.log(processedNumber, processedString); // 10 HELLO

// Handling unexpected types explicitly
try {
  let unexpectedResult = process(true);
  console.log(unexpectedResult); 
} catch (error) {
  console.error(error.message); // Catches the error for unsupported type
}

// Ambiguity handling
function unambiguousFunction(param: string): string;
function unambiguousFunction(param: number): number;
function unambiguousFunction(param: string | number): string | number {
  if (typeof param === 'number') {
    return param * 2; 
  } else {
    return param + " added";
  }
}

console.log(unambiguousFunction(5)); //10
console.log(unambiguousFunction("test")); // test added
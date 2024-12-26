# Unexpected Type Inference and Function Overloading in TypeScript

This repository demonstrates a subtle bug related to type inference and function overloading in TypeScript.  The code showcases scenarios where the type system might not behave as intuitively expected, leading to potential runtime errors or unexpected results.  The focus is on the unusual ways type inference can behave when combining function overloading and union types, especially concerning the return type. The solution emphasizes stricter type checking and more robust error handling for improved code clarity and reliability.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Compile and run the TypeScript code using `tsc bug.ts && node bug.js`.
4. Observe the unexpected results.  Then run `tsc bugSolution.ts && node bugSolution.js` to observe the improvements.

## Bug Description

The core problem lies in the implicit type handling within overloaded functions and functions accepting union types as parameters.  TypeScript's type inference, while powerful, can produce unexpected results in less straightforward scenarios. This is particularly true when you lack explicit return types or exhaustive type handling.

## Solution

The solution involves:

* Explicitly defining the return type for each overload of the function (`process`).
* Implementing more comprehensive type guards or error handling to gracefully manage unexpected input types.
* Using more descriptive variable names for clarity.
* Improving the overall robustness and predictablity of the program.
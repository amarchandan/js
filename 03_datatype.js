// ## 1. `"use strict";`

// ```javascript
// "use strict";
// ```

// ### What is it?
// `"use strict";` enables **Strict Mode** in JavaScript. It tells the JavaScript engine to execute the code using stricter rules.

// ### Why use Strict Mode?
// - Prevents accidental global variables.
// - Throws errors for common mistakes.
// - Makes debugging easier.
// - Encourages writing clean and modern JavaScript.
// - Improves code security and reliability.

// ### Example

// ```javascript
// "use strict";

// x = 10; // ❌ Error: x is not defined
// ```

// Without Strict Mode:

// ```javascript
// x = 10; // ✅ Creates a global variable (bad practice)
// ```

// ---

// # 2. `alert()`

// ```javascript
// // alert(3 + 3)
// ```

// ### What is `alert()`?

// `alert()` displays a popup dialog with a message.

// ### Important
// - ✅ Works in web browsers.
// - ❌ Does NOT work in Node.js.

// Browser Example:

// ```javascript
// alert("Hello World!");
// ```

// Node.js:

// ```javascript
// alert("Hello"); // Error
// ```

// ---

// # 3. `console.log()`

// ```javascript
// console.log(3 + 3);
// ```

// ### What is `console.log()`?

// `console.log()` prints data to the console.

// It is mainly used for:
// - Debugging
// - Testing code
// - Viewing output

// Example:

// ```javascript
// console.log("Hello");
// console.log(10 + 20);
// ```

// Output:

// ```
// Hello
// 30
// ```

// ---

// # 4. Code Readability

// Example from the code:

// ```javascript
// console.log(3
// +
// 3)
// ```

// Although JavaScript understands this, it is not easy to read.

// Better way:

// ```javascript
// console.log(3 + 3);
// ```

// ### Why is readability important?

// Good code should be:
// - Easy to read
// - Easy to understand
// - Easy to debug
// - Easy to maintain
// - Easy for other developers to work with

// **Always write
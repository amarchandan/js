// Topic     : Variables in JavaScript
// Level     : Beginner

/*
=========================================================
What is a Variable?
=========================================================

A variable is a named container used to store data.

Instead of writing the same value multiple times,
we store it inside a variable and use its name.

Variables can store:
- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Functions
- Null
- Undefined
- BigInt
- Symbol

=========================================================
JavaScript Variable Types
=========================================================

1. const
2. let
3. var (Old way)

Modern JavaScript mostly uses:
✔ const
✔ let

Avoid using var unless working with old JavaScript code.

=========================================================
const
=========================================================

const creates a constant variable.

A constant cannot be reassigned after it is created.

Syntax:

const variableName = value;

Example:
*/

const id = 6788;

/*
Output:
6788

Characteristics:

✔ Cannot be reassigned.
✔ Block scoped.
✔ Must be initialized during declaration.
✔ Best choice when value will never change.

Wrong Example:

const id = 6788;
id = 100;

Result:
TypeError: Assignment to constant variable.

Note:
If const stores an object or array,
their contents can still be modified.

=========================================================
let
=========================================================

let creates a block-scoped variable.

Use let when the value may change later.

Syntax:

let variableName = value;

Example:
*/

let mail = "amar@amar.c";

/*
Later:

mail = "admin@gmail.com";

Allowed ✔

Characteristics:

✔ Block scoped
✔ Can be reassigned
✔ Cannot be redeclared in the same scope
✔ Introduced in ES6 (2015)

Example:

let age = 20;
age = 21;

Output:
21

=========================================================
var
=========================================================

var is the old way of creating variables.

Syntax:

var variableName = value;

Example:
*/

var name = "Amar";

/*
Characteristics:

✔ Function scoped
✔ Can be reassigned
✔ Can be redeclared
✔ Hoisted

Problems with var:

Because var is function scoped instead of block scoped,
it can create unexpected bugs.

Example:

if (true) {
    var city = "Delhi";
}

console.log(city);

Output:
Delhi

Even though city was declared inside the block,
it is still accessible outside.

Using let:

if (true) {
    let city = "Delhi";
}

console.log(city);

Output:
ReferenceError

This is why let is safer.

=========================================================
Printing Variables
=========================================================
*/

console.table([id, name, mail]);

/*
Output

┌─────────┬────────────────┐
│ (index) │ Values         │
├─────────┼────────────────┤
│    0    │ 6788           │
│    1    │ Amar           │
│    2    │ amar@amar.c    │
└─────────┴────────────────┘

console.table() displays data in table format,
making it easier to read multiple values.

=========================================================
Best Practices
=========================================================

✔ Use const by default.

✔ Use let only when the value needs to change.

✔ Avoid var in modern JavaScript.

Good Example:

const PI = 3.14159;
const API_URL = "https://example.com/api";

let score = 0;
score++;

Avoid:

var score = 0;

=========================================================
Difference Between const, let and var
=========================================================

                const      let        var
---------------------------------------------------------
Reassign         ❌         ✔          ✔
Redeclare        ❌         ❌         ✔
Block Scope      ✔         ✔          ❌
Function Scope   ❌         ❌         ✔
Hoisted          ✔         ✔          ✔
Needs Value      ✔         ❌         ❌
Modern Use       ✔✔✔       ✔✔✔        ❌

=========================================================
Summary
=========================================================

const
------
Use when the value should never change.

let
----
Use when the value may change later.

var
----
Old keyword.
Avoid in modern JavaScript because of function scope
and redeclaration issues.

Rule to Remember:

👉 const first.
👉 let if change is needed.
👉 Never use var unless maintaining old code. */
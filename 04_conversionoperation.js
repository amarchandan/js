"use strict";

/*
           JAVASCRIPT TYPE CONVERSION

JavaScript allows you to convert one data type into another.
This process is called "Type Conversion" or "Type Casting".

There are two types of conversion:

1. Implicit Conversion (Automatic)
   - JavaScript converts values automatically.

2. Explicit Conversion (Manual)
   - Developer converts values using functions like:
     Number()
     String()
     Boolean()

                NUMBER CONVERSION
*/

// Integer Number
let score = 12;
console.log(typeof score); // number

/*
Explanation:
- 'score' is a numeric value.
- typeof returns "number".
*/




// String containing only numbers
let score_str = "21";
console.log(typeof score_str); // string

/*
Explanation:
- Even though "21" looks like a number,
  it is enclosed in quotes.
- Therefore JavaScript treats it as a string.
*/




// String containing numbers and letters
let score_numstr = "123abc";
console.log(typeof score_numstr); // string

/*
Explanation:
- Because it contains quotes,
  the datatype is still string.
*/




// Convert String to Number
let valueinNumber = Number(score_numstr);

console.log(typeof valueinNumber); // number
console.log(valueinNumber); // NaN

/*
Explanation:
- Number() tries to convert the string into a number.
- "123abc" is NOT a valid numeric value.
- Therefore JavaScript returns NaN.

NaN = Not a Number

Important:
typeof NaN returns "number"
even though it means an invalid number.
*/




// Valid Number Conversion
let validNumber = Number("123");

console.log(validNumber); // 123
console.log(typeof validNumber); // number

/*
"123"
↓
123
*/




// Empty String Conversion
let emptyNumber = Number("");

console.log(emptyNumber); // 0

/*
Empty string becomes 0.
*/




// Boolean Conversion to Number
console.log(Number(true));  // 1
console.log(Number(false)); // 0

/*
true  -> 1
false -> 0
*/




// Null Conversion
console.log(Number(null)); // 0

/*
null converts to 0.
*/




// Undefined Conversion
console.log(Number(undefined)); // NaN

/*
undefined cannot be converted into
a valid number.
*/




/*
               BOOLEAN CONVERSION
*/

let isloggedin = "";

let booleanOutput = Boolean(isloggedin);

console.log(typeof booleanOutput); // boolean
console.log(booleanOutput); // false

/*
Explanation:
Boolean() converts any value into
either true or false.
*/




// Examples

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

/*
1 -> true
0 -> false
*/




console.log(Boolean("Hello")); // true

/*
Any non-empty string becomes true.
*/




console.log(Boolean("")); // false

/*
Empty string becomes false.
*/




console.log(Boolean("0")); // true

/*
String "0" is NOT empty.
Therefore it becomes true.
*/




console.log(Boolean(null)); // false

/*
null -> false
*/




console.log(Boolean(undefined)); // false

/*
undefined -> false
*/




console.log(Boolean(NaN)); // false

/*
NaN -> false
*/




/*
               STRING CONVERSION
*/

let age = 21;

let ageString = String(age);

console.log(ageString); // "21"
console.log(typeof ageString); // string

/*
Number
↓
String
*/




console.log(String(true)); // "true"
console.log(String(false)); // "false"

console.log(String(null)); // "null"

console.log(String(undefined)); // "undefined"




/*
              IMPORTANT INTERVIEW POINTS

1.
typeof 12
=> "number"

2.
typeof "12"
=> "string"

3.
Number("123")
=> 123

4.
Number("123abc")
=> NaN

5.
typeof NaN
=> "number"

6.
Boolean(1)
=> true

7.
Boolean(0)
=> false

8.
Boolean("")
=> false

9.
Boolean("Hello")
=> true

10.
Boolean(" ")
=> true
(Because space is not an empty string.)

11.
Number("")
=> 0

12.
Number(null)
=> 0

13.
Number(undefined)
=> NaN

14.
String(123)
=> "123"

15.
String(true)
=> "true"

              QUICK CONVERSION TABLE

Value              Number()      Boolean()      String()
------------------------------------------------------------
123                123           true           "123"
"123"              123           true           "123"
"123abc"           NaN           true           "123abc"
""                 0             false          ""
"Hello"            NaN           true           "Hello"
true               1             true           "true"
false              0             false          "false"
null               0             false          "null"
undefined          NaN           false          "undefined"
NaN                NaN           false          "NaN"

*/
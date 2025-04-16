// importing..........********
// import {sayHi} from './say.js';

// alert(sayHi); // function...
// sayHi('John');


//importing the exporting afer declaration...........*******
// import {sayHi, sayBye} from './say.js';

// sayHi('John'); 
// sayBye('John');

//import * as say..........******
// import * as say from './say.js';

// say.sayHi('John');
// say.sayBye('John');

//import as ...................***********
// import {sayHi as hi, sayBye as bye} from './say.js';

// hi('John'); // Hello, John!
// bye('John'); // Bye, John!


//importing default export.............********8
// import sayHi from './say.js';  // No curly braces
// sayHi(); // Output: Hello, Ash!


//importing module.............**********
// console.log(secretCode); // ❌ ReferenceError: secretCode is not defined

//importing module correct.........*****
// import {secretCode} from './say.js';
// console.log(secretCode); // ✅ Now works: 4321



// exporting..................******
export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }


//module-level scope...............*******
// const secretCode = 4321;
// console.log("Inside module");


//exporting module.............***************
// export const secretCode = 4321;





//export after declarations
//   function sayHi(user) {
//     alert(`Hello, ${user}!`);
//   }
  
//   function sayBye(user) {
//     alert(`Bye, ${user}!`);
//   }
  
//   export {sayHi, sayBye};


//export as............********
// export {sayHi as hi, sayBye as bye};


// //export deafault.............*******
export default function greet() {
    console.log("Hello, Ash!");
}

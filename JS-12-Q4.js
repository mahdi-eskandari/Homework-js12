//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring
// var
// var name = 'Alice';
// if (1>=1) {
//   var name = 'Bob';
// }
// console.log(name)
// قابل تغییر در بلوک های مختلف



// let
// let Age = 25;
// age = 30;
// console.log(age);
// تغییر age مجاز است




// const
// const section = "one"
// // const section = "three"    //نمیتوان متغیر را تغییر داد
// console.log(section);


/* ___________     Next section     ____________ */

// const addArrow = (a, b) => a + b;
// console.log(addArrow(14, 10));




// مثالی از this

// const person = {
//     name: 'Alice',
//     function() {
//         console.log(`Hello, ${this.name}`)
//     }
//   };
//   person.function();
// که در اینجا this
// همان parent است
// که در اینجا به person اشاره دارد


/* ___________     Next section     ____________ */

// const fName = 'Mahdi';
// const greeting = `Hello, ${fName}!`;
// console.log(greeting);

/* ___________     Next section     ____________ */

// destructuring : 
// const number = [2,4,6,8,10]
// const [num1, num2, num3] = number
// console.log(...[num1, num2, num3]);

// or:

// const person = {
//     fName: "Mahdi",
//     lName: "Eskandari",
//     age: 19
// }
// const {fName,lName,age} = person
// console.log(fName, lName, age);





// let , const
// این دو کاربردی تر هستند

// Destructuring :
// مقادیر را از آرایه ها استخراج میکند
// و یا نام آنها را تغییر میدهد
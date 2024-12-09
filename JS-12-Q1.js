//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:


function printText1() {
    console.log("Action");
    
    function printText2() {
       console.log("Potential");

       function printText3() {
          console.log("Signals");
       }
       printText3()
    }
    printText2()
}
printText1()

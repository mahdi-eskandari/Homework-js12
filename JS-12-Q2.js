// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

function innerFunc(x) {
return function outerFunc(y) {
    return x*y
}
}
console.log(innerFunc(2)(3));

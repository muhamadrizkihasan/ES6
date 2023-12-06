// Rest Paremeter

function myFunc(a, ...myArgs) {
    // return myArgs;
    return Array.from(arguments);
}

console.log(myFunc(1,2,3,4,5));
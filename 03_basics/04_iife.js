// Immediately Invoked Function Expressions (IIFE)


(function cha(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('ashadulla')


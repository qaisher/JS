let a = 4, b = 8;
console.log(sum(a, b));

function sum(a, b){
    return (a+b);
}

//function expression
var subtract = function(a, b){
    return (a-b);
}
console.log(subtract(a, b));

//iife

(function(x, y){
    console.log(x+y);
})(9, 3);
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

//call, apply and bind

let animal = {
    name: 'cat',
    eat(a,b){
        console.log(this.name + ' is eating ' + a + ' and ' +b);
    }
};

let human = {
    name: 'vikas'
};
animal.eat('mango', 'banana');
animal.eat.call(human, 'bread', 'butter');
animal.eat.apply(human, ['cake', 'pastry']);
let bindFunc = animal.eat.bind(human);
bindFunc('dal', 'chawal');
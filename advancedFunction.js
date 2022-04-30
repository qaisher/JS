//currying
let add = function(a){
    return function(b)
    {
        console.log(a+b);
    }
}
let addby5 = add(5);
addby5(4);

let multiply = function(x, y){
    console.log(x*y);
}

let multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(6);

//composition
const sum = (a, b) => a+b;
const pro = (x, y) => x*y;
console.log(sum(7, pro(4,3)));

//promise

const promise = new Promise((resolve, reject) => {
    if(true)
    resolve('OK');
    else
    reject('Not OK');
});
promise.then(result => result + 'aljla');


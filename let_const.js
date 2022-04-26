//let and var

for(let i = 0; i < 4; i++)
console.log(i);

console.log(i); //will throw an error/ undefined since it is declared with let and is being accessed outside the block

for(var i = 0; i < 4; i++)
console.log(i);

console.log(i); //will not throw an error since it is declared with var

//const

const a = 10;
console.log(a);
a = 12; //will throw an error since it is declared with const
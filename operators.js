//increment operator

let a = 3;
console.log(a++); //postfix
console.log(++a); //prefix

//shift operators

let x = 2, y = 3, z = '3';
console.log(x<<y);
console.log(x>>y);

//relational operators

if(x>y)
console.log('x greater than y');
if(y>x)
console.log('y greater than x');
if(y==z)
console.log('type coercion allowed');
if(y===z)
console.log('type coercion allowed');
else
console.log('type coercion not allowed');

//ternary operator

(x==y)?console.log('equal'): console.log('not equal');
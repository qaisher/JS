var arr = [2, 3, 1, 8];
console.log(arr[1]);

var arr1 = [4, 2, ,, 3];
console.log(arr1[2]); //undefined

var arr2 = new Array(4, 'name', new Object());
console.log(arr2);
console.log(typeof(arr2));

//push and pop

console.log(arr);
arr.push(10);
console.log(arr);

arr.pop();
console.log(arr);

//unshift and shift
arr.unshift(20);
console.log(arr);
arr.shift();
console.log(arr);

//splice()
arr.splice(0, 3, 'newElement');
console.log(arr);

//slice()
arrSliced = arr1.slice(0, 2);
console.log(arrSliced);
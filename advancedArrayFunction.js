//map
let arr = [2,3,4,5];
console.log(arr);
let newArr = arr.map(a=>a*2);
console.log(newArr);

let newArr1 = arr.map(add5);

function add5(num){
    return num+5;
}
console.log(newArr1);

//filter

let filteredArr1 = arr.filter(a => a>3);
let filteredArr2 = newArr.filter(a => a>3);
console.log(filteredArr1);
console.log(filteredArr2);

//reduce
let reducedArr = arr.reduce((acc, num) => acc+num);
console.log(reducedArr);
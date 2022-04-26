var a = 1;
var b = 2;
if(a+b>4)
console.log('Greater than 4');
else
console.log('Smaller than or equal to 4');

const arr = [3, 5, 7];
for(let i = 0; i < 3; i++){
    console.log(arr[i]);
}

arr.forEach(item=>console.log(item));

for(item of arr){
    console.log(item);
}

for(item in arr){
    console.log(item);//gives the index of elements
}

let x = 0;
while(x<3){
    console.log(arr[x]);
    x++;
}

let y = 0;
do{
    console.log(arr[y]);
    y++;
}while(y<3)
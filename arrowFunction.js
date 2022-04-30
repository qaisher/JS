/*
function operation(a,b){
    return function(operand){
        return eval('a operand b');
    };

};

console.log(operation(4,5)(+);
*/

function age_req(r_age){
    return function(age){
        return age>=r_age;
    };
};

console.log(age_req(18)(15));
console.log(age_req(12)(15));
console.log(age_req(23)(15));
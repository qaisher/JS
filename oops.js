class box
{
    constructor(length)
    {
        this.length = length;
    }
    display(){
        console.log(this);
    }
}

let obj = new box(20);
obj.display();

let father = {
    name: 'john';
};
let son1 = {};
let son = Object.create(father);
console.log(father.isPrototypeOf(son));
console.log(father.isPrototypeOf(son1);)

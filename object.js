var obj = {
    name: 'qaisher',
    age: 27,
    job: 'Web Developer',
    displayDetails(){
        console.log(`${this.name} is ${this.age} years old and works as a ${this.job}.`);
    }
};

obj.displayDetails();
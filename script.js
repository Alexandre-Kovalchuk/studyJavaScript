// Task - 1

const newObj = {};

function checkEmpty(obj) {
   for (let key in obj) {
      return false;
   }
   return true;
}

console.log(checkEmpty(newObj));

// task - 2; 
const user = {
   name: "name",
   age: "age",

   sayHello: function () {
      console.log(`Привіт, я ${this.name}, мені ${this.age} років`);
   }
};

user.sayHello();

// Task - 3
const calculator = {
   a: "",
   b: "",

   aks() {
      this.a = +prompt("Введіть перше число:");
      this.b = +prompt("Введіть друге число:");
   },
   sum(){
      return this.a + this.b;
   },
   mul(){
      return this.a * this.b;
   }
};
calculator.aks();
alert(calculator.sum());
alert(calculator.mul());

// const userName = prompt("Enter your name ");

// alert(`Hello ${userName}`);

const firstNumberUser = +prompt("Enter the first number");
const secondNumberUser = +prompt("Enter the second number");


const div = firstNumberUser / secondNumberUser;
const sub = firstNumberUser - secondNumberUser;

// task-1

if (firstNumberUser / secondNumberUser && secondNumberUser == 0) {
   alert('Error');
}
else  {
   alert(div);
}


// task-2

if (firstNumberUser < secondNumberUser) {
   let message = confirm('Ви впевнені, що хочете продовжити операцію?');
   if (message == true) {
      alert(sub);
   }
   else if (message == false) {
      alert('Операція скасована');
   }
}


// task-3

if (firstNumberUser == "" || secondNumberUser == "") {
   alert('error');
}









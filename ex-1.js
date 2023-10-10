// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  operation(array, 5000);
}

function operation(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    newEmployeeSalaries.push(arr[i] + num);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, operation);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

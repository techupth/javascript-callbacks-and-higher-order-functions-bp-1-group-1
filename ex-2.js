//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array);
}

function operation(arr) {
  let atLeast = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 70) {
      atLeast.push(arr[i]);
    }
  }

  if (atLeast.length >= 5) {
    return true;
  } else {
    return false;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, operation);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, operation);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, operation);

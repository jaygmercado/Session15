// Non-primitive

// Object
const agent = {
  firstName: 'Rodolfo',
  lastName: 'Mercado',
  birthYear: 1996,
  id: 202132024,
  getFullName: function () {
    // this keyword refers to the objec itself
    return this.firstName + ' ' + this.lastName;
  },
  getAge() {
    const today = new Date();
    const age = today.getFullYear() - this.birthYear;
    return age;
  },
};

console.log(agent.firstName);

const propertyName = 'firstName';
console.log(agent[propertyName]);

const agentFullName = agent.getFullName();
console.log(agentFullName);

console.log(agent);
console.log(agent.getAge());

// Note: semicolon are optional in JavaScript
// To loop the properties of an object, for...in loop
for (keyName in agent) {
  console.log(keyName, agent[keyName]);
}

agent.firstName = 'Alex';
console.log(agent.firstName);

agent.nickName = 'Jay';
console.log(agent.nickName);

let dev = {
  lang: 'JS',
};

dev = {
  exp: '2years',
};

// Note: naming convention for JavaScript is camel case

// Arrays
const arr0 = [
  1,
  2,
  3,
  'Jay',
  true,
  undefined,
  null,
  {
    firstName: 'Rodolfo',
    lastName: 'Mercado',
    birthYear: 1996,
  },
];

console.log(arr0[0]);
console.log(arr0[1]);
console.log(arr0[2]);
console.log(arr0[3]);
console.log(arr0[4]);
console.log(arr0[5]);
console.log(arr0[6]);
console.log(arr0[7]);

arr0[0] = true;
console.log(arr0[0]);

// arr0 = [1, 2, 3];
// console.log(arr0);

let arr1 = [
  1,
  2,
  3,
  'Jay',
  true,
  undefined,
  null,
  {
    firstName: 'Rodolfo',
    lastName: 'Mercado',
    birthYear: 1996,
  },
];

arr1[0] = true;
console.log(arr1[0]);

arr1 = [1, 2, 3];
console.log(arr1);

// Methods are functions of an object

// Method for arrays
console.log(arr0);

// Adds element at the end of the array
arr0.push('Hello');
console.log(arr0);

// Adds element at the start of the array
arr0.unshift('Hi');
console.log(arr0);

// Remove from end
arr0.pop();
console.log(arr0);

// Remove from start
arr0.shift();
console.log(arr0);

// Remove from any place
// first argument is the start (included), 2nd argument is the end (excluded)
arr0.splice(0, 4);
console.log(arr0);

console.log(arr0.length);

// Print last element
const lastElement = arr0[arr0.length - 1];
console.log(lastElement);

arr0.push(null);
console.log(arr0);
console.log(arr0.indexOf(null));

console.log(arr0);
console.log(arr1);
const arr2 = arr0.concat(arr1);

console.log(arr0);
console.log(arr1);
console.log(arr2);

// Loop an array
for (elll of arr0) {
  console.log(elll);
}

arr0.forEach((ellll) => {
  console.log(ellll);
});

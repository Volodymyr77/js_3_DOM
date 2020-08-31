// let greenDiv = document.getElementById(elementID: 'divka');

// console.log(greenDiv);

// greenDiv.style.backgroundColor - 'yellow';

// let boldT = document.getElementsByClassName(classNames: `boldText`);

// console.log(boldT);

let dog = {
  name: 'Rocky',
  breed: 'hasky',
  color: 'grey',
  age: 7,
  meal: 'meat',
};
console.log(dog);
let man = { name: 'Taras', sex: 'man', age: 27, hair: 'brown', work: true };
console.log(man);
let car = {
  maker: 'ford',
  model: 'focus',
  transmision: 'manual',
  color: 'red',
  year: 2008,
};
let flat = { rooms: 3, kitchen: true, floor: 3, balcony: true, square: 60 };
let book = {
  title: 'Mort',
  Autor: 'Pratchett',
  color: 'green',
  size: 'middle',
  price: 150,
};

let dogs = [
  (dog1 = {
    name: 'Rocky',
    breed: 'hasky',
    color: 'grey',
    age: 7,
    meal: 'meat',
  }),
  (dog2 = {
    name: 'Tom',
    breed: 'dog',
    color: 'grey',
    age: 5,
    meal: 'meat',
  }),
  (dog3 = {
    name: 'Pit',
    breed: 'taxa',
    color: 'brown',
    age: 6,
    meal: 'meat',
  }),
  (dog4 = {
    name: 'Rudy',
    breed: 'pitbul',
    color: 'white',
    age: 5,
    meal: 'meat',
  }),
  (dog5 = {
    name: 'boxer',
    breed: 'boxer',
    color: 'brown',
    age: 3,
    meal: 'meat',
  }),
];
console.log(dogs);
let people = [
  (petro = { name: 'Petro', age: 17, car: 'seat' }),
  (vasyl = { name: 'Vasyl', age: 23, car: 'pegoe' }),
  (Maryna = { name: 'Maryna', age: 22, car: 'shkoda' }),
  (Mykola = { name: 'Mykola', age: 25, car: 'mazda' }),
  (Oksana = { name: 'Oksana', age: 22, car: 'VW' }),
];
console.log(people);
let cars = [
  (Fiat = { model: 'Punto' }),
  (Seat = { model: 'Ibiza' }),
  (Shkoda = { model: 'Yeti' }),
  (Reno = { model: 'logan' }),
  (dodge = { model: 'caliber' }),
];
console.log(cars);

let house = {
  floors: 2,
  color: 'green',
  garage: {
    cars: 1,
    color: 'blue',
  },
  garden: ['apples', 'peaches', 'chery'],
};
console.log(house);

let driver = {
  expirience: 20,
  cars: { ford: 'red', nissan: 'blue' },
  level: 'hight',
  fixing: ['gear', 'electricity', 'hydro'],
};

let toy = {
  name: 'pingoo',
  color: 'yellow',
  friends: ['tiger', 'dog', 'kitty'],
  skills: { eatting: 'porridge', playing: 'chess' },
};
console.log(toy);
let table = {
  color: 'black',
  matereal: 'wood',
  whatToDo: { eat: 'meat', write: 'letters', playing: 'games' },
  where: ['badroom', 'kitchen'],
};
console.log(table);
let bag = {
  color: 'brown',
  size: 'middle',
  inside: ['notebook', 'mouse', 'books'],
  pockets: { first: 'big', second: 'small', third: 'little' },
};
console.log(bag);
// array

let users = [
  { name: 'vasya', age: 31, status: false },
  { name: 'petya', age: 30, status: true },
  { name: 'kolya', age: 29, status: true },
  { name: 'olya', age: 28, status: false },
  { name: 'max', age: 30, status: true },
  { name: 'anya', age: 31, status: false },
  { name: 'oleg', age: 28, status: false },
  { name: 'andrey', age: 29, status: true },
  { name: 'masha', age: 30, status: true },
  { name: 'olya', age: 31, status: false },
  { name: 'max', age: 31, status: true },
];
console.log(users[7].status);
console.log(users[10].status);
console.log(users[10 - 1].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[9].age), console.log(users[4].age, users[4].name);
console.log(users[5].age, users[5].status);

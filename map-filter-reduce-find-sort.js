// mapping
const numbers = [1, 22, 12, 66, 90, 51, 11];

const doubleNumbers = numbers.map(el => el * 2);
console.log(doubleNumbers);

const developers = [
   {
      id: 1,
      fullName: 'Anton Petrov',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
      salary: 1000,
   },
   {
      id: 2,
      fullName: 'Ivan Ivanov',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
      salary: 950,
   },
   {
      id: 3,
      fullName: 'Albert Sidorov',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
      salary: 850,
   },
];

function middle(obj) {
   for (const key in obj) {
      if (key === 'salary') {
         obj[key] += 500;
      };
      if (key === 'skills') {
         obj[key] = [...obj[key], 'TypeScript'];
      };
   }
   return obj;
}
const middleDevelopers = developers.map(middle);
console.log(middleDevelopers);

//filters
const names = ['Mikhail', 'Ivan', 'Albert', 'John', 'Ian', 'Petr', 'Alexandr', 'Oleg', 'Jaroslav', 'Vsevolod'];
const shortNames = names.filter(e => e.length <= 5);
console.log(shortNames);

const products = [
   {
      id: 1,
      name: 'Intro to JavaScript',
      category: 'books',
      price: 150,
   },
   {
      id: 2,
      name: 'Intro to CSS',
      category: 'books',
      price: 120,
   },
   {
      id: 3,
      name: 'Deep dive into JavaScript',
      category: 'books',
      price: 350,
   },
   {
      id: 4,
      name: 'Intro to PHP',
      category: 'books',
      price: 250,
   },
   {
      id: 5,
      name: 'Deep dive into PHP',
      category: 'books',
      price: 350,
   },
];

const cheapProducts = products.filter(product => product.price <= 300);
console.log(cheapProducts);

const developers1 = [
   {
      id: 1,
      fullName: 'Ivan Ivanov',
      skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
   },
   {
      id: 2,
      fullName: 'Petr Petrov',
      skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm']
   },
   {
      id: 3,
      fullName: 'Ian Melnikov',
      skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript']
   },
   {
      id: 4,
      fullName: 'Antonio Banderas',
      skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript', 'React']
   },
];

const tsDevelopers = developers1.filter(developer => developer.skills.includes('TypeScript'));

console.log(tsDevelopers);

//reduce
const order = [
   {
      id: 1,
      name: 'Лопата',
      price: 1000,
      quantity: 1,
   },
   {
      id: 2,
      name: 'Удочка',
      price: 1200,
      quantity: 2,
   },
   {
      id: 3,
      name: 'Ведро',
      price: 500,
      quantity: 3,
   },
   {
      id: 4,
      name: 'Мороженое',
      price: 100,
      quantity: 8,
   },
];

const totalPrice = order.reduce((acc, obj) => {
   return acc += obj.price * obj.quantity;
}, 0);

console.log(totalPrice);

//find
const players = [
   {
      id: 1,
      name: 'Andres',
      surname: 'Iniesta',
      club: 'Vissel Cobe',
   },
   {
      id: 2,
      name: 'Eden',
      surname: 'Hazard',
      club: 'Real Madrid',
   },
   {
      id: 3,
      name: 'Mo',
      surname: 'Salah',
      club: 'Liverpool',
   },
   {
      id: 4,
      name: 'Lionel',
      surname: 'Messi',
      club: 'Barcelona',
   },
];

const messi = players.find(obj => obj.surname === 'Messi');
console.log(messi);

//sort
const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Stawberry"];

const players1 = [
   {
      id: 1,
      name: 'Cristiano',
      surname: 'Ronaldo',
      club: 'Juventus',
   },
   {
      id: 2,
      name: 'Lionel',
      surname: 'Messi',
      club: 'Barcelona',
   },
   {
      id: 3,
      name: 'Karim',
      surname: 'Benzema',
      club: 'Real Madrid',
   },
   {
      id: 4,
      name: 'Maxi',
      surname: 'Gomez',
      club: 'Valencia',
   },
   {
      id: 5,
      name: 'Quincy',
      surname: 'Promes',
      club: 'Spartak',
   },
];


food.sort(sorting);
players1.sort((obj1, obj2) => sorting(obj1.surname, obj2.surname));
console.log(players1);
console.log(food);
players1.sort((obj1, obj2) => obj2.id - obj1.id);
console.log(players1);

function sorting(a, b) {
   if (a > b) {
      return 1;
   }
   if (a < b) {
      return -1;
   }
   return 0;
}









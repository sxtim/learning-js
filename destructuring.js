/* ARRAYS */
function getInfo() {
   return ['BMW', 'X3'];
}
//создаем преременные     кладем в них элементы массива 
const [carName, carSeries] = getInfo();
console.log(carName, carSeries);
//поменять переменные местами без 3й переменной
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x, y);

const cities = ['Madrid', 'Paris', 'Amsterdam', 'Berlin'];
//присваиваем пустые значения на случай если придет null
const [
   madr = '',
   paris = '',
   ...otherCities
] = cities || [];
console.log(madr, paris);
console.log(otherCities);

const numbers = [1, 2, 3, [4, 5], 10, 12, 13];
const [
   a = 0,
   ,
   b = 0,
   c = 0,
// [d, e] = []
] = numbers || [];
console.log(b);

/* OBJECTS */

const link = {
   href: '#',
   title: 'simple link',
   target: 'blank',
   className: 'link',
   id: null,
   children: {
       span: {
           content: 'Click me',
           className: 'anchor',
       },
   },
}
//в переменную с именем ключа получаем значение ключа,
//если необходимо переименовываем переменную
const {
   target = '',
   className = '',
//   ...otherProp
   children: {
      span: {
         className: renamed = '',
         content = ''
      }
   }
} = link;
console.log(renamed);

console.log('Sample JavaScript #2 HW #16');

/*
 * #1
 *
 * Создайте объект userObj, описывающий человека.
 *
 * Следующие поля обязательны:
 * firstName – любое имя, строка
 * lastName – любая фамилия, строка
 * age – любой возраст, число
 */
var userObj = {
  age: 27,
  firstName: 'Юля',
  lastName: 'Олешко',
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  },
};

/*
 * #2
 *
 * Для объекта из п.1 создайте метод fullName, который будет возвращать полное имя,
 * состоящее из firstName и lastName, склеенных в строку через пробел.
 *
 * Например:
 * userObj.firstName ← 'Имя
 * userObj.lastName ← Фамилия'
 * userObj.fullName() → 'Имя Фамилия'.
 */

/*
 * #3
 *
 * Дана функция defUpperStr('My text'), которая возвращает текст, преобразованный в верхний регистр, т.е:
 * defUpperStr('My text') → 'MY TEXT'.
 *
 * Если функция вызывается без параметра defUpperStr(), она не должна возвращать undefined,
 * в этом случае требуется вернуть строку текста по умолчанию в верхнем регистре, т.е:
 * defUpperStr() → 'DEFAULT TEXT'.
 *
 * При выполнении задачи не используйте оператор if, требуется решение с логическим оператором ||.
 */

/* eslint-disable capitalized-comments */
function defUpperStr(str) {
  return (str || 'default text').toUpperCase();
}

console.log(defUpperStr('My text')); // MY TEXT

console.log(defUpperStr()); // DEFAULT TEXT

/*
 * #4
 *
 * Создайте функцию evenFn(n), которая принимает параметром число – количество итераций цикла,
 * т.е. for 0..n. Функция должна вернуть массив, состоящий только из четных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор for
 *
 * Например:
 * evenFn(10) → [2, 4, 6, 8, 10]
 * evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
 * evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */
function evenFn(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
  return arr;
}
// console.log(evenFn(10)); // [2, 4, 6, 8, 10]

// console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]

// console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

/*
 * #5
 *
 * Создайте функцию weekFn(n), которая принимает номер дня недели, а возвращает его название.
 * Если вводится строка, любое дробное число или число вне диапазона 1..7 – функция должна вернуть null.
 *
 * Например:
 * 1 → 'Понедельник'
 * 2 → 'Вторник'
 * ...
 * 7 → 'Воскресенье'
 *
 * В реализации функции обязательно должны быть использованы операторы switch / case / default.
 */
function weekFn(day) {
  let str = '';
  switch (day) {
    case 1:
      str = 'понедельник';
      break;
    case 2:
      str = 'вторник';
      break;
    case 3:
      str = 'среда';
      break;
    case 4:
      str = 'четверг';
      break;
    case 5:
      str = 'пятницa';
      break;
    case 6:
      str = 'суббота';
      break;
    case 7:
      str = 'воскресенье';
      break;
    default:
      str = 'null';
  }
  return str;
}

console.log(weekFn(1)); // 'Понедельник'

console.log(weekFn(3)); // 'Среда'

console.log(weekFn(7)); // 'Воскресенье'

console.log(weekFn(9)); // null

console.log(weekFn(1.5)); // null

console.log(weekFn('2')); // null

/*
 * #6
 *
 * создайте функцию ageClassification(n), которая будет в качестве параметра принимать любые числа
 * и возвращать строку согласно следующим условиям, n:
 *           менее 0 – null
 *             0..24 – 'детский возраст'
 *           24+..44 – 'молодой возраст'
 *           44+..65 – 'средний возраст'
 *           65+..75 – 'пожилой возраст'
 *           75+..90 – 'старческий возраст'
 *          90+..122 – 'долгожители'
 *         более 122 – null
 *
 * При выполнении задания допускается использовать только тернарный оператор ?.
 * Использование операторов if, switch – запрещено.
 */
function ageClassification(n) {
  return n > 0
    ? n > 24
      ? n > 44
        ? n > 65
          ? n > 75
            ? n > 90
              ? n > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}

console.log('-1 :', ageClassification(-1)); // -1 : null

console.log('5 :', ageClassification(5)); // 5 : детский возраст

console.log('34 :', ageClassification(34)); // 34 : молодой возраст

console.log('50 :', ageClassification(50)); // 50 : средний возраст

console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст

console.log('80 :', ageClassification(80)); // 80 : старческий возраст

console.log('110 :', ageClassification(110)); // 110 : долгожители

console.log('130 :', ageClassification(130)); // 130 : null

/*
 * Блок тестирования:
 * console.log(1, ageClassification(-1) === null);
 * console.log(2, ageClassification(1) === 'детский возраст');
 * console.log(3, ageClassification(24) === 'детский возраст');
 * console.log(4, ageClassification(24.01) === 'молодой возраст');
 * console.log(5, ageClassification(44) === 'молодой возраст');
 * console.log(6, ageClassification(44.01) === 'средний возраст');
 * console.log(7, ageClassification(65) === 'средний возраст');
 * console.log(8, ageClassification(65.01) === 'пожилой возраст');
 * console.log(9, ageClassification(75) === 'пожилой возраст');
 * console.log(10, ageClassification(75.01) === 'старческий возраст');
 * console.log(11, ageClassification(90) === 'старческий возраст');
 * console.log(12, ageClassification(90.01) === 'долгожители');
 * console.log(13, ageClassification(122) === 'долгожители');
 * console.log(14, ageClassification(122.01) === null);
 * console.log(15, ageClassification(150) === null);
 */

/*
 * #7
 *
 * Создайте функцию oddFn(n), которая принимает параметром число – количество итераций цикла.
 * Функция должна вернуть массив, состоящий только из нечетных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор while
 *
 * Например:
 * oddFn(10) → [1, 3, 5, 7, 9]
 * oddFn(15) → [1, 3, 5, 7, 9, 11, 13, 15]
 * oddFn(20) → [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 */
function oddFn(n) {
  let arr = [];
  let i = 0;
  while (i++ < n) if (i % 2 !== 0);

  return arr;
}
console.log(oddFn(10)); // [1, 3, 5, 7, 9]

console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]

console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

/*
 * #8
 *
 * Создайте основную функцию mainFunc(a, b, func), которая принимает три параметра:
 * a – число
 * b - число
 * func –  обрабатывающая параметры a и b, возвратная (callback) функция
 *
 * Реализуйте проверку: если третьим параметром передается не функция, нужно вернуть false.
 *
 */

/*
 * реализуйте следующие функции, которые будут осуществлять механизм callback в основной функции,
 * возвращая ей результат собственного вычисления...
 * для возведения в степень и получения произвольного значения можете воспользоваться методами объекта Math.
 */

// cbRandom(a, b) – вычисляет и возвращает произвольное целое число в диапазоне между a и b включительно.

// cbPow(a, b) – вычисляет и возвращает результат возведения числа a в степень b.

// cbAdd(a, b) – вычисляет и возвращает сумму двух чисел a и b.

/*
 * mainFunc() должна возвращать результат работы переданной ей возвратной функции, например:
 * mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
 * mainFunc(10, 30, cbRandom) → случайно 10..30 включительно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

// console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5

// console.log(mainFunc(2, 5, cbPow)); // 32

// console.log(mainFunc(2, 5, cbAdd)); // 7

// console.log(mainFunc(2, 5, 'not a func')); // false

function mainFunc(a, b, callback) {
  if (callback && typeof callback === 'function') return callback(a, b);
  return false;
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}
function cbAdd(a, b) {
  return a + b;
}
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));

console.log('Sample JavaScript #3 HW #17');

var counter = (function () {
  let count = 0;
  return function (num) {
    count = num === undefined ? count : num;
    return count++;
  };
})();

console.log(counter());

console.log(counter());

console.log(counter(100));

console.log(counter());

console.log(counter(500));

console.log(counter());

console.log(counter(0));

console.log(counter());

let counting = (function () {
  let count = 0;

  return {
    value(num) {
      if (num !== undefined) count = num;
      return count;
    },
    decrement() {
      count--;
    },
    increment() {
      count++;
    },
  };
})();

console.log(counting.value()); // 0

counting.increment();

counting.increment();

counting.increment();

console.log(counting.value()); // 3

counting.decrement();

counting.decrement();

console.log(counting.value()); // 1

console.log(counting.value(100)); // 100

counting.decrement();

console.log(counting.value()); // 99

console.log(counting.value(200)); // 200

counting.increment();

console.log(counting.value());

let myPrint = (a, b, res) => `${a}^${b}=${res}`;
let myPow = (a, b, callback) => {
  let pow = (x, n) => {
    if (n !== 1) return (x *= pow(x, n - 1));
    return x;
  };
  return callback(a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint)); // 3^4=81

console.log(myPow(2, 3, myPrint)); // 2^3=8










 
 
 
function FullInfo() {
  return `${this.name} ${this.model}, ${this.engine}, ${this.year}cc, year ${this.used}`
}
let yearNow = new Date().getFullYear();

let car = {
  engine:  2560,
  model:  'X5',
  name:  'BMW',
  year:  2010,
  info: FullInfo,
    get used() {
      return this.year !== yearNow ? 'used' : 'new';
    },
    
    set used (value) {
      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  };


let car2 = {
  engine:  3000,
  model:  'Logan',
  name:  'Dachia',
  year:  2018,
  info: FullInfo,
  get used() {
    return  yearNow - this.year ? 'used' : 'new';
  },
  set used (value) {
    if ( value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};




//  * #5
//  *
//  * Для созданных ранее объектов определите метод info(), используя ключевое слово this.
//  * данный метод должен формировать и возвращать строку с полной информацией об автомобиле, например:
//  * Chevrolet Lacetti, 2000cc, year 2010, used
//  * Infinite FX50 AWD, 5000cc, year 2019, new
//  * пробелы, запятые, символы cc и текст – имеют значение и проверяются при тестировании кода
 




//  * #6
//  *
//  * Для созданных ранее объектов измените свойство used, используя аксессоры (геттер и сеттер).
//  * - используйте текущий год либо непосредственно в своем коде, либо с помощью глобальной переменной, например, yearNow
//  * - если год выпуска автомобиля отличается от текущего года, геттер used должен выводить текст 'used'
//  * - если год выпуска автомобиля совпадает с текущим годом, геттер used должен выводить текст 'new'
//  * - если сеттеру used присвоено значение 'new', при этом года выпуска автомобиля отличается от текущего года,
//  * - необходимо изменить год выпуска автомобиля, установив в качестве значения текущий год
//  * - если сеттеру used присвоено значение 'used', ничего делать не нужно
//  */

// let yearNow = new Date().getFullYear(); // получить текущий год как число

console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used

car.used = 'new';

console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- год изменен

car.used = 'used';

console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- изменения не выполняются

console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new

car.used = 'used';

console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new -- изменения не выполняются

/*
 * #7
 * Создайте функцию myMax(arr), которая в качестве параметра принимает
 * произвольный числовой массив и возвращает максимальное число из переданного ей массива.
 * В реализации функции должен быть применен метод Math.max() и apply().
 */

let list = [12, 23, 100, 34, 56, 9, 233]; 
let myMax = (arg) => Math.max.apply(Math, arg);



console.log(myMax(list)); // 233

// *
//  * #8
  // Создайте функцию myMul(a, b), которая будет умножать числа а и b, возвращая результат.

function myMul(a, b) {

  return a * b;
};
let myDouble = myMul.bind(null, 2);
let myTriple = myMul.bind(null, 3);

/*
 * создайте функции myDouble(n), которая принимает один параметр и  удваивает его.
 * Использовать умножение или другие математические операции внутри функции – запрещено, только bind() и myMul().
 * Функция возвращает результат вычисления.
 */

console.log(myDouble(3)); // = myMul(2, 3) = 6

console.log(myDouble(4)); // = myMul(2, 4) = 8

console.log(myDouble(5)); // = myMul(2, 5) = 10

// аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.

console.log(myTriple(3)); // = myMul(3, 3) = 9

console.log(myTriple(4)); // = myMul(3, 4) = 12

console.log(myTriple(5)); // = myMul(3, 5) = 15

// *
//  * #9
//  *
//  * Постройте функцию myUniq(arr), которая будет принимать произвольный массив
//  * повторяющихся примитивных значений (например, имена пользователей или числа ).
//  * Функция должна вернуть коллекцию уникальных значений.
//  * В реализации разрешено использование set.
//  * Любые условные операторы – запрещены и объекты.
 
let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];


function myUniq() {
  set used (value) {
    if ( value  'new' && this.year < yearNow) this.year = yearNow;
  }
}





console.log(myUniq(notUniqNums));

console.log(myUniq(notUniqStrings));




/*
 * #1
 *
 * Создайте переменные со значениями
 */

var myNum = 10

var myStr = 'строка'

var myBool = true

var myArr = [1, 2, 3, 4, 5]

var myObj = {first: 'First Name', last: 'Last Name'}

  
//   2
//     *
//  * Отформатируйте целое число, которое хранится в переменной myNum,
//  * чтобы получить результат с 2 знаками после запятой.
//  * Результат сохраните в переменную decimal2.
//  * /
 
 

var decimal2 = myNum.toFixed(2);

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

i = 20 
console.log(++i);
console.log(i++);
console.log(--i);
console.log(i--);

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

var myTest = 20
myTest += myNum
 console.log( '+=' , myTest ); 
 myTest -= myNum
console.log( '–=' , myTest); 
myTest *= myNum
console.log('*=' , myTest);  
myTest /= myNum
console.log( '/=' , myTest); 
myTest %= myNum
console.log( '%=' , myTest); 

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi

// округленное значение числа 89.279 → myRound

// случайное число между 0..10 → myRandom

// 3 в 5 степени → myPow

var myPi = Math.PI; 
var myRound = Math.round(89.279); 
var myRandom = Math.random() * 10; 
var myPow = Math.pow(3, 5);


/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// Мама мыла раму, рама мыла маму
var strObj = {str: 'Мама мыла раму, рама мыла маму'};

strObj.length = strObj.str.length;
console.log('strObj = ', strObj);


/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */
var isRamaPos = strObj.str.indexOf('рама');



/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */
var strObj = {str: 'Мама мыла раму, рама мыла маму'};


 var strReplace = strObj.str.replace('мыла', 'моет');

 strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');


 

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */


 
var str = 'any string'
console.log('any string'.toUpperCase());

var str = 'any string'
console.log('any string'.toLowerCase());




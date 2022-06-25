/*1) Дан массив с числами: -5,  10,  5, 55,  -1, 22,  -4 , 36, -45:
   Оставьте в нем только отрицательные числа.*/

const muArr = [-5,  10,  5, 55,  -1, 22,  -4 , 36, -45];

const filterArr = muArr.filter(item => item < 0);
console.log(filterArr);

/*2) Дан массив с числами. Сделайте из него массив,
   состоящий из квадратов этих чисел.

  Для этих задач используем соответствующие методы*/

const numbers = [ 1,2,4];

const numbersSquare = numbers.map(item => item * item);
console.log(numbersSquare);


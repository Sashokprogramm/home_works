/*1) Напишите функцию mul(n,m), которая принимает два аргумента и возвращает
   произведение этих аргументов.*/

const showResult = (n,m) => n * m;
let result = showResult(2,3);
console.log(result);

/*2) Создайте функцию и с помощью цикла найдите факториал числа 7:
   Название для функции можно дать любую.
   Например при вызове функции factorial с параметром 7 в консоли должно
   вывести следующее:*/

const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++){
    result *= i;
    }
    return result;
}
console.log(factorial(7));
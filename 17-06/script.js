/*1) Дан массив с элементами [2, 3, 4, 5, 6, 7].
   С помощью цикла for найдите произведение элементов этого массива.
   Общий результат сохранить в объекте с соответствующим свойством.
   Например: 2 * 3 = 6 -> 6 * 4 и.т.д.*/

const numbers = [2, 3, 4, 5, 6, 7];
const resNum = {
    result:1,
}
for (let i = 0; i < numbers.length;i++){
    resNum.result *= numbers[i];
}
console.log(resNum);

/*2) Напишите функцию, которая разворачивает массив в обратном порядке
   и затем ее возвращает.  Функция наша  принимает массив любых элементов.
   Например:
   const data = [1, 2, 3];
   myFunc(data);  // [3, 2, 1];*/

const ShowArray = (a) => {
    a.reverse();
    return a;
}
let result = ShowArray([2,1,3]);
console.log(result);
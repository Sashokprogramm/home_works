/*1) Напишите функцию, который будет выводить сообщение “Hello World” раз в секунду,
   но всего 5 раз. После 5 итераций скрипт должен вывести сообщение “Done”,
   после чего процесс завершится.
   При решении данной задачи нельзя вызывать setTimeout.*/
let time = 0;
const timerId = setInterval(() => {
    alert('Hello World');
    time += 1;
    if (time === 5){
        alert('Done');
        clearTimeout(timerId);
    }
}, 1000);


/*2) Составьте программу, которая принимает с клавиатуры числа,
   пока не будет введено значение 999. Программа должна подсчитать,
   сколько чисел было введено с клавиатуры, чему равна сумма этих чисел
   (не считая значения 999), и вывести эту информацию на экран.
   ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290*/

let quantity = 0;
let sum = 0;
let questions = +prompt('Введите число');
while (questions != 999){
    quantity += 1;
    sum += questions;
    questions = +prompt('Введите число');
}
alert('Кол-во ='+quantity);
alert('Сумма ='+sum);2


























/*************** Practical work ****************/
/*1) Напишите функцию, которая заполняет новый массив предоставленным значением и затем ее возвращает. Функция должна первым параметром принимать элемент (значение для массива), вторым параметром размер массива.
    Например: myFunc('a', 3)   // ['a', 'a', 'a']*/

function showDimensions(meaning, dimensions) {
    let newArr = [];
    for (let i = 0; i < dimensions ;i++){
        newArr.push(meaning);
    }
    return newArr;
}
console.log(showDimensions('i',2));

/*2)*/
function showEstimates(valuation, examination, name ,subject) {
    if (valuation >= 90 || examination >= 10){
        console.log(`У ${name} по предмету ${subject} 100 баллов`);
    } else if (valuation >= 75 && examination >= 5){
        console.log(`У ${name} по предмету ${subject} 90 баллов` );
    } else if (valuation >= 50 && examination >= 2){
        console.log(`У ${name} по предмету ${subject} 75 баллов` );
    } else if (valuation >= 30 && examination >= 1){
        console.log(`У ${name} по предмету ${subject} 50 баллов` );
    } else{
        console.log(`У ${name} по предмету ${subject} 0 баллов` );
    }
}
console.log(showEstimates(0,1,'Sasha','Match'));

/*************** Home work ****************/
//                     First task
//    Заполните массив 10-ю иксами с помощью цикла.    [x,x...]

const newArr = [];
for (let i  = 0;i < 10; i++){
    newArr.push('x');
}
console.log(newArr);

//                     Second task
/*   У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99.
   С помощью цикла for и оператора if нужно проверить есть ли в массиве число
   со значением, равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!'*/

const numbers = [1, 2, 115, 4, 58, 5 ,7 ,99];
for (let i = 0; i < numbers.length ; i++){
    if (numbers[i] === 4){
        console.log('ЕСТЬ!!!');
    }
}

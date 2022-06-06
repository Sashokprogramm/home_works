/***********  Practical task **************/
/*const my_car = {
    name:'Subaru',
    model:'Impreza',
    color:'blue'
}
for(let options in my_car){
    if (my_car[options] === 'blue' ) {
        delete my_car[options];
    }

}
console.log(my_car);*/

/************* First task ************/
/*const numbers = [0, 4, 7, 9, 10];
for ( let i in numbers){
    if (numbers[i] > 0 && numbers[i] < 10) {
        console.log(numbers[i]);
    }
}*/
/************* Second task ************/
/*const numbers = [1,2,5,6,88,5];
let result = 0;
for (let i = 0; i < numbers.length ; i++ ){
    result += numbers[i];

}
console.log(result);*/


/************* Third task ************/

const numbers = [1,2,3,4,5,6,7,8,9,10];
let result = 0;
for (let i = 0; i < numbers.length ; i++ ){
    result += numbers[i] * numbers[i];

}
console.log(result);

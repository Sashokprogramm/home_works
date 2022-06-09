/********* Class work **** ************/
/*
function showSum(arrayFirst,arraySecond) {
    let sumArrayFirst = 0;
    let sumArraySecond = 0;

    for (let keys of arrayFirst) {
        sumArrayFirst += keys;
    }
    for (let keysFirst of arraySecond) {
        sumArraySecond += keysFirst;
    }
    console.log(sumArrayFirst + sumArraySecond);
}
showSum([2,4,6,8],[2,8,9,7,0]);*/


/***************** First task **************/
/*function hello() {
   alert('Hello ,JS');
}
hello();*/
/***************** Second task **************/
/*
let result = 0;
function showCube(number) {
    result += number * number * number;
    alert(result);
}
showCube(10);*/
/****************** Third task**************************/

function getName(name) {
    if (name === undefined){
        alert( 'Hello guest')
    } else{
        alert( 'Hello '  + name);
    }


}
getName('Vasily');
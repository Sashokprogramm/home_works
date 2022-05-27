/*
const whoIs = prompt('Кто пришел?', 'Админ');

if(whoIs === 'Админ' ){
    const password = prompt('Пароль?');

    if(password === "Черный Властелин"){
        alert('Добро пожаловать!');
    } else if(password === null){
        alert('Вход отменен');
    }else {
        alert('Пароль неверен');
    }
} else if(whoIs === null) {
    alert('Вход отменен');
} else{
    alert("Я вас не знаю");
}*/


const test = true;

if(test !== true){
    alert('Верно')
} else{
    alert('Неверно')
}


const result = test !== true ? 'Верно' : 'Неверно';
alert(result);

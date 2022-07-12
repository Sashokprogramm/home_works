/*1) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику
   на картинку алертом выводился ее описание.*/
const showInfoDog = () => {
    alert('The picture shows a dog.');
}
const showInfoBeach = () => {
    alert('The picture shows a beach.')
}
const photo = document.querySelector('#photo1');
photo.onclick = showInfoDog;
const photo2 = document.querySelector('#photo2');
photo2.onclick = showInfoBeach;

/*2) Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку выведите
   куда данная ссылка ссылается.*/
const showLink = () => {
    alert('This link takes you to the Google site.');
}
const link_site = document.querySelector('#link');
link_site.onmouseenter = showLink;

/*3) Напишите функцию, которая объединяет несколько строк и возвращает их.
   Используйте глобальный массив arguments.*/
let firstString = 'hello';
let secondString = 'Sasha'
const combiningStrings = () => {
    let combining = firstString + secondString ;
    return combining;
}
const result = combiningStrings();
console.log(result)
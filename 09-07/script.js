//         first task
const btn = document.querySelector('#btn');
const container = document.querySelector('#container');
const createElement = () => {
    const element = document.createElement('div');
    element.innerText = 'Hello';
    container.append(element); // добавляет узлы или строки в конец
    container.prepend(element); //  вставляет узлы или строки в начало
    container.before(element); // вставляет узлы или строки до container
    container.after(element); // вставляет узлы или строки после container
}
btn.addEventListener('click',createElement);




//            second task
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

function showNotification(options) {
   let notification = document.createElement('div');
   notification.className = `notification ${options.className}`;
   notification.innerText = options.html;
   document.body.append(notification);
   setTimeout(() => notification.remove(),1500);
}
btn1.addEventListener('click', () => {
    showNotification({
        html:'Hello my name is Sasha',
        className:'info'
    })
})
btn2.addEventListener('click', () => {
    showNotification({
        html:'WARNING! WARNING!',
        className:'warning'
    })
})
btn3.addEventListener('click', () => {
    showNotification({
        html:'Ready!',
        className:'success'
    })
})
btn4.addEventListener('click', () => {
    showNotification({
        html:'DANGEROUS!',
        className:'danger'
    })
})

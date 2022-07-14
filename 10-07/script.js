/*********** ShowNotification ************/
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

//                first task
const img = document.querySelector('#img')
const showImg = () => {
    let question =  prompt('Введите ваше имя!');
    if (question){
        alert(`Здравствуйте ${question}`);
        img.src = ('./img/smile.png');

    }

}
img.addEventListener('click', showImg);

//             Second task
const start = document.querySelector('#start_btn');
const stop = document.querySelector('#stop_btn');
const time = document.querySelector('#time');

let intervalTimer;
let min = 0;
const startTimer = () => {
    intervalTimer = setInterval(showTimeText , 1000);
    function showTimeText() {
        min++;
        time.innerText = min;

    }
}
const stopTimer = () => {
    clearInterval(intervalTimer);
}
start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);

//                     First task
const container = document.querySelector('#div_site');

container.addEventListener('click', () => {
    container.classList.toggle('background-color');
})

//                     Second task
const btn1 = document.querySelector('#btn');
function showNotification(options) {
    let notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = options.html;
    document.body.append(notification);
    setTimeout(() => notification.remove(), 1500);
}
btn1.addEventListener('click', () => {
    showNotification({
        html:'Hello',
    })
})













/*const showNotification = ({html}) => {
   const notification = document.createElement('div');
   notification.className = 'notification';
   notification.innerText = html;
   document.body.append(notification);
   setTimeout(() => notification.remove(), 1500);
}
showNotification({
    html: 'hello',
},)*/










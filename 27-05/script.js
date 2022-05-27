let number = 0;
const start = confirm('Сыграем?');
if (start === true){
    const go = confirm('За каждый правельный ответ тебе будет начисленно 1 балл)');
    if (go === true ){
        const question = prompt('Ваш город ... ?');
        if (question === 'Бишкек'){
            alert('Верно! + 1Балл' )
            number++;
        }else{
            alert("Неверно(")
        } const question2 = prompt('Ваша страна ... ?');
        if (question2 === 'Кыргызстан'){
            alert('Верно! + 1Балл' )
            number++;
        }else{
            alert("Неверно(")
        } alert ('У вас ' +number+ '  баллов' )
    }
} else {
    alert('Жаль что ты уходишь :(');
}



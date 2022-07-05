const showDesc = (event) => {
    alert(event.target.alt);
}

const photo = document.querySelectorAll('#images_site img');
console.log(photo);

for (let i = 0;i < photo.length ; i++){
    photo[i].addEventListener('click', showDesc);
}
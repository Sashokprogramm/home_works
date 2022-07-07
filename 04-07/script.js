const showDesc = (event) => {
    alert(event.target.alt);
}

const photos = document.querySelectorAll('#images_site img');

for (let i = 0;i < photos.length ; i++){
    photos[i].addEventListener('click', showDesc);
}
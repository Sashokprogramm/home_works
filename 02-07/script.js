/*1) ���� ��������. ��������� � ������ �������� �������, ����� �� �����
   �� �������� ������� ��������� �� ��������.*//*
const showInfoDog = () => {
    alert('The picture shows a dog.');
}
const showInfoBeach = () => {
    alert('The picture shows a beach.')
}
const photo = document.querySelector('#photo1');
photo.onclick = showInfoDog;
const photo2 = document.querySelector('#photo2');
photo2.onclick = showInfoBeach;*/

/*2) ���� ������. ��������� ���� ������� ������� - �� ��������� �� ������ ��������
   ���� ������ ������ ���������.*/
/*const showLink = () => {
    alert('This link takes you to the Google site.');
}
const link_site = document.querySelector('#link');
link_site.onmouseenter = showLink;*/

/*3*/
function ShowString() {
    let z = '';
    for (let i = 0; i < arguments.length;i++){
        z += arguments[i];
    }
    console.log(z);
}
ShowString('hello','Sasha');





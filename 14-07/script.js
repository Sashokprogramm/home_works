const p = document.querySelector('#p');

const productCard = [
    {
        id:1,
        name:"Iphone 13 pro max",
        image_url:"https://istore.kg/media/products/iphone-13-pro-max-green-select.webp",
        price:100250
    },
    {
        id:2,
        name:"Iphone 13 pro",
        image_url:"https://istore.kg/media/products/iphone-13-pro-blue-select.webp",
        price:97000
    }
]
let del = '';
for (let key in productCard){
    del += 'id товара :' +productCard[key].id + '<br>'  ;
    del += 'Имя товара:' +productCard[key].name + '<br>' ;
    del += 'Цена товара:' +productCard[key].price + '<br>' ;
    del += '<img src = "' +productCard[key].image_url +'">' ;
    p.innerHTML = del;
}

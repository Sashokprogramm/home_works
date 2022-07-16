const users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            "suite": "Apt. 556",
            city: "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },/*{
        id: 2,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            "suite": "Apt. 556",
            city: "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },{
        id: 3,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            "suite": "Apt. 556",
            city: "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },{
        id: 4,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            "suite": "Apt. 556",
            city: "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },{
        id: 5,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            "suite": "Apt. 556",
            city: "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },{
        id: 6,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            "suite": "Apt. 556",
            city: "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },*/
]

const showUsersCards = (users) => {
    users.forEach((object) => {
        const container = document.querySelector('#users-cards');

        const div = document.createElement('div');
        div.className = 'item';

        const img_user = document.createElement('img');
        img_user.src="./img/account_circle_FILL0_wght400_GRAD0_opsz48%20(1).svg";
        img_user.className = 'user';

        const h1 = document.createElement('h1');
        h1.innerText = object.name;
        h1.className = 'name';

        const p_userName = document.createElement('p');
        p_userName.innerText = object.username;
        p_userName.className = 'username';


        const mail_img = document.createElement('img');
        mail_img.src="./img/mail_FILL0_wght400_GRAD0_opsz48%20(1).svg";
        mail_img.className = 'mail-img';

        const p_mail = document.createElement('p');
        p_mail.innerText = ` @${object.email} `;
        p_mail.className = 'mail';

        const home_img = document.createElement('img');
        home_img.src="./img/home_FILL0_wght400_GRAD0_opsz48.svg";
        home_img.className = 'home-img';

        const p_home = document.createElement('p');
        p_home.innerText = `${object.address.street} . ${object.address.city}` ;
        p_home.className = 'home';


        const call_img = document.createElement('img');
        call_img.src="./img/call_FILL0_wght400_GRAD0_opsz48.svg";
        call_img.className = 'call-img';

        const call = document.createElement('p');
        call.innerText = object.phone;
        call.className = 'call';

        const company_img = document.createElement('img');
        company_img.src="./img/store_FILL0_wght400_GRAD0_opsz48.svg";
        company_img.className = 'company-img';

        const company = document.createElement('p');
        company.innerText = object.company.name;
        company.className = 'company';

        div.append(img_user ,h1, p_userName  ,mail_img ,p_mail ,home_img , p_home , call_img ,call , company_img ,company,);
        container.append(div);
    })
}
showUsersCards(users);

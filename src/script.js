import './style.css'
import salsicciaImg from '../images/pizzas/salsiccia.png';
import gamberiImg from '../images/pizzas/gamberi.png';
import pepeImg from '../images/pizzas/pepe.png';
import disgustosoImg from "../images/pizzas/disgustoso.png";
import coloratoImg from "../images/pizzas/colorato.png";
import pomodoroImg from "../images/pizzas/pomodoro.png";
import cremaImg from "../images/pizzas/crema.png";
import carneImg from "../images/pizzas/carne.png";
import locationImg from "../images/location.png";
import chefImg from "../images/chef.png";

const pizzas = [
    {
        link: salsicciaImg,
        heading: "Salsiccia",
        info: "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    },
    {
        link: gamberiImg,
        heading: "Gamberi",
        info: "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    },
    {
        link: pepeImg,
        heading: "Pepe",
        info: "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    }, {
        link: disgustosoImg,
        heading: "Disgustoso",
        info: "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    }, {
        link: coloratoImg,
        heading: "Colorato",
        info: "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    }, {
        link: pomodoroImg,
        heading: "Pomodoro",
        info: "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    }, {
        link: cremaImg,
        heading: "Crema",
        info: "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    }, {
        link: carneImg,
        heading: "Carne",
        info: "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    },
];

let homeOpen = true;
let menuOpen = false;
let contactOpen = false;

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

let lastOpen = home;
let main = document.querySelector('main');
home.style.borderBottom = "2px solid white";

menu.addEventListener('click', menuClick);
function menuClick() {
    if (menuOpen === false) {
        menuOpen = true;
        contactOpen = false;
        homeOpen = false;

        lastOpen.style.borderBottom = "0px";
        menu.style.borderBottom = "2px solid white";
        main.remove();

        main = document.createElement('main');
        main.classList.add('menu-main');
        document.body.insertBefore(main, document.querySelector('footer'));

        const menuDiv = document.createElement('div');
        menuDiv.setAttribute("id", "menu-div");
        main.appendChild(menuDiv);

        pizzas.forEach((element) => {
            const pizzaDiv = document.createElement('div');
            pizzaDiv.setAttribute("id", "pizza-div");
            menuDiv.appendChild(pizzaDiv);
            if (element == pizzas[0] || element == pizzas[1]) {
                pizzaDiv.style.marginTop = "40px";
            }

            const pizzaImg = document.createElement('img');
            pizzaImg.src = element.link;
            pizzaImg.classList.add('pizza-img');
            pizzaDiv.appendChild(pizzaImg);

            const pizzaHeading = document.createElement('h2');
            pizzaHeading.textContent = element.heading;
            pizzaDiv.appendChild(pizzaHeading);

            const pizzaPara = document.createElement('p');
            pizzaPara.textContent = element.info;
            pizzaPara.style.padding = "0px 50px";
            pizzaDiv.appendChild(pizzaPara);
        })
        lastOpen = menu;
    }
}

contact.addEventListener('click', contactClick);
function contactClick() {
    if (contactOpen === false) {
        homeOpen = false;
        menuOpen = false;
        contactOpen = true;

        lastOpen.style.borderBottom = "0px";
        contact.style.borderBottom = "2px solid white";
        main.remove();

        main = document.createElement('main');
        document.body.insertBefore(main, document.querySelector('footer'));

        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact-div')
        main.appendChild(contactDiv);

        const contactPara = document.createElement('p');
        contactPara.textContent = "📞 123 456 789";
        contactDiv.appendChild(contactPara);

        const contactAddress = document.createElement('p');
        contactAddress.textContent = "🏠 Ratia, Haryana";
        contactDiv.appendChild(contactAddress);

        const addressImg = document.createElement('img');
        addressImg.src = locationImg;
        addressImg.classList.add('address-img')
        contactDiv.appendChild(addressImg);

        lastOpen = contact;
    }
}

home.addEventListener('click', homeClick);
function homeClick() {
    if (homeOpen === false) {
        homeOpen = true;
        menuOpen = false;
        contactOpen = false;

        lastOpen.style.borderBottom = "0px";
        home.style.borderBottom = "2px solid white";
        main.remove();

        main = document.createElement('main');
        document.body.insertBefore(main, document.querySelector('footer'));

        const homeDiv = document.createElement('div');
        homeDiv.setAttribute("id", "home-div");
        main.appendChild(homeDiv);

        const homePara1 = document.createElement('p');
        homePara1.textContent = "Best pizza in your country";
        homeDiv.appendChild(homePara1);

        const homePara2 = document.createElement('p');
        homePara2.textContent = "Made with passion since 1908";
        homeDiv.appendChild(homePara2);

        const homeImg = document.createElement('img');
        homeImg.src = chefImg;
        homeImg.alt = "A chef with white apron";
        homeImg.setAttribute("id", "home-img");
        homeDiv.appendChild(homeImg);

        const homePara3 = document.createElement('p');
        homePara3.textContent = "Order online or visit us!";
        homeDiv.appendChild(homePara3);

        lastOpen = home;
    }
}
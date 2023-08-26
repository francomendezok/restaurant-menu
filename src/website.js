// First Load of the Page //
import '../dist/style.css';
import Background from '../dist/Images/huge.jpg';
import loadContact from './contact';
import loadHome from './home';
import loadMenu from './menu';

function createHeader () {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');

    h1.innerHTML = "OBLIVION RESTAURANT";
    h1.classList.add('h1');
    header.classList.add('header');
    setContainer().appendChild(header);
    header.appendChild(h1);
    header.appendChild(createNav());
    return header;
}

function createNav () {
    const arr = ['Home','Menu','Contact'];
    const nav = document.createElement('nav');
    let btns = [];
    let home = true;
    let menu = false;
    let contact = false;

    
    for (let i = 0; i < 3; i++) {
        const btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerHTML = arr[i];
        btn.id = arr[i].toLowerCase();
        nav.appendChild(btn);
        btns.push(btn);
        if (btn.id === "home") btn.classList.add('selected');
    };

    
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            btns.forEach(otherBtn => {
                otherBtn.classList.remove('selected');
            });
    


            btn.classList.add('selected');
            if (btn.id === 'home' && !home) {
                contact = false;
                home = true;
                menu = false;
                loadHome();
            }
            if (btn.id === 'menu' && !menu) {
                contact = false;
                home = false;
                menu = true;
                loadMenu();
            }
            if (btn.id === 'contact' && !contact) {
                contact = true;
                home = false;
                menu = false;
                loadContact();
            }
            
        });
    });

    nav.classList.add('nav');
    return nav;
}

function createMain () {
    const main = document.createElement('main');
    main.classList.add('main');
    setContainer().appendChild(main);
    return main;
}

function createFooter () {
    const footer = document.createElement('footer');
    const h3 = document.createElement('h3');

    h3.innerHTML = "Best Luxury Restaurant in 2023";
    h3.classList.add('h3');
    footer.classList.add('footer');
    footer.appendChild(h3);
    setContainer().appendChild(footer);
    return footer;
}

function setContainer () {
    const content = document.getElementById("content")
    content.classList.add("container");
    document.body.appendChild(content);
    return content;
 }

 function printScreen () {
    const container = setContainer();
    container.appendChild(createHeader());
    container.appendChild(createMain());
    container.appendChild(createFooter());
    loadHome();
    return container;
 }

 export default printScreen;

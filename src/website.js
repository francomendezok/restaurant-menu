// First Load of the Page //
import '../dist/style.css';
import Background from '../dist/Images/huge.jpg';
import Diamante from '../dist/Images/diamante.png';

function createHeader () {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');

    h1.innerHTML = "Oblivion Restaurant";
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
    for (let i = 0; i < 3; i++) {
        const btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerHTML = arr[i];
        nav.appendChild(btn);
    }
    nav.classList.add('nav');
    return nav;
}

function createMain () {
    const main = document.createElement('main');
    const diamond = document.createElement('div');
    diamond.classList.add('diamond');
    main.appendChild(diamond)
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
    return container;
 }

 printScreen();

 export {printScreen}
// Export Header, Main and Footer // 
// Export function that load page //
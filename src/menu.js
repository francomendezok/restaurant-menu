function loadMenu () {
    const menu = new Image();
    const main = document.querySelector('.main');
    menu.src = '../dist/Images/menu.png';
    menu.classList.add('menu');
    main.innerHTML = '';
    main.appendChild(menu);
    return main;
}

export default loadMenu;
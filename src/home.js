function createHome () {
    const home = document.createElement('div');
    const h1 = document.createElement('h1');
    const parragraph = document.createElement('p');
    const photo = new Image();
    photo.src = 'Images/wine.jpg';
    photo.classList.add('photo');

    parragraph.textContent = "Serving Great People with Great Food Since 1970"
    parragraph.classList.add('h3');
    h1.textContent = "Best Steak and Wine in Town";
    h1.classList.add('h1');
    
    home.appendChild(h1);
    home.appendChild(photo);
    home.appendChild(parragraph);
    home.classList.add('home');
    return home;
}


function loadHome () {
    const main = document.querySelector('.main');
    const home = createHome();
    main.innerHTML = '';
    main.appendChild(home);
    return main;
}













export default loadHome;
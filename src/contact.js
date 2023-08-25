function createContact () {
    const contact = document.createElement('div');
    const h1 = document.createElement('h1');
    const iframe = document.createElement('iframe');
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0044412698967!2d-3.690908623285859!3d40.45303867143381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2sEstadio%20Santiago%20Bernab%C3%A9u!5e0!3m2!1ses!2sar!4v1692978877683!5m2!1ses!2sar";
        iframe.width = '80%';
        iframe.height = '80%';
        iframe.style.borderRadius = '6px';
        iframe.allowFullscreen = true;
        iframe.loading = 'eager';
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
    const parragraph = document.createElement('p');

    parragraph.textContent = "Telephone Number: 123456789"
    parragraph.classList.add('h3');
    h1.textContent = "INFORMATION";
    h1.classList.add('h1');
    
    contact.appendChild(h1);
    contact.appendChild(parragraph);
    contact.appendChild(iframe);
    contact.classList.add('contact');
    return contact;
}


function loadContact () {
    const main = document.querySelector('.main');
    const contact = createContact();
    main.textContext = '';
    main.appendChild(contact);
    return main;
}

export default loadContact;





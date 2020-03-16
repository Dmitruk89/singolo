// navigation

document.querySelector('.header__navigation').addEventListener('click', selectNavigationLink);

function selectNavigationLink(event) {
    document.querySelectorAll('.navigation__link').forEach( element => {
        element.classList.remove('active');
    });

    if (event.target.tagName === "A") {
        event.target.parentElement.classList.add('active');
    }
}

// slider

document.querySelectorAll(".phone__btn").forEach( element => {
    element.addEventListener('click', () => {
        let phoneScreen = element.parentElement.querySelector('.phone__screen');
        if (phoneScreen.style.opacity === "0"){
            phoneScreen.style.opacity = "1";
        } else {
            phoneScreen.style.opacity = "0";
        }
    });
});

// portfolio

document.querySelector(".portfolio__gallery").addEventListener('click', selectGalleryItem);

function selectGalleryItem(event) {
    if(event.target.parentElement.classList.contains('gallery__item')) {
        this.querySelectorAll('.selected').forEach( element => {
            element.classList.remove('selected');
        });
        event.target.classList.add('selected');
    } 
    
}
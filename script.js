document.querySelector('.header__navigation').addEventListener('click', selectNavigationLink);

function selectNavigationLink(event) {
    document.querySelectorAll('.navigation__link').forEach( element => {
        element.classList.remove('active');
    });

    if (event.target.tagName === "A") {
        event.target.parentElement.classList.add('active');
    }
}
// navigation

let burgerButton = document.querySelector(".hamburger");
let navigation = document.querySelector(".header__navigation");
let logo = document.querySelector(".header__logo");

burgerButton.addEventListener('click', showNavigation);

function showNavigation(event){
    burgerButton.classList.toggle('hamburger_active');
    navigation.classList.toggle('navigation_visible');
    logo.classList.toggle('logo_visible');
} 

document.addEventListener('scroll', activeOnScroll);

function activeOnScroll(event){
    let navLink = document.querySelectorAll('.navigation__link a');
    let currentPosition = window.scrollY;
    let sections = document.querySelectorAll('section');

     sections.forEach((el) => {
         if(el.offsetTop - 100 <= currentPosition && (el.offsetTop + el.offsetHeight - 100) > currentPosition){
             navLink.forEach((a) => {
                 a.classList.remove('active');
                 if(el.firstElementChild.getAttribute('name') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                 };
             })
         }
     });
};


// slider

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
    console.log(currentSlide);
}

function hideSlide(direction) {
    isEnabled = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function(){
        this.classList.remove('active', direction);
    })
}

function showSlide(direction) {
    
    slides[currentSlide].classList.add('next', direction);
    slides[currentSlide].addEventListener('animationend', function(){
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}



function previousSlide(n) {
    hideSlide('to-right');
    changeCurrentSlide(n - 1);
    showSlide('from-left');
}

function nextSlide(n) {
    hideSlide('to-left');
    changeCurrentSlide(n + 1);
    showSlide('from-right');
}

document.querySelector('.slider__arrow.arrow_left').addEventListener('click', function(){
    if (isEnabled){
        previousSlide(currentSlide);
    }
});

document.querySelector('.slider__arrow.arrow_right').addEventListener('click', function(){
    if (isEnabled){
        nextSlide(currentSlide);
    }
});

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

document.querySelectorAll('.tab').forEach((element) => {
    element.addEventListener('click', tabSelection);
});


function tabSelection(event) {
    
    document.querySelectorAll('.tab').forEach( element => {
        element.classList.remove('tab_selected');  
    });

    event.target.classList.add('tab_selected');
    
    let gallery = document.querySelector('.portfolio__gallery');
    let pictures = document.querySelectorAll('.gallery__item');

    for (let i = pictures.length - 2; i >= 0; i--){
        gallery.appendChild(pictures[i]);
    }
}

// get a quote

document.getElementById('modal-btn').addEventListener('click', hideModalWindow);

function hideModalWindow(event){
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.get-a-quote__form').reset();
}

document.querySelector('.get-a-quote__form').addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();

    let subject = document.getElementById('subject').value;
    let description = document.getElementById('description').value;

    document.querySelector('.modal').style.display = 'flex';

    document.querySelector('.modal__text').innerHTML = `The letter was sent <br>
    ${!!subject ? 'Subject: ' + subject : 'Without subject'}<br>
    ${!!description ? 'Description: ' + description : 'Without description'}`;


}
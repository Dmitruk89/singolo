// navigation

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
    
}

// get a quote

document.getElementById('modal-btn').addEventListener('click', hideModalWindow);

function hideModalWindow(event){
    document.querySelector('.modal').style.display = 'none';
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
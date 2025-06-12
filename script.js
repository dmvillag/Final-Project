"use strict";

//Dark & Light Mode- Selects mode and check stores it
const themeSwitch = document.getElementById('theme-switch');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {  //Applies the stored theme on page
    document.body.classList.add('dark-theme');
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', function() {    //Toggles between modes when clicked
    if (this.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

//Function Gallery- Changes photo and description in the gallery when a button is clicked.y//
const images = [
    {
        src: 'images/nature.jpg',
        description: 'A beautiful nature scene.     01/26/2023'
    },
    {
        src: 'images/architecture.jpg',
        description: 'A stunning piece of architecture.     10/03/2024'
    },
    {
        src: 'images/cat.jpg',
        description: 'Looking at you... meow!.  10/03/2024'
    },
    {
        src: 'images/trees.jpg',
        description: 'Breathe...   05/01/2023'
    },
    {
        src: 'images/old.jpg',
        description: 'Life & Death.     05/26/2023'
    },
    {
        src: 'images/blueberry.jpg',
        description: 'Macro-berry.  10/03/2024'
    }
];

let currentImageIndex = 0;

function updateGallery(){
    document.getElementById('gallery-image').src = images[currentImageIndex].src;
    document.getElementById('photo-description').textContent = images[currentImageIndex].description;
}

document.getElementById('prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    updateGallery();
});



//Function Guessing Game- generates a random number, and compares it to the user's guess//
function playGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(document.getElementById("guess-input").value);
    const resultField = document.getElementById('game-result');

    if (userGuess === randomNumber) {
        resultField.textContent = `Congratulations! ${randomNumber} is the correct number!`;
    } else {
        resultField.textContent = `Sorry, try again! The number was ${randomNumber}`;

        setTimeout(() => {
            document.getElementById('guess-input').value = '';
            resultField.textContent ='';
        }, 3000); //Reset game after 3 seconds
    }
}

//Contact Form- Validates form and displays a 'thank you' message when submitted
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const contactMethod = document.querySelector('input[name="contact-method"]:checked').value;
    const comments = document.getElementById('comments').value;

    document.getElementById('form-result').textContent = `Thank you, ${name}! We will contact you by ${contactMethod}.`;

    e.target.reset(); //Resetting the form
});

function validatePhoneNumber(phone){
    const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/; //Example: 123-456-7890
    return phoneRegex.test(phone);
}

function validateForm(e){
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const errorField = document.getElementById('phone-error');

    if(!validatePhoneNumber(phone)) {
        errorField.textContent = 'Please enter a valid phone number (e.g., 123-456-7890).';
    } else {
        errorField.textContent = '';
    }
    
}


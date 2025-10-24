//Intro page part//
//Intro-page and Content-page variables
const introPage = document.querySelector('.intro-page');
const introLogo = document.querySelector('.intro-logo');
const contentPage = document.querySelector('.content-page');

//Turn intro page into main page by click the logo image
function mouseClickRocket() {
    introPage.style.animation = 'introFadeOut 1s';
    introLogo.style.transform = 'scale(0.7)';

    //This function is use for waiting the intro page finished fade out and then do the page swap step
    function aniEnd() {
        introPage.style.display = 'none';
        contentPage.style.display = 'grid';
    }
    introPage.addEventListener('animationend', aniEnd);
}
//Add event to logo mouse click
introLogo.addEventListener("click", mouseClickRocket);


//Content page part//
//Content-page for Nav bar variables
const navBar = document.querySelector('nav');
const buttonMenu = document.querySelector('.button-menu');
const navMenu = document.querySelector('.nav-menu');
const rocketIcon = document.querySelector('.selector-rocket');
const menuLink = document.querySelectorAll('.nav-menu menu li');

//The menu appear by click the menu button
function mouseClickMenu() {
    if (navBar.style.backgroundColor !== 'rgba(0, 0, 0, 0.5)' && navMenu.style.opacity !== '1') {
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        navMenu.style.opacity = '1';
        buttonMenu.style.backgroundColor = 'rgb(0, 0, 0)';
        buttonMenu.style.color = 'rgb(255, 255, 255)';
        buttonMenu.style.opacity = '0.5';
    }
    else {
        navBar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        navMenu.style.opacity = '0';
        buttonMenu.style.backgroundColor = 'rgb(255, 255, 255)';
        buttonMenu.style.color = 'rgb(0, 0, 0)';
        buttonMenu.style.opacity = '1';
    }
}
//Add event to menu mouse click
buttonMenu.addEventListener("click", mouseClickMenu);

//Rocket icon move 
function rocketMove(event) {
    const li = event.currentTarget; //Target the li tag which get mouse event 
    const index = Array.from(menuLink).indexOf(li); //Define the index of the current li tag
    const calNum = 10 - (index * 3); //Formula for change the rocket icon position
    rocketIcon.style.bottom = calNum + 'rem';
}
//Add event to each menu which was click by mouse 
menuLink.forEach(li => {
    li.addEventListener("mouseover", rocketMove);
    li.addEventListener("focus", rocketMove);
})


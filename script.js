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
//The menu appear by click the menu button
function mouseClickMenu() {
    if (navBar.style.backgroundColor !== 'rgba(255, 255, 255, 0.5)' && navMenu.style.opacity !== '0.5') {
        navBar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        navMenu.style.opacity = '0.5';
    }
    else {
        navBar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        navMenu.style.opacity = '0';
    }   
}
//Add event to menu mouse click
buttonMenu.addEventListener("click", mouseClickMenu);

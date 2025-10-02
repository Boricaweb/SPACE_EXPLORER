//Intro-page and Content-page variables
const introPage = document.querySelector('.intro-page');
const introLogo = document.querySelector('.intro-logo');
const contentPage = document.querySelector('.content-page');

//Turn intro page into main page by click the logo image
function mouseClick() {
    introPage.style.animation = 'myAnimation 1s';
    introLogo.style.transform = 'scale(0.7)';

    //This function is use for waiting the intro page finished fade out and then do the page swap step
    function aniEnd() {
        introPage.style.display = 'none';
        contentPage.style.display = 'grid';
    }
    introPage.addEventListener('animationend', aniEnd);
}

//Add event to logo mouse click
introLogo.addEventListener("click", mouseClick);

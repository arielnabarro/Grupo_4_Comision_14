const menuBtn = document.querySelector('.menu-btn');
const burgerList = document.querySelector('.burger-list');
let menuOpen = false;
let showList = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        showList = true;
        
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        showList = false;
    }
})



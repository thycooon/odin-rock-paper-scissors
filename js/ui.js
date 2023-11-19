const startGame_Btn = document.querySelector('.startGame');
const home_Btn = document.getElementById('home_btn');
const nav_Btns = document.querySelector('.navButtons');

const homePage_El = document.querySelector('.page.home'); 
const gamePage_El = document.querySelector('.page.game'); 
const pages_El = document.querySelector('.pages')


startGame_Btn.addEventListener('click', ()=>{
    if (homePage_El.classList.contains('currentPage')){
        gamePage_El.classList.add('currentPage')
        homePage_El.classList.remove('currentPage')
        pages_El.style.marginLeft = "-100%";
        nav_Btns.style.opacity = '1';
    }
});

home_Btn.addEventListener('click', ()=>{
    if (!homePage_El.classList.contains('currentPage')){
        homePage_El.classList.add('currentPage')
        gamePage_El.classList.remove('currentPage')
        pages_El.style.marginLeft = "0%";
        nav_Btns.style.opacity = '0';
    }
});
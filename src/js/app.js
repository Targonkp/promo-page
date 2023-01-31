let burgerMenu = document.querySelector('.menu-toggle');

//бургер меню
burgerMenu.addEventListener(
    'click',
    () => {
        burgerMenu.classList.toggle('open');
        if (document.body.style.overflow === 'hidden'){
            document.body.style.overflow = 'visible'
        }
        else {
            document.body.style.overflow = 'hidden'
        }
    }
)

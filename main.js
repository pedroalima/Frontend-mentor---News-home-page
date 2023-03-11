function menuShow(){
    const menuMobile = document.querySelector('.menu__mobile');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/icon-menu.svg";
    }
    else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/icon-menu-close.svg";
    }

}



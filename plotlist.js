let navE1 = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if( window.scrollY > 5) {
        navE1.classList.add('navscrolled');
    }
    else if( window.scrollY < 5) {
        navE1.classList.remove('navscrolled');
    }
});
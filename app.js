document.addEventListener('scroll', () => {
    const header = document.querySelector('.main-nav','.nav-link');

    if(window.scrollY > 750){
        header.classList.add('scrolled');           
    }
    else{
        header.classList.remove('scrolled');
    }
})
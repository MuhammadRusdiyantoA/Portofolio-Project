const header = document.querySelector('header');
const home = document.querySelector('.home-main');

const homeOptions = {};

const homeObserver = new IntersectionObserver(function(entries, homeObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('trigger');
        }
        else {
            header.classList.remove('trigger');
        }
    })
}, homeOptions);

homeObserver.observe(home)
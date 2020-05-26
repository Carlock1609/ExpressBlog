let activeLink = document.querySelector('.nav-item');

for(let i = 0; i < activeLink.length; i++) {
    activeLink.addEventListener('click', function() {
        activeLink[i].classList.toggle('active');
    });
};
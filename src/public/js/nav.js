let activeLink = document.querySelector('.nav-item')

for(let i = 0; i < activeLink.length(); i++) {
    activeLink.addEventListener('click', function() {
        // activeLink[0].classList.toggle('act')
        activeLink[i].classList.toggle('act')
    })
}
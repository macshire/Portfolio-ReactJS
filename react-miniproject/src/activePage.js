const activePage = window.location;
console.log(activePage);
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes('${activePage}')){
        link.classList.add('active');
    }
})
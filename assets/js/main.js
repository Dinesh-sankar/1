// Menu Show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle' , 'nav-menu')

// Active and Remove Menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove Menu Mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Reveal

const sr = ScrollReveal({                           //importing scrollReveal               
    duration: 2000,                                 //setting configuration 
    reset: true                                     //setting configuration
});

sr.reveal('.home',{
    distance: '40px'
});

sr.reveal('.about_img',{
    distance: '30px',
    origin: 'left'
});

sr.reveal('.about_details',{
    distance: '16px',
    origin: 'right'
});

sr.reveal('.skills_data',{
    distance: '60px',
    origin: 'left',
    interval: 300 
});

sr.reveal('.skills_img',{
    distance: '16px',
    origin: 'right'
})

sr.reveal('.contact_container',{
    distance: '30px',
    origin: 'bottom'
});

sr.reveal('.section-title',{
    distance: '20px',
    origin: 'top'
})
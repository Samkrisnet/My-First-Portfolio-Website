// Menu Icon toggle
let menuIcon = document.querySelector('#menu-icon');
let topmenu = document.querySelector('.topmenu');

menuIcon.onclick = () => {
    // menuIcon.classList.toggle('fa-x');
    topmenu.classList.toggle('active');
}

// The scroll Section.........sticky Header
window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    topmenu.classList.remove('active');
}
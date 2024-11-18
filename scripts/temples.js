// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger_button');
    const navMenu = document.getElementById("nav_bar")

    hamburgerMenu.addEventListener('click', function () {
        // alert("hamburger menu button pushed");
        navMenu.classList.toggle('show');
    });
});

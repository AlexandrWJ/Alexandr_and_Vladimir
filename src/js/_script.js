let navMenu = document.querySelector('.navbar .nav-menu-ul');
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    navMenu.style.display === "block" ? navMenu.style.display = "none" : navMenu.style.display = "block";
});


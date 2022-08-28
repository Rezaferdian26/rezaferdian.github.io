document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle("side-menu")
});

document.querySelector('main').addEventListener('click', function () {
    document.querySelector('nav ul').classList.remove("side-menu")
});
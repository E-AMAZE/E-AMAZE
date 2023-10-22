// const menuIcon = document.querySelector('.hamburger');
// const menuItems = document.querySelector('.mobile-menu');

// menuIcon.addEventListener('click',()=> {
//     menuItems.classList.toggle('show-menu');
// });

const menuButton = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');

menuButton.addEventListener("click", () => {
    // menuButton.classList.toggle('close')
    menu.classList.toggle("show-menu");
});

// Close the menu when clicking outside of it
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove("show-menu");
    }
});

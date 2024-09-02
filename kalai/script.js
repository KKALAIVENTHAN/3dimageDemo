let angle = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const vicky = document.querySelector('.carousel-container');

function moveSlide(step) {
    angle += step * (360 / totalItems); // Calculates rotation angle based on total items
    vicky.style.transform = `rotateY(${angle}deg)`; // Applies rotation
}

// Initialize item positions
items.forEach((item, index) => {
    item.style.setProperty('--i', index); // Sets a custom property for rotation calculation
});

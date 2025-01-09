const menuIcon = document.getElementById('menu-icon');
const dashboard = document.getElementById('dashboard');
const closeDashboard = document.getElementById('close-dashboard');

// Open Dashboard
menuIcon.addEventListener('click', () => {
    dashboard.style.top = '0';
});

// Close Dashboard
closeDashboard.addEventListener('click', () => {
    dashboard.style.top = '-100%';
});






// Select all the cards in the container
const cards = document.querySelectorAll('.container .card');

function checkCardsInView() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            card.classList.add('in-view'); // Add class to trigger effect when in view
        } else {
            card.classList.remove('in-view'); // Remove class when out of view
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', checkCardsInView);

// Call the function initially to check if cards are already in view on page load
checkCardsInView();

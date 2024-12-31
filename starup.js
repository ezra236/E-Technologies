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



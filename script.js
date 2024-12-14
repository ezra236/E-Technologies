document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function (event) {
        const arrow = item.querySelector('.arrow'); // Find the arrow inside the clicked nav-item
        const blockId = item.getAttribute('href').substring(1) + '-block'; // Get the block id
        const block = document.getElementById(blockId);

        // Toggle the current block visibility
        if (block.classList.contains('show')) {
            block.classList.remove('show'); // Collapse the block
            arrow.textContent = '▼'; // Change to down arrow
        } else {
            // Collapse all other blocks
            document.querySelectorAll('.nav-block').forEach(otherBlock => {
                otherBlock.classList.remove('show');
            });

            // Reset all other arrows
            document.querySelectorAll('.arrow').forEach(otherArrow => {
                otherArrow.textContent = '▼';
            });

            // Expand the current block
            block.classList.add('show');
            arrow.textContent = '▲'; // Change to up arrow
        }

        // Prevent the default anchor link behavior
        event.preventDefault();
    });
});

// Close the block when clicking outside the block
document.addEventListener('click', function (event) {
    const blocks = document.querySelectorAll('.nav-block');
    const navLinks = document.querySelectorAll('.nav-item');

    // If the click is outside both the blocks and nav items
    if (![...blocks].some(block => block.contains(event.target)) && 
        ![...navLinks].some(link => link.contains(event.target))) {
        blocks.forEach(block => block.classList.remove('show')); // Collapse all blocks
        document.querySelectorAll('.arrow').forEach(arrow => {
            arrow.textContent = '▼'; // Reset all arrows to down
        });
    }
});








const statements = [
    "Innovative solutions driving progress.",
    "Reliable partner in technology advancement.",
    "Excellence in customized tech solutions.",
    "Empowering growth through digital innovation."
];

let currentIndex = 0;
const rotatingTextElement = document.getElementById('rotating-text');

function rotateText() {
    rotatingTextElement.textContent = statements[currentIndex];
    currentIndex = (currentIndex + 1) % statements.length;
}

// Set the initial text and start rotation
rotateText();
setInterval(rotateText, 2000); // Change text every 2 seconds






let currentIndexx = 1;
const descriptions = document.querySelectorAll('.description-content');
const videos = document.querySelectorAll('.vid3 video');
const totalDescriptions = descriptions.length;

function navigate(direction) {
    // Pause and hide the current video
    const currentVideo = videos[currentIndexx - 1];
    currentVideo.pause(); // Stop the video from playing
    currentVideo.currentTime = 0; // Reset the video to the beginning
    currentVideo.classList.add('hidden');

    // Hide the current description
    descriptions[currentIndexx - 1].classList.remove('active');

    // Update the current index
    if (direction === 'next') {
        currentIndexx = (currentIndexx % totalDescriptions) + 1;
    } else if (direction === 'prev') {
        currentIndexx = (currentIndexx - 2 + totalDescriptions) % totalDescriptions + 1;
    }

    // Show new description and video
    descriptions[currentIndexx - 1].classList.add('active');
    const newVideo = videos[currentIndexx - 1];
    newVideo.classList.remove('hidden');

    // Update navigation display
    document.querySelector('.navigation span').textContent = `${currentIndexx}/3`;
}

// Initialize first description and video as active
descriptions[0].classList.add('active');
videos[0].classList.remove('hidden');





const blogGrid = document.querySelector('.blog-grid');
const paginationDots = document.querySelectorAll('.pagination span');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
let currentIndexc = 0;
const cardsToShow = 4; // Number of cards to show per scroll

const updateGrid = () => {
    blogGrid.style.transform = `translateX(-${currentIndexc * 25}%)`; // 25% per page scroll (4 cards)
    paginationDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndexc);
    });
};

prevArrow.addEventListener('click', () => {
    if (currentIndexc > 0) currentIndexc--; // Move to previous 4 cards
    updateGrid();
});

nextArrow.addEventListener('click', () => {
    if (currentIndexc < paginationDots.length - 1) currentIndexc++; // Move to next 4 cards
    updateGrid();
});





document.addEventListener("DOMContentLoaded", () => {
    const logoSection = document.querySelector(".footer-logo");
    logoSection.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});






document.querySelectorAll('.direc .link').forEach(link => {
    link.addEventListener('click', function() {
        const targetClass = this.getAttribute('data-target');  // Get the target class from data attribute

        // Find the corresponding content element
        const targetContent = document.querySelector(`.${targetClass}`);
        const targetDetail = document.querySelector(`.${targetClass}-detail`); // Corresponding detail section

        // Check if the target content is already active
        if (targetContent.classList.contains('active')) {
            // If active, remove the active class to hide it
            targetContent.classList.remove('active');
            if (targetDetail) {
                targetDetail.classList.remove('active'); // Close corresponding detail section when closing content
            }
        } else {
            // If not active, hide all content sections first
            document.querySelectorAll('.showd .content').forEach(content => {
                content.classList.remove('active');
            });

            // Show the corresponding content with transition
            targetContent.classList.add('active');
        }
    });
});

// Add event listeners for 'styled-p' elements (to open detail sections)
document.querySelectorAll('.content .styled-p').forEach(styledP => {
    styledP.addEventListener('click', function () {
        const targetClass = this.getAttribute('data-target'); // Get the target class from data attribute
        const targetDetail = document.querySelector(`.${targetClass}`); // Find the corresponding detail section

        // Toggle the active class on the target detail section
        if (targetDetail.classList.contains('active')) {
            targetDetail.classList.remove('active'); // If already active, remove the class to hide it
        } else {
            // Hide all detail sections
            document.querySelectorAll('.showd .detail').forEach(detail => {
                detail.classList.remove('active');
            });

            targetDetail.classList.add('active'); // Add the active class to show the clicked section
        }
    });
});


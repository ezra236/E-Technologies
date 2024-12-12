document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(event) {
        // Toggle arrow direction
        const arrow = item.querySelector('.arrow');
        const blockId = item.getAttribute('href').substring(1) + '-block'; // Get the block id
        const block = document.getElementById(blockId);

        // Toggle the arrow direction
        if (arrow.textContent === '▼') {
            arrow.textContent = '▲'; // Change to up arrow
        } else {
            arrow.textContent = '▼'; // Change to down arrow
        }

        // Collapse all other blocks
        document.querySelectorAll('.nav-block').forEach(otherBlock => {
            if (otherBlock !== block && otherBlock.classList.contains('show')) {
                otherBlock.classList.remove('show'); // Collapse other blocks
            }
        });

        // Toggle current block visibility with transition effect
        if (block.classList.contains('show')) {
            block.classList.remove('show'); // Collapse the block
        } else {
            block.classList.add('show'); // Expand the block
        }

        // Prevent the default anchor link behavior
        event.preventDefault();
    });
});

// Close the block when clicking outside the block
document.addEventListener('click', function(event) {
    const blocks = document.querySelectorAll('.nav-block');
    const navLinks = document.querySelectorAll('.nav-item');

    // If the click is outside both the blocks and nav items, close all blocks
    if (![...blocks].some(block => block.contains(event.target)) && 
        ![...navLinks].some(link => link.contains(event.target))) {
        blocks.forEach(block => block.classList.remove('show'));
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



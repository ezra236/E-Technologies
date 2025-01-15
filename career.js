document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function (event) {
        const arrow = item.querySelector('.arrow'); // Find the arrow inside the clicked nav-item
        const blockId = item.getAttribute('href').substring(1) + '-block'; // Get the block id
        const block = document.getElementById(blockId);
        const contactSalesButton = document.querySelector('.buttonM'); // Select the "Contact Sales" button

        // Toggle the current block visibility
        if (block.classList.contains('show')) {
            block.classList.remove('show'); // Collapse the block
            arrow.textContent = '▼'; // Change to down arrow
            item.classList.remove('active'); // Remove active class
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

            // Add active class to the clicked nav-item and remove from others
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        }

        // Hide the "Contact Sales" button when any nav-block is shown
        if (document.querySelector('.nav-block.show')) {
            contactSalesButton.style.display = 'none';
        } else {
            contactSalesButton.style.display = 'block'; // Show the button if no block is visible
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

        // Remove active class from all nav items
        navLinks.forEach(link => link.classList.remove('active'));

        // Show the button and ezra when the block is collapsed
        document.querySelector('.buttonM').style.display = 'block';
        document.querySelector('.ezra').style.display = 'block';
    }
});








const statements = [
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

        // **NEW**: Before proceeding, close any previously active content and detail sections
        document.querySelectorAll('.showd .content').forEach(content => {
            if (content !== targetContent) {
                content.classList.remove('active');  // Close other active content sections
            }
        });
        
        document.querySelectorAll('.showd .detail').forEach(detail => {
            if (detail !== targetDetail) {
                detail.classList.remove('active');  // Close other active detail sections
            }
        });

        // Check if the target content is already active
        if (targetContent.classList.contains('active')) {
            // If active, remove the active class to hide it
            targetContent.classList.remove('active');
            if (targetDetail) {
                targetDetail.classList.remove('active'); // Close corresponding detail section when closing content
            }
        } else {
            // If not active, show the corresponding content with transition
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




document.querySelectorAll('.direc p').forEach(p => {
    p.addEventListener('click', function() {
        // Check if the clicked paragraph already has the special background color
        if (p.style.backgroundColor === 'rgba(6, 36, 120, 0.9)') {
            // If it does, remove it
            p.style.backgroundColor = '';
        } else {
            // First, remove the background color from any paragraph that has it
            document.querySelectorAll('.direc p').forEach(otherP => {
                if (otherP !== p && otherP.style.backgroundColor === 'rgba(6, 36, 120, 0.9)') {
                    otherP.style.backgroundColor = ''; // Remove background from other paragraphs
                }
            });

            // Then, apply the new background color to the clicked paragraph
            p.style.backgroundColor = 'rgba(6, 36, 120, 0.9)';
        }
    });
});


document.querySelectorAll('.styled-p').forEach(p => {
    p.addEventListener('click', function() {
        // Check if the clicked paragraph already has the special background color
        if (p.style.backgroundColor === 'rgba(6, 36, 120, 0.9)') {
            // If it does, remove it
            p.style.backgroundColor = '';
        } else {
            // First, remove the background color from any paragraph that has it
            document.querySelectorAll('.styled-p').forEach(otherP => {
                if (otherP !== p && otherP.style.backgroundColor === 'rgba(6, 36, 120, 0.9)') {
                    otherP.style.backgroundColor = ''; // Remove background from other paragraphs
                }
            });

            // Then, apply the new background color to the clicked paragraph
            p.style.backgroundColor = 'rgba(6, 36, 120, 0.9)';
        }
    });
});



document.querySelectorAll('.directry p').forEach(p => {
    p.addEventListener('click', function() {
        // Check if any p has the background color of rgba(6, 36, 120, 0.9)
        const currentActive = document.querySelector('.directry p.active');
        
        // If there's an active one and it's not the clicked one, reset its background
        if (currentActive && currentActive !== p) {
            currentActive.style.backgroundColor = ''; // Reset background
            currentActive.classList.remove('active'); // Remove active class
        }

        // Toggle the background color for the clicked p
        if (p.style.backgroundColor === 'rgba(6, 36, 120, 0.9)') {
            p.style.backgroundColor = ''; // Remove the background color
            p.classList.remove('active'); // Remove active class
        } else {
            p.style.backgroundColor = 'rgba(6, 36, 120, 0.9)'; // Set new background color
            p.classList.add('active'); // Add active class
        }
    });
});


document.querySelectorAll('.styled-pp').forEach(item => {
    item.addEventListener('click', function () {
        // Check if any p element already has the active background color
        const activeP = document.querySelector('.styled-pp.active');
        
        if (activeP && activeP !== item) {
            // Remove the active background color from the previously clicked p
            activeP.classList.remove('active');
        }

        // Toggle the background color on the clicked p
        item.classList.toggle('active');
    });
});






    



document.querySelectorAll('.directry .linkt, .directry .linktry').forEach(link => {
    link.addEventListener('click', function() {
        const targetClass = this.getAttribute('data-target'); // Get the target class from data attribute

        // Find the corresponding content element
        const targetContent = document.querySelector(`.showdtry .${targetClass}`);

        // Close any currently active content
        document.querySelectorAll('.showdtry .content').forEach(content => {
            if (content !== targetContent) {
                content.classList.remove('active'); // Remove active class from other content
            }
        });

        // Toggle the active state of the clicked content
        if (targetContent.classList.contains('active')) {
            // If already active, deactivate it
            targetContent.classList.remove('active');
        } else {
            // Otherwise, activate the clicked content
            targetContent.classList.add('active');
        }
    });
});






document.querySelectorAll('.directry .linktrya').forEach(link => {
    link.addEventListener('click', function() {
        const targetClass = this.getAttribute('data-target'); // Get the target class from the data attribute

        // Find the corresponding content element
        const targetContent = document.querySelector(`.showdtrya .${targetClass}`);

        // Close any currently active content
        document.querySelectorAll('.showdtrya .content').forEach(content => {
            if (content !== targetContent) {
                content.classList.remove('active'); // Remove active class from other content
            }
        });

        // Toggle the active state of the clicked content
        if (targetContent.classList.contains('active')) {
            // If already active, deactivate it
            targetContent.classList.remove('active');
        } else {
            // Otherwise, activate the clicked content
            targetContent.classList.add('active');
        }
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".testimonial-slide");
    const totalSlides = slides.length;
    const prevButton = document.querySelector(".navigation button:first-of-type");
    const nextButton = document.querySelector(".navigation button:last-of-type");
    const counter = document.querySelector(".navigation span");
    let currentIndex = 0;

    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
      counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
    }

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlides();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlides();
      }
    });

    updateSlides();
  });






  function toggleExplanation(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling; // Get the accordion button
    const allContents = document.querySelectorAll('.accordion-content');
    const allButtons = document.querySelectorAll('.accordion-button'); // Get all buttons

    allContents.forEach(item => {
        if (item !== content) {
            item.style.display = 'none'; // Hide all other content blocks
        }
    });

    allButtons.forEach(button => {
        button.classList.remove('active'); // Remove the active class from all buttons
    });

    if (content.style.display === 'block') {
        content.style.display = 'none'; // If the content is visible, hide it
        button.classList.remove('active'); // Remove the active class from the button
    } else {
        content.style.display = 'block'; // Show the selected content block
        button.classList.add('active'); // Add the active class to the button
    }
}






function toggleFAQ(id) {
    const answer = document.getElementById(id);
    const parent = answer.parentElement;
    const icon = parent.querySelector('.faq-icon');
    
    // Close all answers
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item.id !== id) {
            item.style.display = 'none';
            item.parentElement.classList.remove('active');
            item.parentElement.querySelector('.faq-icon').innerText = '+';
        }
    });

    // Toggle current answer
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        parent.classList.remove('active');
        icon.innerText = '+';
    } else {
        answer.style.display = 'block';
        parent.classList.add('active');
        icon.innerText = '-';
    }
}





// JavaScript for Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        answer.classList.toggle('show');
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const productItems = document.querySelectorAll('.product-item');

    // Create an IntersectionObserver to detect when product items enter the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element comes into view, add the 'visible' class
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing the element once it has appeared
            }
        });
    }, {
        threshold: 0.5  // Trigger when 50% of the element is in the viewport
    });

    // Observe all product items
    productItems.forEach(item => {
        observer.observe(item);
    });
});







document.addEventListener("DOMContentLoaded", () => {
    const featureItems = document.querySelectorAll(".feature-item");

    // Function to reveal feature items when they come into view
    function revealFeatureItems() {
        featureItems.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            // Check if the feature item is within the visible part of the viewport
            if (
                itemRect.top < window.innerHeight &&
                itemRect.bottom >= 0
            ) {
                item.classList.add("visible");
            }
        });
    }

    // Trigger revealFeatureItems on page load to handle the initial case
    revealFeatureItems();

    // Trigger revealFeatureItems when the user scrolls
    window.addEventListener("scroll", revealFeatureItems);
});








document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card img'); // Select all images inside the cards
    const section = document.querySelector('.cards'); // Select the experience section

    // Function to animate images
    function animateImages() {
        cards.forEach((img) => {
            img.classList.remove('animate'); // Remove the class to reset animation
            void img.offsetWidth; // Trigger reflow to reset the animation
            img.classList.add('animate'); // Reapply the animation class to trigger the animation
        });
    }

    // Create an IntersectionObserver to observe when the section comes into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateImages(); // Trigger animation when section comes into view
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    // Start observing the .experience-section
    observer.observe(section);
});





// Select the video, play button, and title elements
const video = document.getElementById('customVideo');
const playButton = document.getElementById('playButton');
const imageSection = document.querySelector('.image-sectionh');
const videoTitle = document.getElementById('videoTitle');

// Add an event listener to the play button
playButton.addEventListener('click', () => {
    video.play(); // Play the video
    videoTitle.classList.add('hidden'); // Hide the title
});

// Add an event listener for mouse enter on the image section
imageSection.addEventListener('mouseenter', () => {
    playButton.classList.remove('hidden'); // Show the play button
});

// Add an event listener for mouse leave on the image section
imageSection.addEventListener('mouseleave', () => {
    if (!video.paused) {
        playButton.classList.add('hidden'); // Hide the play button if the video is playing
    }
});

// Add an event listener to the video for when it's paused
video.addEventListener('pause', () => {
    videoTitle.classList.remove('hidden'); // Show the title
    playButton.classList.remove('hidden'); // Show the play button
});

// Add an event listener to the video for when it ends
video.addEventListener('ended', () => {
    videoTitle.classList.remove('hidden'); // Show the title
    playButton.classList.remove('hidden'); // Show the play button
});





// Function to check if the section is in view
const section = document.querySelector('.section');

function checkSectionInView() {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
        section.classList.add('in-view'); // Add class to trigger effect
    } else {
        section.classList.remove('in-view'); // Remove class when out of view
    }
}

// Listen to the scroll event
window.addEventListener('scroll', checkSectionInView);

// Call the function initially in case the section is already in view
checkSectionInView();






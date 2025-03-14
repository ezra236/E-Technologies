document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function (event) {
        const arrow = item.querySelector('.arrow'); // Find the arrow inside the clicked nav-item
        const blockId = item.getAttribute('href').substring(1) + '-block'; // Get the block id
        const block = document.getElementById(blockId);
        const ezra = document.querySelector('.ezra'); // Select the ezra class

        // Toggle the current block visibility
        if (block.classList.contains('show')) {
            block.classList.remove('show'); // Collapse the block
            arrow.textContent = '▼'; // Change to down arrow
            item.classList.remove('active'); // Remove active class
            ezra.style.display = 'block'; // Show the ezra element again when block is collapsed
        } else {
            // Collapse all other blocks
            document.querySelectorAll('.nav-block').forEach(otherBlock => {
                otherBlock.classList.remove('show');
            });

            // Reset all arrows
            document.querySelectorAll('.arrow').forEach(otherArrow => {
                otherArrow.textContent = '▼';
            });

            // Add active class to the clicked nav-item and remove from others
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Hide the ezra element before showing the new block
            ezra.style.display = 'none';

            closeMenu();

            // Wait for the ezra block to disappear before expanding the new block
            setTimeout(() => {
                block.classList.add('show');
                arrow.textContent = '▲'; // Change to up arrow
            }, 300); // Delay time for Ezra to disappear, adjust as needed
        }

        // Prevent the default anchor link behavior
        event.preventDefault();
    });
});



document.querySelectorAll(".closez-btn").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".content").classList.remove("active"); // Hide only the parent content block
    });
});

document.querySelectorAll(".closep-btn").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".detail").classList.remove("active"); // Hide only the parent content block
    });
});

document.querySelector(".closed-btn").addEventListener("click", function () {
    document.getElementById("services-block").classList.remove("show");
});

document.querySelector(".closet-btn").addEventListener("click", function () {
    document.getElementById("about-block").classList.remove("show");
});

document.querySelectorAll(".closel-btn").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".content").classList.remove("active"); // Hide the parent content block
    });
});

document.querySelectorAll(".closec-btn").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".content").classList.remove("active"); // Hide content
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

        // Show the ezra element when the block is collapsed
        document.querySelector('.ezra').style.display = 'block';
    }
});



function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('show');
}


function closeMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Close the mobile menu by removing the 'show' class
    mobileMenu.classList.remove('show');
}







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





// Select all navigation links
const navLinks = document.querySelectorAll('.nav-linkss');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});





// Get all navigation links
const navLinkss = document.querySelectorAll('.nav-linkss');

// Observe sections and divs with IDs
const sections = document.querySelectorAll('section[id], div[id]');

// Intersection Observer to detect section in view
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Remove active class from all links
                navLinkss.forEach((link) => link.classList.remove('active'));
                // Add active class to the current section's link
                document
                    .querySelector(`.nav-linkss[href="#${id}"]`)
                    .classList.add('active');
            }
        });
    },
    {
        root: null, // viewport
        threshold: 0.6, // 60% of the section must be visible
    }
);

// Observe each section and div
sections.forEach((section) => observer.observe(section));





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

  


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.cardd img'); // Select all images inside the cards
    const section = document.querySelector('.experience-section'); // Select the experience section

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





// Function to check if the section is in view
const section = document.querySelector('.image-text-container');

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


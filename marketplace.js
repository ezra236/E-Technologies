document.addEventListener("DOMContentLoaded", () => {
    const categoryCards = document.querySelectorAll(".category-card");

    // Function to reveal category cards when they come into view
    function revealCategoryCards() {
        categoryCards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            // Check if the category card is within the visible part of the viewport
            if (
                cardRect.top < window.innerHeight &&
                cardRect.bottom >= 0
            ) {
                card.classList.add("visible");
            }
        });
    }

    // Trigger revealCategoryCards on page load to handle the initial case
    revealCategoryCards();

    // Trigger revealCategoryCards when the user scrolls
    window.addEventListener("scroll", revealCategoryCards);
});

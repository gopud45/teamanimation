document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    // Function to set the active card state
    function setActiveCard(cardToActivate) {
        cards.forEach(card => {
            if (card === cardToActivate) {
                card.classList.add('expanded');
                card.classList.remove('wrapped'); // Ensure it's not wrapped
            } else {
                card.classList.remove('expanded');
                card.classList.add('wrapped'); // All other cards become wrapped
            }
        });
    }

    // Initialize: Set the first card as expanded on page load
    if (cards.length > 0) {
        setActiveCard(cards[0]);
    }

    // Add click listeners to all cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Only activate if it's not already the expanded card
            if (!card.classList.contains('expanded')) {
                setActiveCard(card);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const stickyHeader = document.querySelector('.sticky-header');
    const heroSection = document.querySelector('.hero-section');
    const scrollDownIndicator = document.querySelector('.scroll-down-indicator');

    if (stickyHeader && heroSection) {
        const heroHeight = heroSection.offsetHeight;

        window.addEventListener('scroll', function() {
            if (window.scrollY > heroHeight - 100) {
                stickyHeader.classList.add('visible');
            } else {
                stickyHeader.classList.remove('visible');
            }
        });
    }

    if (scrollDownIndicator) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollDownIndicator.style.opacity = '0';
            } else {
                scrollDownIndicator.style.opacity = '1';
            }
        });
    }
});
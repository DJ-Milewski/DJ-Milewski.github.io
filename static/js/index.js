document.addEventListener('DOMContentLoaded', function() {
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('active-flash');
            setTimeout(() => {
                this.classList.remove('active-flash');
            }, 1000);
        });
    });

    const rotatingText = document.getElementById('rotating-text');
    if (rotatingText) {
        const words = ["Urodziny", "Wesela", "Bale", "Imprezy Firmowe"];
        let index = 0;

        const updateText = () => {
            rotatingText.style.opacity = 0;
            setTimeout(() => {
                index = (index + 1) % words.length;
                rotatingText.textContent = words[index];
                rotatingText.style.opacity = 1;
            }, 500);
        };

        rotatingText.textContent = words[index];
        rotatingText.style.opacity = 1;

        setInterval(updateText, 2500);
    }

    const reservationButtons = document.querySelectorAll('a[href="#contact"]');
    const contactInfo = document.querySelector('.contact-info');

    if (reservationButtons.length > 0 && contactInfo) {
        reservationButtons.forEach(button => {
            button.addEventListener('click', () => {
                contactInfo.classList.add('shine-effect');

                setTimeout(() => {
                    contactInfo.classList.remove('shine-effect');
                }, 1500);
            });
        });
    }
});
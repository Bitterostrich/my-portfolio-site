const PageBehavior = {
    init: function() {
        this.hidePreloader();
        this.setupHoverListeners();
        this.startTypewriterEffect();
    },

    hidePreloader: function() {
        window.onload = () => {
            setTimeout(() => {
                document.getElementById('preloader').style.display = 'none';
            }, 100);
        };
    },

    setupHoverListeners: function() {
        const hoverAreas = [
            { area: 'hoverArea', carousel: 'carousel' },
            { area: 'hoverArea_two', carousel: 'carousel_two' }
        ];

        hoverAreas.forEach(({ area, carousel }) => {
            const hoverElement = document.getElementById(area);
            const carouselElement = document.getElementById(carousel);

            hoverElement.addEventListener('mouseenter', () => {
                carouselElement.classList.remove('hidden', 'exit');
                carouselElement.classList.add('enter');
            });

            hoverElement.addEventListener('mouseleave', () => {
                carouselElement.classList.remove('enter');
                carouselElement.classList.add('exit');
            });
        });
    },

    startTypewriterEffect: function() {
        const text = "Hello, my name is John Duru.";
        const typingSpeed = 150; // Milliseconds
        let index = 0;
        const typewriterText = document.getElementById('typewriterText');

        typewriterText.textContent = '';

        const typeWriter = () => {
            if (index < text.length) {
                typewriterText.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            }
        };

        setTimeout(typeWriter, 100);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    PageBehavior.init();
});
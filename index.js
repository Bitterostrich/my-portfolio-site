const PageBehavior = {
    init: function() {
        this.hidePreloader();
        this.setupHoverListeners();
        this.startTypewriterEffect();
        this.setupAnimations();
    },

    hidePreloader: function() {
        window.onload = () => {
            
            setTimeout(() => {
                document.getElementById('preloader').style.display = 'none';
            }, 1000);
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

    setupAnimations: function() {
        const textEntry = document.getElementById('p-text')
        const headerText = document.getElementById('h3-text')
        headerText.style.animation = 'fade-in-fwd 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both, push-up-header 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
        headerText.style.animationDelay = '0s, 2s'; // Delay for the second animation


        headerText.addEventListener('animationend', (event) => {
            console.log(event.animationName)
            if (event.animationName === 'push-up-header') {
                setTimeout(() => {
                    headerText.style.animation = 'slide-out-fwd-center 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both';
                    headerText.style.transform = 'translateY(-50px)'
                }, 900)
            }
        });


        textEntry.addEventListener('animationstart', () => {

        
        })
    },

    startTypewriterEffect: function() {
        const text = "Hello, my name is John Duru.";
        const typingSpeed = 150; // Milliseconds
        let index = 0;
        const typewriterText = document.getElementById('typewriterText');

        typewriterText.textContent = '';

        const typeWriter = () => {
            if (index < text.length) {
                typewriterText.textContent = typewriterText.textContent + text.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            }
        };

        setTimeout(typeWriter, 3000);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    PageBehavior.init();
});



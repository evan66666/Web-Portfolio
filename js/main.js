document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Check if elements exist before adding event listener
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }


    // --- On-Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after revealing to save resources
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // --- Parallax Mouse Move Effect ---
    const parallaxContainers = document.querySelectorAll('.parallax-container');
    if (window.innerWidth > 768) { // Only enable on desktop
        document.addEventListener('mousemove', (e) => {
            parallaxContainers.forEach(container => {
                const parallaxElements = container.querySelectorAll('.parallax-element');
                const speed = 2; // Adjust for more or less effect
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;

                parallaxElements.forEach(el => {
                    const elSpeed = el.dataset.speed || 2;
                    el.style.transform = `translateX(${x * elSpeed}px) translateY(${y * elSpeed}px)`;
                });
            });
        });
    }
});

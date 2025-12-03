(function() {
    'use strict';

    window.addEventListener('load', function() {
        displayLoadTime();
        highlightActiveNavItem();
        addHoverEffects();
    });

    function displayLoadTime() {
        const loadTime = performance.now();
        const footer = document.querySelector('.footer');

        if (footer) {
            const loadTimeElement = document.createElement('p');
            loadTimeElement.className = 'footer__load-time';
            loadTimeElement.textContent = `Время загрузки страницы: ${loadTime.toFixed(3)} мс`;
            footer.appendChild(loadTimeElement);
        }
    }

    function highlightActiveNavItem() {
        const currentPage = document.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav__link');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');

            if (linkHref === currentPage ||
                (currentPage === '' && linkHref === 'index.html')) {
                link.classList.add('nav__link--active');
            }
        });
    }

    function addHoverEffects() {
        const navLinks = document.querySelectorAll('.nav__link');

        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
            });

            link.addEventListener('mouseleave', function() {
                this.style.transition = 'all 0.3s ease';
            });
        });
    }

})();
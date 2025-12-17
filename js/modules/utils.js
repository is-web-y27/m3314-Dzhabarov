export function initNavigation() {
    const currentPage = document.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('nav__link--active');
        }

        link.addEventListener('mouseenter', () => {
            link.style.transition = 'all 0.3s ease';
        });
    });
}

export function getLoadTime() {
    return performance.now().toFixed(3);
}

document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    faders.forEach(fader => appearOnScroll.observe(fader));
});

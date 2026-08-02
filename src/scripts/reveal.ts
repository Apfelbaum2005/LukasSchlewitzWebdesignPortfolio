document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                setTimeout(() => {
                    entry.target.classList.remove('reveal', 'is-visible', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3');
                }, 1200);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });
});
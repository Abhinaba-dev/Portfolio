// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Active section highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.id}`
                );
            });
        }
    });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

// Analytics: track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        if (typeof gtag === "function") {
            gtag('event', 'button_click', {
                event_category: 'engagement',
                event_label: button.textContent.trim()
            });
        }
    });
});

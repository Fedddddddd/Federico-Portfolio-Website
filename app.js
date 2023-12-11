
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show'); // Corrected the typo here
    }
    });
});
const hiddenElements = document.querySelectorAll('.hidden'); // Corrected the typo here
hiddenElements.forEach((el) => observer.observe(el));
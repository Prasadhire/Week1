// Typing Effect
const typedText = document.querySelector(".typing-text");
const words = ["Web Developer", "Frontend Developer", "Backend Developer", "Fullstack Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Pause before next word
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme in localStorage and apply it
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "🌙"; // Set icon for dark mode
} else {
    themeToggle.textContent = "☀️"; // Set icon for light mode
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Save theme preference in localStorage
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙"; // Set icon for dark mode
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️"; // Set icon for light mode
    }
});

  // Toggle navigation menu on hamburger button click
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

document.addEventListener("DOMContentLoaded", () => {
    // Header Animation
    gsap.from("header", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out",
    });

    // Hero Section Animation
    gsap.from(".hero-text", {
        duration: 1.5,
        x: -100,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5,
    });
    gsap.from(".hero-image img", {
        duration: 1.5,
        scale: 0.5,
        opacity: 0,
        ease: "power2.out",
        delay: 0.7,
    });
    gsap.from(".btn", {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: "bounce.out",
        delay: 1,
    });

    // Section Animations (Alternate Left and Right)
    gsap.utils.toArray(".section").forEach((section, index) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            x: index % 2 === 0 ? -100 : 100, // Alternate left (-100) and right (100)
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
        });
    });

    // Skill Boxes Animation
    gsap.utils.toArray(".skill").forEach((skill, index) => {
        gsap.fromTo(
            skill,
            { y: 50, opacity: 0 }, // Start position: off-screen below
            {
                y: 0, // End position: original position
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: skill,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    });

    // Progress Bars Animation
    gsap.utils.toArray(".progress-bar .progress").forEach((progress) => {
        gsap.fromTo(
            progress,
            { width: "0%" }, // Start with 0% width
            {
                width: progress.style.width, // Animate to the defined width
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: progress,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    });

    // Project Boxes Animation
    gsap.utils.toArray(".project").forEach((project, index) => {
        gsap.from(project, {
            scrollTrigger: {
                trigger: project,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
        });
    });


    gsap.utils.toArray(".certification").forEach((project, index) => {
        gsap.from(project, {
            scrollTrigger: {
                trigger: project,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
        });
    });
});
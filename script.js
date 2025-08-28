// Splash Screen Management
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splashScreen');
    const geometricHero = document.querySelector('.geometric-hero');
    const heroSection = document.querySelector('.hero');
    
    // Hide splash screen after 6 seconds (allowing writing animations to complete)
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        
        // After splashscreen fade-out animation completes, fade in the geometric-hero
        setTimeout(() => {
            // Remove splash screen from DOM
            splashScreen.remove();
            
            // Fade in the geometric-hero section
            if (geometricHero) {
                geometricHero.classList.add('visible');
            }
            
            // Fade in the hero section after a short delay
            setTimeout(() => {
                if (heroSection) {
                    heroSection.classList.add('visible');
                }
            }, 1000); // 1 second delay after geometric-hero starts fading in
        }, 1500);
    }, 6000);
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation classes based on data attributes
            const element = entry.target;
            if (element.dataset.animate === 'fade-in') {
                element.classList.add('fade-in', 'visible');
            } else if (element.dataset.animate === 'slide-left') {
                element.classList.add('slide-in-left', 'visible');
            } else if (element.dataset.animate === 'slide-right') {
                element.classList.add('slide-in-right', 'visible');
            } else if (element.dataset.animate === 'scale-in') {
                element.classList.add('scale-in', 'visible');
            }
            
            // Animate highlight text
            const highlights = element.querySelectorAll('.highlight');
            highlights.forEach(highlight => {
                setTimeout(() => {
                    highlight.classList.add('visible');
                }, 300);
            });
        }
    });
}, observerOptions);

// Observe all sections for animations
document.addEventListener('DOMContentLoaded', function() {
    // Add animation attributes to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            section.setAttribute('data-animate', 'fade-in');
        } else {
            section.setAttribute('data-animate', 'slide-left');
        }
        observer.observe(section);
    });
    
    // Add specific animations to key elements
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.setAttribute('data-animate', 'fade-in');
        observer.observe(heroTitle);
    }
    
    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
        heroButtons.setAttribute('data-animate', 'scale-in');
        observer.observe(heroButtons);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'white';
        header.style.backdropFilter = 'none';
    }
});

// Add click event listeners to all buttons for demo purposes
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get button text to show appropriate message
        const buttonText = this.textContent.trim();
        
        if (buttonText.includes('Assessment') || buttonText.includes('Book')) {
            alert('Thank you for your interest! Our team will contact you within 24 hours to schedule your free assessment.');
        } else if (buttonText.includes('Action') || buttonText.includes('Demo') || buttonText.includes('Services')) {
            alert('Great choice! We\'ll arrange a personalized demo of our solutions for your organization.');
        } else if (buttonText.includes('Training') || buttonText.includes('Network')) {
            alert('Excellent! Our training team will reach out to discuss your team\'s learning needs.');
        } else if (buttonText.includes('Toolkit') || buttonText.includes('Download')) {
            alert('Your digital transformation toolkit is being prepared. Check your email shortly!');
        } else if (buttonText.includes('Community') || buttonText.includes('Partner')) {
            alert('Thank you for wanting to join our movement! We\'ll connect you with our community team.');
        } else if (buttonText.includes('Build') || buttonText.includes('Together')) {
            alert('Amazing! Let\'s build the digital countryside together. Our team will contact you within 24 hours.');
        } else {
            alert('Thank you for your interest! We\'ll be in touch soon.');
        }
    });
});

// Add hover effects to cards
document.querySelectorAll('.serve-card, .feature-card, .testimonial, .tool-card, .involvement-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add floating animation to map dots
document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.style.animationDelay = `${index * 0.5}s`;
    });
});

// Simple form validation for demo purposes
function validateForm(formData) {
    const required = ['name', 'email', 'organization'];
    for (let field of required) {
        if (!formData.get(field)) {
            return false;
        }
    }
    return true;
}

// Add loading states to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Processing...';
        this.disabled = true;
        
        // Simulate processing time
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 2000);
    });
});

// Intersection Observer for animations (optional enhancement)
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for fade-in effect
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Navigation functionality (dropdown on hover)
const mainNav = document.getElementById('main-nav');
const header = document.querySelector('.header');
const hamburger = document.getElementById('hamburger');

// Add smooth scrolling to navigation links
const navLinks = mainNav.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // Hide navigation after clicking a link
        mainNav.style.opacity = '0';
        mainNav.style.visibility = 'hidden';
        mainNav.style.transform = 'translateY(-10px)';
    });
});

// Show navigation on header hover
header.addEventListener('mouseenter', () => {
    mainNav.style.opacity = '1';
    mainNav.style.visibility = 'visible';
    mainNav.style.transform = 'translateY(0)';
});

// Hide navigation when leaving header area
header.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!mainNav.matches(':hover')) {
            mainNav.style.opacity = '0';
            mainNav.style.visibility = 'hidden';
            mainNav.style.transform = 'translateY(-10px)';
        }
    }, 100);
});

// Show navigation on hamburger hover
hamburger.addEventListener('mouseenter', () => {
    mainNav.style.opacity = '1';
    mainNav.style.visibility = 'visible';
    mainNav.style.transform = 'translateY(0)';
});

// Hide navigation when leaving hamburger area
hamburger.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!mainNav.matches(':hover') && !header.matches(':hover')) {
            mainNav.style.opacity = '0';
            mainNav.style.visibility = 'hidden';
            mainNav.style.transform = 'translateY(-10px)';
        }
    }, 100);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

console.log('Servio - Empowering the Digital Countryside loaded successfully! 🌱🚀');

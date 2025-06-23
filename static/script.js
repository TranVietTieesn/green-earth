// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Stats Counter Animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        const increment = target / 200;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = current.toFixed(1);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target.toFixed(1);
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Trigger stats animation when stats section is visible
            if (entry.target.classList.contains('stats')) {
                animateStats();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const elementsToAnimate = document.querySelectorAll('.stat-item, .highlight-card, .timeline-item, .fact-card, .biome-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Observe stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

// Smooth scrolling for anchor links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Loading animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 1000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const earthAnimation = document.querySelector('.earth-animation');
    if (earthAnimation) {
        earthAnimation.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add floating animation to cards
function addFloatingAnimation() {
    const cards = document.querySelectorAll('.highlight-card, .biome-card, .fact-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('floating');
    });
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .floating {
        animation: float 6s ease-in-out infinite;
    }
`;
document.head.appendChild(style);

// Initialize floating animation
document.addEventListener('DOMContentLoaded', addFloatingAnimation);

// Interactive earth rotation on mouse move
document.addEventListener('mousemove', (e) => {
    const earth = document.querySelector('.earth');
    const rotatingEarth = document.querySelector('.rotating-earth');
    
    if (earth || rotatingEarth) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        if (earth) {
            earth.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        }
        if (rotatingEarth) {
            rotatingEarth.style.transform = `rotateY(${x * 0.1}deg) rotateX(${y * 0.1}deg)`;
        }
    }
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(74, 222, 128, 0.6);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particle-float ${3 + Math.random() * 4}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .particle {
        pointer-events: none;
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Add typed text effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typed text on page load
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 30);
    }
});

// Smooth scrolling and interactive effects for Green Planet website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initSmoothScrolling();
    initScrollAnimations();
    initParallaxEffects();
    initCounterAnimations();
    initResponsiveNavigation();
    initLanguageSelector();
    initThemeEffects();
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Trigger counter animation for stat items
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.hero-content, .card, .stat-item, .highlight-item, .intro-content, .section-title'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Parallax effects for hero section
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }
}

// Counter animation for statistics
function animateCounter(element) {
    const numberElement = element.querySelector('.stat-number');
    if (!numberElement || numberElement.dataset.animated) return;
    
    const finalNumber = parseFloat(numberElement.textContent);
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = finalNumber * easeOutQuart;
        
        // Format number appropriately
        if (finalNumber >= 1) {
            numberElement.textContent = current.toFixed(1);
        } else {
            numberElement.textContent = current.toFixed(2);
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            numberElement.textContent = finalNumber;
            numberElement.dataset.animated = 'true';
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Responsive navigation toggle
function initResponsiveNavigation() {
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu toggle button
    const mobileToggle = document.createElement('button');
    mobileToggle.classList.add('mobile-toggle');
    mobileToggle.innerHTML = '☰';
    mobileToggle.setAttribute('aria-label', 'Toggle navigation');
    
    const nav = document.querySelector('nav');
    if (nav && window.innerWidth <= 768) {
        nav.appendChild(mobileToggle);
        
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileToggle.innerHTML = '☰';
            }
        });
    }
}

// Language selector enhancement
function initLanguageSelector() {
    const languageLinks = document.querySelectorAll('.language-selector a');
    
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add loading effect
            this.style.opacity = '0.6';
            this.innerHTML = '⟳';
            
            // Let the link proceed normally
            setTimeout(() => {
                this.style.opacity = '1';
            }, 300);
        });
    });
}

// Theme-specific effects
function initThemeEffects() {
    // Floating particles effect for hero section
    createFloatingParticles();
    
    // Card hover effects
    const cards = document.querySelectorAll('.card, .highlight-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px var(--shadow-green)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px var(--shadow-green)';
        });
    });
    
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Create floating particles for hero section
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('floating-particle');
        
        // Random positioning and sizing
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Different shades of green
        const greenShades = ['#4ade80', '#22c55e', '#16a34a', '#15803d'];
        particle.style.backgroundColor = greenShades[Math.floor(Math.random() * greenShades.length)];
        
        hero.appendChild(particle);
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 8px 32px var(--shadow-green)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 20px var(--shadow-green)';
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Performance optimization: Throttled scroll events
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Lazy loading for images (if any are added later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add CSS for animations dynamically
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .floating-particle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.6;
            animation: float linear infinite;
            pointer-events: none;
        }
        
        @keyframes float {
            0% {
                transform: translateY(100vh) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 0.6;
            }
            90% {
                opacity: 0.6;
            }
            100% {
                transform: translateY(-100px) translateX(50px);
                opacity: 0;
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--dark-green);
            cursor: pointer;
            padding: 0.5rem;
        }
        
        @media (max-width: 768px) {
            .mobile-toggle {
                display: block;
            }
            
            .nav-links {
                position: fixed;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 1rem;
                box-shadow: 0 4px 20px var(--shadow-green);
                transform: translateY(-100%);
                transition: transform 0.3s ease;
                z-index: 999;
            }
            
            .nav-links.active {
                transform: translateY(0);
            }
        }
        
        .keyboard-navigation *:focus {
            outline: 2px solid var(--primary-green);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

// Initialize additional styles
addAnimationStyles();

// Console welcome message
console.log(`
🌍 Welcome to Green Planet! 🌍
Made with 💚 for our Earth
`);

// Export functions for potential external use
window.GreenPlanet = {
    initSmoothScrolling,
    initScrollAnimations,
    initParallaxEffects,
    initCounterAnimations,
    initResponsiveNavigation,
    initLanguageSelector,
    initThemeEffects
};

// Living Planet - Modern Interactive JavaScript
// Enhanced animations and user experience

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initAOS();
    initSmoothScrolling();
    initHeaderEffects();
    initCounterAnimations();
    initParticleEffects();
    initScrollToTop();
    initLanguageSelector();
    initResponsiveFeatures();
    
    console.log('🌍 Living Planet initialized successfully! 🌱');
});

// AOS (Animate On Scroll) initialization
function initAOS() {
    // Simple AOS-like functionality
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-aos-delay') || 0;
                
                setTimeout(() => {
                    element.classList.add('fade-in-up');
                    
                    // Special handling for different animations
                    if (element.hasAttribute('data-aos')) {
                        const animation = element.getAttribute('data-aos');
                        element.classList.add(animation);
                    }
                }, parseInt(delay));
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attributes
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth scrolling for all anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Header scroll effects
function initHeaderEffects() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    
    const handleScroll = throttle(() => {
        const currentScrollY = window.scrollY;
        
        // Add/remove scrolled class
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
}

// Counter animations for statistics
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const animateCounter = (counter) => {
        if (counter.classList.contains('counting')) return; // Prevent multiple animations
        counter.classList.add('counting');
        
        const target = parseFloat(counter.getAttribute('data-count'));
        if (isNaN(target)) {
            console.error('Invalid data-count value:', counter.getAttribute('data-count'));
            return;
        }
        
        const duration = 2000;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = target * easeOutCubic;
            
            // Format the number based on value
            let displayText;
            if (target === 4.5) {
                // For 4.5 billion years
                displayText = current.toFixed(1) + 'B';
            } else if (target === 71) {
                // For 71% ocean
                displayText = Math.floor(current) + '%';
            } else if (target === 8.7) {
                // For 8.7 million species
                displayText = current.toFixed(1) + 'M';
            } else if (target === 8.0) {
                // For 8.0 billion people
                displayText = current.toFixed(1) + 'B';
            } else if (target >= 10) {
                displayText = Math.floor(current).toString();
            } else {
                displayText = current.toFixed(1);
            }
            
            counter.textContent = displayText;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                // Final values
                if (target === 4.5) {
                    counter.textContent = '4.5B';
                } else if (target === 71) {
                    counter.textContent = '71%';
                } else if (target === 8.7) {
                    counter.textContent = '8.7M';
                } else if (target === 8.0) {
                    counter.textContent = '8.0B';
                } else {
                    counter.textContent = target.toString();
                }
                counter.classList.remove('counting');
            }
        };
        
        requestAnimationFrame(updateCounter);
    };
    
    // Observe counters for animation trigger
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        // Initialize counter text
        const target = parseFloat(counter.getAttribute('data-count'));
        if (!isNaN(target)) {
            // Set static values as fallback (in case JS fails)
            if (target === 4.5 && !counter.textContent.includes('B')) {
                counter.textContent = '0';
            } else if (target === 71 && !counter.textContent.includes('%')) {
                counter.textContent = '0';
            } else if (target === 8.7 && !counter.textContent.includes('M')) {
                counter.textContent = '0';
            } else if (target === 8.0 && !counter.textContent.includes('B')) {
                counter.textContent = '0';
            }
            counterObserver.observe(counter);
        }
    });
}

// Particle effects for background
function initParticleEffects() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create floating particles
    const particleCount = 20;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('floating-particle');
        
        // Random properties
        const size = Math.random() * 6 + 2;
        const x = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: var(--primary-green);
            border-radius: 50%;
            opacity: 0.3;
            left: ${x}%;
            animation: floatUp ${duration}s linear infinite ${delay}s;
            pointer-events: none;
        `;
        
        hero.appendChild(particle);
        particles.push(particle);
    }
    
    // Add CSS for particle animation
    if (!document.getElementById('particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(100vh) translateX(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.3;
                }
                90% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(-100px) translateX(20px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Scroll to top button
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTop';
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all var(--duration-normal) ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    const toggleScrollBtn = throttle(() => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    }, 100);
    
    window.addEventListener('scroll', toggleScrollBtn);
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'scale(1)';
    });
}

// Language selector enhancements
function initLanguageSelector() {
    const languageLinks = document.querySelectorAll('.language-selector a');
    
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add loading effect
            const originalText = this.textContent;
            this.style.opacity = '0.6';
            this.textContent = '⟳';
            
            // Restore after a short delay (for visual feedback)
            setTimeout(() => {
                this.style.opacity = '1';
                this.textContent = originalText;
            }, 500);
        });
    });
}

// Responsive features and mobile optimizations
function initResponsiveFeatures() {
    // Mobile menu toggle
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-toggle')) {
            const mobileToggle = document.createElement('button');
            mobileToggle.classList.add('mobile-toggle');
            mobileToggle.innerHTML = '☰';
            mobileToggle.setAttribute('aria-label', 'Toggle navigation');
            
            nav.appendChild(mobileToggle);
            
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('mobile-active');
                mobileToggle.innerHTML = navLinks.classList.contains('mobile-active') ? '✕' : '☰';
                
                // Prevent body scroll when menu is open
                document.body.style.overflow = navLinks.classList.contains('mobile-active') ? 'hidden' : '';
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!nav.contains(e.target) && navLinks.classList.contains('mobile-active')) {
                    navLinks.classList.remove('mobile-active');
                    mobileToggle.innerHTML = '☰';
                    document.body.style.overflow = '';
                }
            });
        }
    };
    
    // Initialize mobile menu on load and resize
    createMobileMenu();
    window.addEventListener('resize', throttle(createMobileMenu, 250));
    
    // Touch gestures for mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
}

// Enhanced card hover effects
function initCardEffects() {
    const cards = document.querySelectorAll('.card, .highlight-item, .stat-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all var(--duration-normal) ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Intersection Observer for general animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe sections for general animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
}

// Performance optimized throttle function
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Debounce function for resize events
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor loading time
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`🚀 Page loaded in ${loadTime.toFixed(2)}ms`);
    });
    
    // Monitor scroll performance
    let scrollCount = 0;
    window.addEventListener('scroll', () => {
        scrollCount++;
    });
    
    setInterval(() => {
        if (scrollCount > 0) {
            console.log(`📊 Scroll events: ${scrollCount}/sec`);
            scrollCount = 0;
        }
    }, 1000);
}

// Keyboard navigation support
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // Escape key closes mobile menu
        if (e.key === 'Escape') {
            const navLinks = document.querySelector('.nav-links');
            const mobileToggle = document.querySelector('.mobile-toggle');
            
            if (navLinks && navLinks.classList.contains('mobile-active')) {
                navLinks.classList.remove('mobile-active');
                if (mobileToggle) mobileToggle.innerHTML = '☰';
                document.body.style.overflow = '';
            }
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Add dynamic CSS for enhanced styles
function addDynamicStyles() {
    const style = document.createElement('style');
    style.id = 'living-planet-dynamic-styles';
    style.textContent = `
        /* Mobile menu styles */
        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--primary-green);
            cursor: pointer;
            padding: var(--space-2);
            margin-left: var(--space-4);
        }
        
        @media (max-width: 768px) {
            .mobile-toggle {
                display: block;
            }
            
            .nav-links.mobile-active {
                position: fixed;
                top: 100%;
                left: 0;
                right: 0;
                background: var(--surface);
                flex-direction: column;
                padding: var(--space-8);
                box-shadow: var(--shadow-xl);
                transform: translateY(0);
                z-index: 999;
                border-top: 1px solid var(--border);
            }
            
            .nav-links:not(.mobile-active) {
                transform: translateY(-100%);
            }
        }
        
        /* Keyboard navigation */
        .keyboard-navigation *:focus {
            outline: 2px solid var(--primary-green);
            outline-offset: 2px;
        }
        
        /* Touch device optimizations */
        .touch-device .btn:hover {
            transform: none;
        }
        
        .touch-device .card:hover {
            transform: none;
        }
        
        /* Enhanced animations */
        .fade-up {
            animation: fadeInUp 0.8s ease-out;
        }
        
        .zoom-in {
            animation: zoomIn 0.6s ease-out;
        }
        
        @keyframes zoomIn {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .in-view {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Scroll indicator */
        .scroll-to-top:hover {
            transform: scale(1.1) translateY(-2px);
            box-shadow: var(--shadow-xl);
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize all dynamic features
initCardEffects();
initIntersectionObserver();
initKeyboardNavigation();
addDynamicStyles();

// Development mode features
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    initPerformanceMonitoring();
}

// Export for external access
window.LivingPlanet = {
    initAOS,
    initSmoothScrolling,
    initHeaderEffects,
    initCounterAnimations,
    initParticleEffects,
    initScrollToTop,
    throttle,
    debounce
}; 
// Main JavaScript file for Aman Kumar's portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const contactForm = document.getElementById('contactForm');

    // Toggle menu
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            navLinks.classList.add('show');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('show');
            menuOpen = false;
        }
    });

    // Close menu when clicking on a nav link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('show');
            menuOpen = false;
        });
    });

    // Sticky header
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button
        if(window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Portfolio filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if(filter === 'all') {
                    item.style.display = 'block';
                } else if(item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navHeight = document.querySelector('header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if(window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Form submission (prevent default for demo)
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if(name && email && subject && message) {
                // In a real application, you would send this data to a server
                alert('Thank you for your message! This is a demo form, so no message was actually sent.');
                
                // Reset form
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Form submission handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            form.classList.add('loading');
        });
    }

    // Animation on scroll (simple implementation)
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-header, .about-content, .skills-cards, .portfolio-items, .timeline, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if(elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial styles for animation
    document.querySelectorAll('.section-header, .about-content, .skills-cards, .portfolio-items, .timeline, .contact-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-in-out';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Hero section animation
    const animateHero = () => {
        const heroElements = {
            title: document.querySelector('.hero-text h1'),
            subtitle: document.querySelector('.hero-text h2'),
            description: document.querySelector('.hero-text p'),
            buttons: document.querySelector('.hero-btns'),
            social: document.querySelector('.social-icons'),
            image: document.querySelector('.hero-image')
        };

        // Animation sequence
        setTimeout(() => {
            heroElements.title.style.opacity = '1';
            heroElements.title.style.transform = 'translateY(0)';
        }, 300);

        setTimeout(() => {
            heroElements.subtitle.style.opacity = '1';
            heroElements.subtitle.style.transform = 'translateY(0)';
        }, 600);

        setTimeout(() => {
            heroElements.description.style.opacity = '1';
            heroElements.description.style.transform = 'translateY(0)';
        }, 900);

        setTimeout(() => {
            heroElements.buttons.style.opacity = '1';
            heroElements.buttons.style.transform = 'translateY(0)';
        }, 1200);

        setTimeout(() => {
            heroElements.social.style.opacity = '1';
            heroElements.social.style.transform = 'translateX(0)';
        }, 1500);

        setTimeout(() => {
            heroElements.image.style.opacity = '1';
            heroElements.image.style.transform = 'scale(1)';
        }, 1800);
    };

    // Initial styles for hero animation
    const initHeroStyles = () => {
        const elements = [
            '.hero-text h1',
            '.hero-text h2',
            '.hero-text p',
            '.hero-btns',
            '.social-icons'
        ].forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.6s ease-out';
            }
        });

        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.opacity = '0';
            heroImage.style.transform = 'scale(0.95)';
            heroImage.style.transition = 'all 0.8s ease-out';
        }
    };

    // Initialize hero styles and trigger animation
    initHeroStyles();
    window.addEventListener('load', animateHero);

    // Refresh AOS when DOM is loaded
    AOS.refresh();
});

// Optional: Refresh AOS on window resize
window.addEventListener('resize', function() {
    AOS.refresh();
});

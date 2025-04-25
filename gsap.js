document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP with ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // // Mobile menu toggle functionality
    // const menuBtn = document.querySelector('.menu');
    // const closeBtn = document.querySelector('.close');
    // const sidebar = document.querySelector('.sidebar');

    // menuBtn.addEventListener('click', () => {
    //     sidebar.style.left = '0';
    // });

    // closeBtn.addEventListener('click', () => {
    //     sidebar.style.left = '-100%';
    // });

    // // Close sidebar when clicking on menu items
    // const menuItems = document.querySelectorAll('.menu-items a');
    // menuItems.forEach(item => {
    //     item.addEventListener('click', () => {
    //         sidebar.style.left = '-100%';
    //     });
    // });

    // Hero section animation
    gsap.from('header', {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('section:first-of-type div:first-child', {
        scrollTrigger: {
            trigger: 'section:first-of-type',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    gsap.from('section:first-of-type div:last-child', {
        scrollTrigger: {
            trigger: 'section:first-of-type',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 1
    });

    // About section animation
    gsap.from('#about div:first-child', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 1
    });

    gsap.from('#about div:last-child', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from('#founder div:first-child', {
        scrollTrigger: {
            trigger: '#founder',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 1
    });

    gsap.from('#founder div:last-child', {
        scrollTrigger: {
            trigger: '#founder',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 1
    });





    // Stats counter animation
    const statItems = document.querySelectorAll('section:nth-of-type(4) > div');
    statItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: 'section:nth-of-type(4)',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'back.out(1.7)'
        });
    });

    // Gallery section animation
    gsap.from('section:nth-of-type(5) h1', {
        scrollTrigger: {
            trigger: 'section:nth-of-type(5)',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    const galleryImages = document.querySelectorAll('section:nth-of-type(5) img');
    galleryImages.forEach((img, index) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Services section animation
    gsap.from('#services h1', {
        scrollTrigger: {
            trigger: '#services',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    const serviceCards = document.querySelectorAll('#services .group');
    serviceCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Testimonials section animation
    gsap.from('#testimonials h1', {
        scrollTrigger: {
            trigger: '#testimonials',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    const testimonials = document.querySelectorAll('#testimonials > div > div > div');
    testimonials.forEach((testimonial, index) => {
        gsap.from(testimonial, {
            scrollTrigger: {
                trigger: testimonial,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out'
        });
    });

    // Why Choose Us section animation
    gsap.from('section:nth-of-type(8) h1', {
        scrollTrigger: {
            trigger: 'section:nth-of-type(8)',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    const features = document.querySelectorAll('section:nth-of-type(8) > div > div');
    features.forEach((feature, index) => {
        gsap.from(feature, {
            scrollTrigger: {
                trigger: feature,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out'
        });
    });

    // Team section animation
    gsap.from('#ourteam h1', {
        scrollTrigger: {
            trigger: '#ourteam',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from('#ourteam p', {
        scrollTrigger: {
            trigger: '#ourteam',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2
    });

    gsap.from('#ourteam img', {
        scrollTrigger: {
            trigger: '#ourteam',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out'
    });

    // Contact section animation
    gsap.from('#contact h1', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from('#contact > div > div:first-child > div', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    gsap.from('#contact > div > div:last-child', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 1
    });

    // Map animation
    gsap.from('section:nth-of-type(11) iframe', {
        scrollTrigger: {
            trigger: 'section:nth-of-type(11)',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        scale: 0.95,
        opacity: 0,
        duration: 1
    });

    // Footer animation
    const footerColumns = document.querySelectorAll('footer > div > div');
    footerColumns.forEach((column, index) => {
        gsap.from(column, {
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2
        });
    });

    gsap.from('footer p:last-of-type', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
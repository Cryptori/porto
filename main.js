// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      
      // Add animation class
      if (!isVisible) {
        navLinks.classList.add('mobile-menu-open');
      } else {
        navLinks.classList.remove('mobile-menu-open');
      }
    });
  }

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
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
        
        // Close mobile menu if open
        if (window.innerWidth <= 768 && navLinks) {
          navLinks.style.display = 'none';
          navLinks.classList.remove('mobile-menu-open');
        }
      }
    });
  });

  // Navbar background on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(4, 4, 6, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
      } else {
        navbar.style.background = 'rgba(4, 4, 6, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
      }
    }
  });

  // Form submission
  const contactForm = document.querySelector('.form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      
      // Simulate form submission
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }

  // Skill bars animation
  const skillBars = document.querySelectorAll('.skill-progress');
  if (skillBars.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBar = entry.target;
          // Trigger animation by resetting and setting width
          skillBar.style.width = '0';
          setTimeout(() => {
            skillBar.style.width = skillBar.parentElement.parentElement.querySelector('span:last-child').textContent;
          }, 100);
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  }

  // Language switcher (basic)
  const languageBtn = document.querySelector('.btn-outline');
  if (languageBtn) {
    languageBtn.addEventListener('click', () => {
      const currentLang = languageBtn.textContent.trim();
      languageBtn.textContent = currentLang === 'EN' ? 'ID' : 'EN';
      // Note: For full multi-language, you'd need the language.js file
    });
  }

  // ===== THEME TOGGLE FUNCTIONALITY =====
  const themeToggle = document.getElementById('themeToggle');
  
  if (themeToggle) {
    // Check for saved theme or prefer color scheme
    const getPreferredTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    };

    // Set initial theme
    const currentTheme = getPreferredTheme();
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Toggle theme function
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update theme
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Add animation class
      themeToggle.classList.add('theme-changing');
      setTimeout(() => {
        themeToggle.classList.remove('theme-changing');
      }, 300);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'light' : 'dark');
      }
    });
  }

  // Update active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

console.log('Portfolio loaded successfully! 🚀');
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Chat form submission
function handleChatSubmit(event) {
    event.preventDefault();
    
    const chatInput = document.getElementById('chatMessage');
    const message = chatInput.value.trim();
    
    if (message) {
        console.log('Chat message:', message);
        
        // Show a simple response (you can enhance this)
        alert('Thank you for your message! We\'ll get back to you soon.');
        
        // Clear the input
        chatInput.value = '';
    }
}

// Contact form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    if (name && email && message) {
        console.log('Form data:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! We\'ll get back to you soon.');
        
        // Clear the form
        document.getElementById('contactName').value = '';
        document.getElementById('contactEmail').value = '';
        document.getElementById('contactMessage').value = '';
    }
}

// Start flow button action
function startFlow() {
    alert('Welcome to Verse! Your journey of calm and clarity begins now.');
    // You can redirect to a sign-up page or show a modal here
}

// Smooth scrolling for internal links (if you add navigation)
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

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe team members
    document.querySelectorAll('.team-member').forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(20px)';
        member.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(member);
    });
});

// Add hover effects for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Form validation enhancement
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Enhanced contact form validation
document.getElementById('contactEmail').addEventListener('blur', function() {
    const email = this.value.trim();
    if (email && !validateEmail(email)) {
        this.style.borderColor = '#ef4444';
        this.style.boxShadow = '0 0 0 1px #ef4444';
    } else {
        this.style.borderColor = '#475569';
        this.style.boxShadow = 'none';
    }
});

// Add typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
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

// Uncomment to enable typing effect on hero title
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('.hero-title');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 80);
// });

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isOpen = answer.classList.contains('open');

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('open');
            });

            // Toggle current
            if (!isOpen) {
                answer.classList.add('open');
            }
        });
    });
});

// Visitor Counter
document.addEventListener('DOMContentLoaded', function () {
    const counterKey = 'verseVisitCount';
    let visitCount = localStorage.getItem(counterKey);

    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
    localStorage.setItem(counterKey, visitCount);

    const counterDisplay = document.getElementById('visitCounter');
    if (counterDisplay) {
        counterDisplay.textContent = `You've visited this site ${visitCount} time${visitCount > 1 ? 's' : ''}.`;
    }
});
// Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById('themeSwitcher');

  // Load theme from localStorage
  const savedTheme = localStorage.getItem('verse-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    if (switcher) switcher.checked = true;
  }

  if (switcher) {
    switcher.addEventListener("change", () => {
      if (switcher.checked) {
        document.body.classList.add('light');
        localStorage.setItem('verse-theme', 'light');
      } else {
        document.body.classList.remove('light');
        localStorage.setItem('verse-theme', 'dark');
      }
    });
  }
});


// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

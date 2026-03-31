/**
 * YouTube Premium Landing Page Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Theme Toggle (Dark/Light Mode) --- */
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('.theme-icon');
    const htmlEl = document.documentElement;

    // Check LocalStorage for saved theme
    const savedTheme = localStorage.getItem('ytp-theme') || 'dark';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem('ytp-theme', theme);
        
        // Update Icon icon logic (light_mode/dark_mode based on current theme, not what it's switching to)
        if(theme === 'dark') {
            themeIcon.textContent = 'light_mode';
        } else {
            themeIcon.textContent = 'dark_mode';
        }
    }





    /* --- 3. Checkout Button Handling (Shopify Redirects) --- */
    const checkoutBtns = document.querySelectorAll('.checkout-btn');
    
    checkoutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const shopifyLink = btn.getAttribute('data-link');
            if(shopifyLink) {
                // Redirect user to Shopify Checkout
                window.location.href = shopifyLink;
            }
        });
    });


    /* --- 4. Reviews Slider Navigation --- */
    const slider = document.getElementById('reviewsSlider');
    const nextBtn = document.getElementById('nextReview');
    const prevBtn = document.getElementById('prevReview');

    // Scroll amount per click (card width + gap approximately)
    const scrollAmount = 370;

    if (nextBtn && prevBtn && slider) {
        nextBtn.addEventListener('click', () => {
            // In RTL, "Next" might mean scrolling left (negative values in some browsers, positive in others)
            // using purely scrollBy handles the browser RTL differences automatically
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    
    /* --- 5. Scroll Animations (Intersection Observer) --- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const animateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => animateObserver.observe(el));

    /* --- 6. Real Countdown Timer logic --- */
    const daysEl = document.getElementById('days-val');
    const hoursEl = document.getElementById('hours-val');
    const minutesEl = document.getElementById('minutes-val');
    const secondsEl = document.getElementById('seconds-val');

    if (hoursEl && minutesEl && secondsEl) {
        // Starts from 2 days, 12 hours, 45 mins, 30 secs
        let totalSeconds = (2 * 86400) + (12 * 3600) + (45 * 60) + 30;

        setInterval(() => {
            if (totalSeconds <= 0) {
                return; // or reset the timer
            }
            totalSeconds--;

            const d = Math.floor(totalSeconds / 86400);
            const h = Math.floor((totalSeconds % 86400) / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;

            if (daysEl) daysEl.textContent = d.toString().padStart(2, '0');
            hoursEl.textContent = h.toString().padStart(2, '0');
            minutesEl.textContent = m.toString().padStart(2, '0');
            secondsEl.textContent = s.toString().padStart(2, '0');
        }, 1000);
    }
});

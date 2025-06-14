// DOM Elements
const loadingScreen = document.getElementById("loading-screen");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const skillBars = document.querySelectorAll(".skill-progress");
const statNumbers = document.querySelectorAll(".stat-number");
const portfolioFilters = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");
const contactForm = document.querySelector(".contact-form");
const audioToggle = document.getElementById("audioToggle");
const bgAudio = document.getElementById("bgAudio");

// Typing animation texts
const typingTexts = ["GAME DEVELOPER", "UNITY EXPERT", "UNREAL DEVELOPER", "3D ARTIST", "AI PROGRAMMER", "CREATIVE CODER"];

let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

// Initialize application
function initializeApp() {
  // Show loading screen and initialize
  showLoadingScreen();

  // Initialize particles background
  initParticles();
  // Initialize navigation
  initNavigation();

  // Initialize mobile navigation
  initMobileNavigation();

  // Initialize typing animation
  initTypingAnimation();

  // Initialize scroll animations
  initScrollAnimations();

  // Initialize portfolio filters
  initPortfolioFilters();

  // Initialize contact form
  initContactForm();

  // Initialize audio control
  initAudioControl();

  // Hide loading screen after 3 seconds
  setTimeout(() => {
    hideLoadingScreen();
    animateStatsOnLoad();
    animateSkillBars();
  }, 3000);
}

// Loading Screen
function showLoadingScreen() {
  loadingScreen.style.display = "flex";
}

function hideLoadingScreen() {
  loadingScreen.classList.add("hidden");
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 500);
}

// Particles.js initialization
function initParticles() {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#8b5cf6", "#06b6d4", "#ffffff"],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#8b5cf6",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
}

// Navigation functionality
function initNavigation() {
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetSection = this.getAttribute("data-section");

      // Remove active class from all links and sections
      navLinks.forEach((nav) => nav.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      // Add active class to clicked link and target section
      this.classList.add("active");
      document.getElementById(targetSection).classList.add("active");

      // Animate section transition
      animateSectionTransition(targetSection);
    });
  });

  // Handle contact button in home section
  const contactBtns = document.querySelectorAll('[data-section="contact"]');
  contactBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active from all
      navLinks.forEach((nav) => nav.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      // Activate contact
      document.querySelector('[data-section="contact"]').classList.add("active");
      document.getElementById("contact").classList.add("active");

      animateSectionTransition("contact");
    });
  });
}

// Section transition animation
function animateSectionTransition(targetSection) {
  const section = document.getElementById(targetSection);

  // Add animation class
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";

  setTimeout(() => {
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
    section.style.transition = "all 0.6s ease";
  }, 100);

  // Animate specific section content
  if (targetSection === "about") {
    animateSkillBars();
  } else if (targetSection === "home") {
    animateStatsOnLoad();
  }
}

// Typing animation
function initTypingAnimation() {
  const typedTextSpan = document.getElementById("typed-text");

  function type() {
    const currentText = typingTexts[typingIndex];

    if (isDeleting) {
      typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = 100;

    if (isDeleting) {
      typeSpeed = 50;
    }

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % typingTexts.length;
      typeSpeed = 500; // Pause before starting new word
    }

    setTimeout(type, typeSpeed);
  }

  // Start typing animation
  type();
}

// Animate statistics numbers
function animateStatsOnLoad() {
  statNumbers.forEach((stat) => {
    const target = parseInt(stat.getAttribute("data-count"));
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);

      stat.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        stat.textContent = target;
      }
    }

    requestAnimationFrame(updateNumber);
  });
}

// Animate skill bars
function animateSkillBars() {
  skillBars.forEach((bar, index) => {
    const width = bar.getAttribute("data-width");

    setTimeout(() => {
      bar.style.width = width + "%";
    }, index * 200); // Stagger animation
  });
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe all portfolio items and blog posts
  const observeElements = document.querySelectorAll(".portfolio-item, .blog-post, .timeline-item");
  observeElements.forEach((el) => {
    observer.observe(el);
  });
}

// Portfolio filtering
function initPortfolioFilters() {
  portfolioFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      // Remove active class from all filters
      portfolioFilters.forEach((f) => f.classList.remove("active"));
      // Add active class to clicked filter
      this.classList.add("active");

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        const itemCategories = item.getAttribute("data-category").split(" ");

        if (filterValue === "all" || itemCategories.includes(filterValue)) {
          item.style.display = "block";
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";

          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
            item.style.transition = "all 0.3s ease";
          }, 100);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";

          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Contact form functionality
function initContactForm() {
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Show loading state
      const submitBtn = this.querySelector(".submit-btn");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SENDING...';
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        // Show success message
        showNotification("Message sent successfully!", "success");

        // Reset form
        this.reset();

        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
}

// Audio control
function initAudioControl() {
  let isPlaying = false;

  audioToggle.addEventListener("click", function () {
    if (isPlaying) {
      bgAudio.pause();
      this.innerHTML = '<i class="fas fa-volume-mute"></i>';
      this.classList.add("muted");
    } else {
      bgAudio.play().catch((e) => {
        console.log("Audio play failed:", e);
      });
      this.innerHTML = '<i class="fas fa-volume-up"></i>';
      this.classList.remove("muted");
    }
    isPlaying = !isPlaying;
  });
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <i class="fas fa-${type === "success" ? "check" : "info"}-circle"></i>
        <span>${message}</span>
    `;

  // Add styles
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: type === "success" ? "#10b981" : "#8b5cf6",
    color: "#ffffff",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    zIndex: "10000",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease",
  });

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  // ESC key to close modals or return to home
  if (e.key === "Escape") {
    const activeSection = document.querySelector(".section.active");
    if (activeSection && activeSection.id !== "home") {
      // Navigate to home
      navLinks.forEach((nav) => nav.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      document.querySelector('[data-section="home"]').classList.add("active");
      document.getElementById("home").classList.add("active");

      animateSectionTransition("home");
    }
  }
});

// Mouse cursor effects
function initCursorEffects() {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  Object.assign(cursor.style, {
    position: "fixed",
    width: "20px",
    height: "20px",
    background: "linear-gradient(45deg, #8b5cf6, #06b6d4)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: "9999",
    opacity: "0.8",
    transform: "translate(-50%, -50%)",
    transition: "all 0.1s ease",
  });

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Hide cursor when leaving window
  document.addEventListener("mouseleave", function () {
    cursor.style.opacity = "0";
  });

  document.addEventListener("mouseenter", function () {
    cursor.style.opacity = "0.8";
  });
}

// Initialize cursor effects for desktop only
if (window.innerWidth > 768) {
  initCursorEffects();
}

// Lazy loading for images
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Performance optimization - debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Window resize handler
const handleResize = debounce(() => {
  // Re-initialize particles on resize
  if (window.pJSDom && window.pJSDom[0]) {
    window.pJSDom[0].pJS.fn.canvasSize();
  }
}, 250);

window.addEventListener("resize", handleResize);

// Preload critical images
function preloadImages() {
  const imageUrls = ["assets/images/avatar.jpg", "assets/images/portfolio/project1.jpg", "assets/images/portfolio/project2.jpg", "assets/images/portfolio/project3.jpg"];

  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Initialize image preloading
preloadImages();

// Add GSAP animations for enhanced effects
if (typeof gsap !== "undefined") {
  // Animate elements on scroll
  gsap.registerPlugin(ScrollTrigger);

  // Animate timeline items
  gsap.from(".timeline-item", {
    duration: 0.8,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 80%",
    },
  });

  // Animate portfolio items
  gsap.from(".portfolio-item", {
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".portfolio-grid",
      start: "top 80%",
    },
  });

  // Animate skill bars
  gsap.from(".skill-item", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".skills-grid",
      start: "top 80%",
    },
  });
}

// Service Worker for offline functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// Add loading states for better UX
function addLoadingStates() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("loading")) {
        this.classList.add("loading");

        setTimeout(() => {
          this.classList.remove("loading");
        }, 2000);
      }
    });
  });
}

// Initialize loading states
addLoadingStates();

// Console welcome message
console.log(
  `
%c🎮 Game Developer Portfolio
%cWelcome to my interactive portfolio!
%cBuilt with love using vanilla JavaScript, CSS3, and modern web technologies.

Feel free to explore the code and reach out if you have any questions!

Contact: john.doe@email.com
`,
  "color: #8b5cf6; font-size: 24px; font-weight: bold;",
  "color: #06b6d4; font-size: 16px;",
  "color: #ffffff; font-size: 14px;"
);

// Mobile Navigation functionality
function initMobileNavigation() {
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");
  const desktopNavLinks = document.querySelectorAll(".nav-link");
  const mobileHomeBtn = document.querySelector(".mobile-home-btn");

  // Handle mobile home button click
  if (mobileHomeBtn) {
    mobileHomeBtn.addEventListener("click", function () {
      const targetSection = "home";

      // Remove active class from all elements
      mobileNavItems.forEach((nav) => nav.classList.remove("active"));
      desktopNavLinks.forEach((nav) => nav.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      // Add active class to home elements
      this.classList.add("active");
      const homeNavLink = document.querySelector('[data-section="home"]');
      if (homeNavLink) {
        homeNavLink.classList.add("active");
      }

      // Show home section
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.classList.add("active");
        animateSectionTransition("home");

        // Haptic feedback
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
      }
    });
  }

  // Handle mobile navigation clicks
  mobileNavItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      const targetSection = this.getAttribute("data-section");

      // Remove active class from all mobile nav items
      mobileNavItems.forEach((nav) => nav.classList.remove("active"));

      // Remove active class from all desktop nav items
      desktopNavLinks.forEach((nav) => nav.classList.remove("active"));

      // Remove active class from all sections
      sections.forEach((section) => section.classList.remove("active"));

      // Add active class to clicked mobile nav item
      this.classList.add("active");

      // Add active class to corresponding desktop nav item
      const correspondingDesktopNav = document.querySelector(`[data-section="${targetSection}"]`);
      if (correspondingDesktopNav) {
        correspondingDesktopNav.classList.add("active");
      }

      // Show target section
      const targetSectionElement = document.getElementById(targetSection);
      if (targetSectionElement) {
        targetSectionElement.classList.add("active");

        // Animate section transition
        animateSectionTransition(targetSection);

        // Add haptic feedback for mobile devices
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
      }
    });
  });
  // Sync desktop and mobile navigation
  desktopNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetSection = this.getAttribute("data-section");

      // Update mobile navigation
      mobileNavItems.forEach((item) => item.classList.remove("active"));
      if (mobileHomeBtn) mobileHomeBtn.classList.remove("active");

      if (targetSection === "home") {
        if (mobileHomeBtn) mobileHomeBtn.classList.add("active");
      } else {
        const correspondingMobileNav = document.querySelector(`.mobile-nav-item[data-section="${targetSection}"]`);
        if (correspondingMobileNav) {
          correspondingMobileNav.classList.add("active");
        }
      }
    });
  });
  // Set initial active state for mobile nav
  function setInitialMobileNavState() {
    const activeDesktopNav = document.querySelector(".nav-link.active");
    if (activeDesktopNav) {
      const activeSection = activeDesktopNav.getAttribute("data-section");

      // Clear all mobile nav states
      mobileNavItems.forEach((item) => item.classList.remove("active"));
      if (mobileHomeBtn) mobileHomeBtn.classList.remove("active");

      if (activeSection === "home") {
        if (mobileHomeBtn) mobileHomeBtn.classList.add("active");
      } else {
        const correspondingMobileNav = document.querySelector(`.mobile-nav-item[data-section="${activeSection}"]`);
        if (correspondingMobileNav) {
          correspondingMobileNav.classList.add("active");
        }
      }
    }
  }

  // Initialize mobile nav state
  setInitialMobileNavState();

  // Handle window resize - sync navigation states
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
      setInitialMobileNavState();
    }
  });

  // Handle scroll to update active navigation on mobile
  let ticking = false;

  function updateActiveNavOnScroll() {
    if (window.innerWidth <= 768) {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section.classList.contains("active")) {
          const sectionId = section.getAttribute("id");

          // Update mobile nav
          mobileNavItems.forEach((item) => item.classList.remove("active"));
          const correspondingMobileNav = document.querySelector(`.mobile-nav-item[data-section="${sectionId}"]`);
          if (correspondingMobileNav) {
            correspondingMobileNav.classList.add("active");
          }
        }
      });
    }
    ticking = false;
  }

  function requestScrollUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateActiveNavOnScroll);
      ticking = true;
    }
  }

  // Throttled scroll listener
  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
}

// Touch interactions for mobile navigation
function initMobileTouchInteractions() {
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

  mobileNavItems.forEach((item) => {
    // Add touch start effect
    item.addEventListener(
      "touchstart",
      function () {
        this.style.transform = "translateY(0) scale(0.95)";
        this.style.background = "rgba(139, 92, 246, 0.2)";
      },
      { passive: true }
    );

    // Reset on touch end
    item.addEventListener(
      "touchend",
      function () {
        setTimeout(() => {
          this.style.transform = "";
          this.style.background = "";
        }, 150);
      },
      { passive: true }
    );

    // Handle touch cancel
    item.addEventListener(
      "touchcancel",
      function () {
        this.style.transform = "";
        this.style.background = "";
      },
      { passive: true }
    );
  });
}

// Initialize touch interactions for mobile
if (window.innerWidth <= 768) {
  initMobileTouchInteractions();
}

// Add swipe gestures for section navigation on mobile
function initMobileSwipeNavigation() {
  if (window.innerWidth > 768) return;

  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;

  const mainContent = document.querySelector(".main-content");

  mainContent.addEventListener(
    "touchstart",
    function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true }
  );

  mainContent.addEventListener(
    "touchmove",
    function (e) {
      if (!startX || !startY) return;

      endX = e.touches[0].clientX;
      endY = e.touches[0].clientY;
    },
    { passive: true }
  );

  mainContent.addEventListener(
    "touchend",
    function () {
      if (!startX || !startY || !endX || !endY) return;

      const diffX = startX - endX;
      const diffY = startY - endY;

      // Only handle horizontal swipes that are more significant than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        const currentActiveNav = document.querySelector(".mobile-nav-item.active");
        const allMobileNavs = Array.from(document.querySelectorAll(".mobile-nav-item"));
        const currentIndex = allMobileNavs.indexOf(currentActiveNav);

        let nextIndex;

        if (diffX > 0) {
          // Swipe left - next section
          nextIndex = Math.min(currentIndex + 1, allMobileNavs.length - 1);
        } else {
          // Swipe right - previous section
          nextIndex = Math.max(currentIndex - 1, 0);
        }

        if (nextIndex !== currentIndex) {
          allMobileNavs[nextIndex].click();

          // Add haptic feedback
          if (navigator.vibrate) {
            navigator.vibrate(30);
          }
        }
      }

      // Reset values
      startX = 0;
      startY = 0;
      endX = 0;
      endY = 0;
    },
    { passive: true }
  );
}

// Initialize swipe navigation for mobile
initMobileSwipeNavigation();

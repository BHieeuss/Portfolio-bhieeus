// Enhanced Mobile Detection and Optimization
function isMobileDevice() {
  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
}

function isLowEndDevice() {
  return navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4 || window.innerWidth <= 480;
}

// Force Reset Progress Bar on Page Load
(function () {
  const resetProgress = () => {
    const progressFill = document.querySelector(".progress-fill");
    const progressPercentage = document.querySelector(".progress-percentage");
    const statusText = document.querySelector(".status-text");

    if (progressFill) {
      progressFill.style.width = "0%";
      progressFill.style.transition = "none";
      setTimeout(() => {
        progressFill.style.transition = "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      }, 100);
    }
    if (progressPercentage) progressPercentage.textContent = "0%";
    if (statusText) statusText.textContent = "Initializing...";
  };

  resetProgress();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", resetProgress);
  } else {
    resetProgress();
  }
})();

// Simple backup loader hide mechanism
function forceHideLoader() {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
}

// Smooth Loading Screen with Mobile Optimization
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  const progressFill = document.querySelector(".progress-fill");
  const progressPercentage = document.querySelector(".progress-percentage");
  const statusText = document.querySelector(".status-text");
  // Check if elements exist
  if (!loader || !progressFill || !progressPercentage || !statusText) {
    return;
  }

  // Force initialize progress at 0%
  progressFill.style.width = "0%";
  progressPercentage.textContent = "0%";
  statusText.textContent = "Initializing...";

  // Detect mobile device
  const isMobile = isMobileDevice();
  const isLowEnd = isLowEndDevice();

  // Adaptive loading stages based on device capabilities
  const loadingStages =
    isMobile || isLowEnd
      ? [
          { percentage: 30, text: "Loading...", duration: 120 },
          { percentage: 60, text: "Preparing...", duration: 100 },
          { percentage: 90, text: "Almost ready...", duration: 80 },
          { percentage: 100, text: "Welcome!", duration: 60 },
        ]
      : [
          { percentage: 20, text: "Loading assets...", duration: 200 },
          { percentage: 45, text: "Preparing components...", duration: 150 },
          { percentage: 70, text: "Setting up interface...", duration: 180 },
          { percentage: 90, text: "Almost ready...", duration: 120 },
          { percentage: 100, text: "Welcome!", duration: 100 },
        ];

  let currentStage = 0;
  let animationId;
  function updateProgress() {
    if (currentStage < loadingStages.length) {
      const stage = loadingStages[currentStage];

      // Use requestAnimationFrame for smooth updates
      if (animationId) {
        cancelAnimationFrame(animationId);
      }

      animationId = requestAnimationFrame(() => {
        progressFill.style.width = stage.percentage + "%";
        progressPercentage.textContent = stage.percentage + "%";
        statusText.textContent = stage.text;
      });

      currentStage++;
      setTimeout(updateProgress, stage.duration);
    } else {
      // Complete loading with device-optimized timing - show 100% longer
      const exitDelay = isMobile || isLowEnd ? 800 : 1000; // Show 100% for longer
      const fadeTime = 600; // Fixed fade time

      setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
          forceHideLoader();

          // Clean up
          if (animationId) {
            cancelAnimationFrame(animationId);
          }

          // Initialize hero animations if function exists
          try {
            if (typeof initHeroAnimations === "function") {
              initHeroAnimations();
            }
          } catch (error) {
            // Silent error handling
          }
        }, fadeTime);
      }, exitDelay);
    }
  }
  // Start loading with device-optimized delay
  const startDelay = isMobile || isLowEnd ? 500 : 800;

  setTimeout(() => {
    updateProgress();
  }, startDelay);
});

// Fallback: Force hide loader after maximum time
setTimeout(() => {
  const loader = document.querySelector(".loader");
  if (loader && loader.style.display !== "none") {
    forceHideLoader();
  }
}, 8000); // 8 seconds max

// Greeting Animation Effects
function initGreetingAnimations() {
  const handWave = document.querySelector(".hand-wave");
  const greetingContainer = document.querySelector(".greeting-container");

  if (handWave && greetingContainer) {
    // Auto wave every 5 seconds
    setInterval(() => {
      handWave.style.animation = "none";
      setTimeout(() => {
        handWave.style.animation = "waveIntense 1s ease-in-out";
        setTimeout(() => {
          handWave.style.animation = "wave 2s ease-in-out infinite";
        }, 1000);
      }, 100);
    }, 5000);

    // Interactive hover effect
    greetingContainer.addEventListener("mouseenter", () => {
      handWave.style.animation = "waveIntense 1s ease-in-out";
      setTimeout(() => {
        handWave.style.animation = "wave 2s ease-in-out infinite";
      }, 1000);
    });
  }

  // Add typing effect to terminal after greeting animation
  setTimeout(() => {
    initTerminalTyping();
  }, 2500);
}

// Hero Section Animations
function initHeroAnimations() {
  // Initialize greeting animations first
  initGreetingAnimations();
}

// Terminal Typing Animation
function initTerminalTyping() {
  const typingElements = document.querySelectorAll(".typing-text");
  const roleElement = document.querySelector(".typing-roles");
  const skillsElement = document.querySelector(".typing-skills");

  function typeText(element, text, speed = 100) {
    return new Promise((resolve) => {
      element.textContent = "";
      let i = 0;

      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          resolve();
        }
      }

      type();
    });
  }

  async function runTerminalSequence() {
    // Wait a bit before starting
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Type first command
    await typeText(typingElements[0], "whoami", 80);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Show role
    await typeText(roleElement, "Web Developer | Full-Stack Engineer | IT Student @TVU", 50);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Type second command
    await typeText(typingElements[1], "cat skills.txt", 80);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Show skills
    await typeText(skillsElement, "React.js, Node.js, .NET Core, SQL Server, Docker, Azure...", 50);
  }

  runTerminalSequence();
}

// Mobile menu toggle with dropdown animation
document.getElementById("mobile-menu-button").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  const button = this;

  // Toggle menu visibility with animation
  if (menu.classList.contains("show")) {
    // Hide menu
    menu.classList.remove("show");
    button.classList.remove("active");

    // Hide after animation completes
    setTimeout(() => {
      menu.style.display = "none";
    }, 400);
  } else {
    // Show menu
    menu.style.display = "block";
    button.classList.add("active");

    // Trigger animation after display is set
    setTimeout(() => {
      menu.classList.add("show");
    }, 10);
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    }); // Close mobile menu if open
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuButton = document.getElementById("mobile-menu-button");

    if (mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show");
      mobileMenuButton.classList.remove("active");

      // Hide after animation completes
      setTimeout(() => {
        mobileMenu.style.display = "none";
      }, 400);
    }
  });
});

// Cyber Button Effects
document.querySelectorAll(".cyber-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px) scale(1.05)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Profile Image Glitch Effect on Hover
const profileImage = document.querySelector(".profile-image");
if (profileImage) {
  profileImage.addEventListener("mouseenter", function () {
    this.style.filter = "sepia(100%) hue-rotate(120deg) brightness(1.5) contrast(2) saturate(2)";
    this.style.animation = "glitch-image 0.3s ease-in-out";
  });

  profileImage.addEventListener("mouseleave", function () {
    this.style.filter = "sepia(20%) hue-rotate(180deg) brightness(1.1) contrast(1.2)";
    this.style.animation = "none";
  });
}

// Tech Icons Interaction
document.querySelectorAll(".tech-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.5) rotate(360deg)";
    this.style.color = "#27ae60";
    this.style.textShadow = "0 0 20px #27ae60";
  });

  icon.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
    this.style.color = "#40e0d0";
    this.style.textShadow = "none";
  });
});

// Parallax Effect for Hero Section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector(".hero-section");

  if (heroSection && scrolled < window.innerHeight) {
    const floatingParticles = document.querySelector(".floating-particles");
    const gridOverlay = document.querySelector(".grid-overlay");

    if (floatingParticles) {
      floatingParticles.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    if (gridOverlay) {
      gridOverlay.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
  }
});

// Add CSS for glitch image animation
const style = document.createElement("style");
style.textContent = `
  @keyframes glitch-image {
    0%, 100% { transform: scale(1.1); }
    25% { transform: scale(1.1) translateX(-2px); }
    50% { transform: scale(1.1) translateX(2px); }
    75% { transform: scale(1.1) translateX(-1px); }
  }
`;
document.head.appendChild(style);

// Back to top button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.remove("opacity-100", "visible");
    backToTopButton.classList.add("opacity-0", "invisible");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form submission
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate form submission
  setTimeout(function () {
    contactForm.reset();
    formSuccess.classList.remove("hidden");

    setTimeout(function () {
      formSuccess.classList.add("hidden");
    }, 5000);
  }, 1000);
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right").forEach((element) => {
  observer.observe(element);
});

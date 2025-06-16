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
    console.warn("Loading elements not found");
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
    console.log("updateProgress called, currentStage:", currentStage, "total stages:", loadingStages.length);

    if (currentStage < loadingStages.length) {
      const stage = loadingStages[currentStage];
      console.log("Updating to stage:", stage);

      // Use requestAnimationFrame for smooth updates
      if (animationId) {
        cancelAnimationFrame(animationId);
      }

      animationId = requestAnimationFrame(() => {
        progressFill.style.width = stage.percentage + "%";
        progressPercentage.textContent = stage.percentage + "%";
        statusText.textContent = stage.text;
        console.log("Progress updated to:", stage.percentage + "%");
      });

      currentStage++;
      setTimeout(updateProgress, stage.duration);
    } else {
      console.log("Loading complete, hiding loader");
      // Complete loading with device-optimized timing - show 100% longer
      const exitDelay = isMobile || isLowEnd ? 800 : 1000; // Show 100% for longer
      const fadeTime = 600; // Fixed fade time

      setTimeout(() => {
        console.log("Starting fade out");
        loader.classList.add("fade-out");

        setTimeout(() => {
          console.log("Hiding loader completely");
          forceHideLoader();

          // Clean up
          if (animationId) {
            cancelAnimationFrame(animationId);
          }

          // Initialize hero animations if function exists
          try {
            if (typeof initHeroAnimations === "function") {
              initHeroAnimations();
            } else {
              console.log("initHeroAnimations function not found");
            }
          } catch (error) {
            console.log("Error in initHeroAnimations:", error);
          }
        }, fadeTime);
      }, exitDelay);
    }
  }

  // Start loading with device-optimized delay
  const startDelay = isMobile || isLowEnd ? 500 : 800;

  console.log("Starting loading animation in", startDelay, "ms");
  setTimeout(() => {
    console.log("Loading animation started");
    updateProgress();
  }, startDelay);
});

// Fallback: Force hide loader after maximum time
setTimeout(() => {
  const loader = document.querySelector(".loader");
  if (loader && loader.style.display !== "none") {
    console.log("Fallback: Force hiding loader");
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

// Additional JavaScript code continues...
// (Rest of the original script functionality)

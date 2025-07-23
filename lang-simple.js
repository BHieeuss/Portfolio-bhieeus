console.log("AI-Enhanced lang.js loading...");

// Simple AI Translation Service
class SimpleAITranslator {
  constructor() {
    this.cache = new Map();
    this.mockTranslations = {
      ja: {
        Home: "ホーム",
        About: "紹介",
        Skills: "スキル",
        Projects: "プロジェクト",
        Contact: "連絡先",
        "Hi,": "こんにちは,",
        "I am": "私は",
        "About Me": "私について",
        "My Skills": "私のスキル",
        "Technologies Stack": "技術スタック",
        "Projects & Experience": "プロジェクト・経験",
        "Academic Projects": "学術プロジェクト",
        "Real-World Projects": "実用プロジェクト",
        "Get In Touch": "お問い合わせ",
      },
      vi: {
        Home: "Trang chủ",
        About: "Giới thiệu",
        Skills: "Kỹ năng",
        Projects: "Dự án",
        Contact: "Liên hệ",
        "Hi,": "Xin chào,",
        "I am": "Tôi là",
        "About Me": "Giới thiệu về tôi",
        "My Skills": "Kỹ năng của tôi",
        "Technologies Stack": "Ngăn xếp Công nghệ",
        "Projects & Experience": "Dự án & Kinh nghiệm",
        "Academic Projects": "Dự án Học thuật",
        "Real-World Projects": "Dự án Thực tế",
        "Get In Touch": "Liên hệ với tôi",
      },
    };
  }

  async translateText(text, targetLang) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    if (this.mockTranslations[targetLang] && this.mockTranslations[targetLang][text]) {
      return this.mockTranslations[targetLang][text];
    }

    return text; // Return original if no translation found
  }

  clearCache() {
    this.cache.clear();
    console.log("Translation cache cleared");
  }
}

// Initialize AI Translator
const aiTranslator = new SimpleAITranslator();

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",

    // Loading Screen
    loadingPortfolio: "Loading Portfolio",
    initializing: "Initializing...",

    // Hero Section
    hi: "Hi,",
    iAm: "I am",
    heroRole: "IT Engineer | IT Student @TVU | Vinh Long",
    heroSkills: "ASP.NET Core, Angular, SQL Server, Docker, Clean Architecture...",
    motivationQuote: "Even if you're slower than others,<br/>as long as you don't stop – you're still moving forward.",
    initializeContact: "INITIALIZE_CONTACT()",
    viewProjects: "VIEW_PROJECTS()",
    scrollToExplore: "Scroll to explore",

    // About Section
    aboutMe: "About Me",
    myJourneyTitle: "My Journey in IT – Tran Ba Hieu",
    aboutContent1: "I am Tran Ba Hieu, born on 16/11/2003, from Vinh Long. My journey in IT started from a passion for technology in high school and has become my determined career path.",
    aboutContent2: "I studied IT at Tra Vinh University from 2021 to 2025. Throughout my studies, I always strive to combine theory and practice, actively participating in academic projects, scientific research, and developing practical skills through technology products.",
    aboutContent3:
      "In 2024–2025, I interned at 365 EJSC – 365 Ecosystem Joint Stock Company, where I participated in real projects for nearly 1 year, including 2 months of official internship as required by the university. Here, I was assigned real tasks, directly building and deploying APIs using ASP.NET Core with Clean Architecture model.",
    educationExperience: "Education & Experience",

    // Skills Section
    technologiesStack: "Technologies Stack",
    mySkills: "My Skills",
    frontendDev: "Frontend Development",
    backendDev: "Backend Development",
    toolsOtherSkills: "Tools & Other Skills",

    // Projects Section
    projectsExperience: "Projects & Experience",
    academicProjects: "Academic Projects",
    realWorldProjects: "Real-World Projects",

    // Contact Section
    getInTouch: "Get In Touch",
    contactInfo: "Contact Information",
    sendMessage: "Send Me a Message",

    // Footer
    allRightsReserved: "All rights reserved.",
  },

  vi: {
    // Navigation
    home: "Trang chủ",
    about: "Giới thiệu",
    skills: "Kỹ năng",
    projects: "Dự án",
    contact: "Liên hệ",

    // Loading Screen
    loadingPortfolio: "Đang tải Portfolio",
    initializing: "Đang khởi tạo...",

    // Hero Section
    hi: "Xin chào,",
    iAm: "Tôi là",
    heroRole: "Kỹ Sư Công Nghệ Thông Tin | Sinh viên IT @TVU | Vĩnh Long",
    heroSkills: "ASP.NET Core, Angular, SQL Server, Docker, Clean Architecture...",
    motivationQuote: "Dù bạn chậm hơn người khác,<br/>chỉ cần không dừng lại – bạn vẫn đang tiến lên.",
    initializeContact: "KHỞI_TẠO_LIÊN_HỆ()",
    viewProjects: "XEM_DỰ_ÁN()",
    scrollToExplore: "Cuộn để khám phá",

    // About Section
    aboutMe: "Giới thiệu về tôi",
    myJourneyTitle: "Hành trình IT – Trần Bá Hiếu",
    aboutContent1: "Tôi là Trần Bá Hiếu, sinh ngày 16/11/2003, quê quán tại Vĩnh Long. Hành trình của tôi trong lĩnh vực Công nghệ Thông tin bắt đầu từ niềm đam mê công nghệ từ khi còn học phổ thông, và đến nay đã trở thành con đường tôi kiên định theo đuổi.",
    aboutContent2:
      "Tôi theo học chuyên ngành Công nghệ Thông tin tại Đại học Trà Vinh từ năm 2021 đến 2025. Trong suốt quá trình học tập, tôi luôn nỗ lực kết hợp giữa lý thuyết và thực hành, tích cực tham gia vào các dự án học tập, nghiên cứu khoa học cũng như rèn luyện kỹ năng thực tế thông qua các sản phẩm công nghệ.",
    aboutContent3:
      "Năm 2024–2025, tôi thực tập tại công ty 365 EJSC – Công ty Cổ phần Hệ sinh thái 365, nơi tôi có gần 1 năm tham gia thực hiện các dự án thực tế, trong đó có 2 tháng thực tập chính thức theo yêu cầu của nhà trường. Tại đây, tôi được giao các task thực tế, trực tiếp xây dựng và triển khai các API sử dụng ASP.NET Core theo mô hình Clean Architecture.",
    educationExperience: "Học Vấn & Kinh Nghiệm",

    // Skills Section
    technologiesStack: "Ngăn xếp Công nghệ",
    mySkills: "Kỹ năng của tôi",
    frontendDev: "Phát triển Frontend",
    backendDev: "Phát triển Backend",
    toolsOtherSkills: "Công cụ & Kỹ năng khác",

    // Projects Section
    projectsExperience: "Dự án & Kinh nghiệm",
    academicProjects: "Dự án Học thuật",
    realWorldProjects: "Dự án Thực tế",

    // Contact Section
    getInTouch: "Liên hệ với tôi",
    contactInfo: "Thông Tin Liên Hệ",
    sendMessage: "Gửi tin nhắn cho tôi",

    // Footer
    allRightsReserved: "Tất cả quyền được bảo lưu.",
  },

  ja: {
    // Navigation
    home: "ホーム",
    about: "紹介",
    skills: "スキル",
    projects: "プロジェクト",
    contact: "連絡先",

    // Loading Screen
    loadingPortfolio: "ポートフォリオ読み込み中",
    initializing: "初期化中...",

    // Hero Section
    hi: "こんにちは、",
    iAm: "私は",
    heroRole: "ITエンジニア | IT学生 @TVU | ヴィンロン",
    heroSkills: "ASP.NET Core, Angular, SQL Server, Docker, Clean Architecture...",
    motivationQuote: "他の人より遅くても、<br/>止まらなければ – まだ前進している。",
    initializeContact: "連絡先_初期化()",
    viewProjects: "プロジェクト_表示()",
    scrollToExplore: "スクロールして探索",

    // About Section
    aboutMe: "私について",
    myJourneyTitle: "ITの旅 – チャン・バ・ヒエウ",
    aboutContent1: "私はチャン・バ・ヒエウ、2003年11月16日生まれ、ヴィンロン出身です。IT分野への道は高校時代の技術への情熱から始まり、今では私の確固たるキャリアとなっています。",
    aboutContent2: "2021年から2025年までトラヴィン大学でITを学び、理論と実践を組み合わせ、学術プロジェクトや研究、実際の技術製品に積極的に参加してきました。",
    aboutContent3: "2024～2025年には365 EJSC – 365エコシステム株式会社でインターンシップを行い、実際のプロジェクトに参加し、大学の要件として2ヶ月間の正式なインターンシップを完了しました。ここでは、実際のタスクを任され、ASP.NET CoreとClean Architectureを使ってAPIの構築と展開を直接行いました。",
    educationExperience: "学歴・経験",

    // Skills Section
    technologiesStack: "技術スタック",
    mySkills: "私のスキル",
    frontendDev: "フロントエンド開発",
    backendDev: "バックエンド開発",
    toolsOtherSkills: "ツール・その他のスキル",

    // Projects Section
    projectsExperience: "プロジェクト・経験",
    academicProjects: "学術プロジェクト",
    realWorldProjects: "実用プロジェクト",

    // Contact Section
    getInTouch: "お問い合わせ",
    contactInfo: "連絡先情報",
    sendMessage: "メッセージを送る",

    // Footer
    allRightsReserved: "全ての権利は保護されています。",
  },
};

// Simple language switching function
async function setLanguage(lang, useAI = true) {
  console.log(`Setting language to: ${lang}, AI: ${useAI}`);

  try {
    // Show loading
    showLoadingIndicator();

    if (useAI && !translations[lang]) {
      // Use AI translation
      await setLanguageWithAI(lang);
    } else {
      // Use predefined translations
      setLanguageWithPredefined(lang);
    }

    // Update document language
    document.documentElement.lang = lang;

    // Save preferences
    localStorage.setItem("selectedLanguage", lang);
    localStorage.setItem("useAI", useAI.toString());

    // Show success
    showSuccessNotification(lang);
  } catch (error) {
    console.error("Language change error:", error);
    showErrorNotification();
  } finally {
    hideLoadingIndicator();
  }
}

// AI Translation
async function setLanguageWithAI(targetLang) {
  const elements = [{ selector: ".nav-link", texts: ["Home", "About", "Skills", "Projects", "Contact"] }, { selector: ".section-title" }, { selector: ".hi-text" }, { selector: ".intro-text" }, { selector: "#contact h3" }];

  for (const config of elements) {
    const nodeList = document.querySelectorAll(config.selector);

    if (config.texts) {
      // Multiple elements with specific texts
      for (let i = 0; i < Math.min(nodeList.length, config.texts.length); i++) {
        const translated = await aiTranslator.translateText(config.texts[i], targetLang);
        nodeList[i].textContent = translated;
      }
    } else {
      // Translate each element's current text
      for (const element of nodeList) {
        const originalText = element.textContent.trim();
        if (originalText) {
          const translated = await aiTranslator.translateText(originalText, targetLang);
          element.textContent = translated;
        }
      }
    }
  }
}

// Predefined Translation
function setLanguageWithPredefined(lang) {
  const t = translations[lang];

  if (!t) {
    throw new Error(`Translation not found for language: ${lang}`);
  }

  // Navigation
  const navLinks = document.querySelectorAll(".nav-link");
  if (navLinks.length >= 5) {
    navLinks[0].textContent = t.home;
    navLinks[1].textContent = t.about;
    navLinks[2].textContent = t.skills;
    navLinks[3].textContent = t.projects;
    navLinks[4].textContent = t.contact;
  }

  // Mobile menu
  const mobileLinks = document.querySelectorAll(".mobile-menu-item");
  if (mobileLinks.length >= 5) {
    mobileLinks[0].innerHTML = `<i class="fas fa-home mr-3"></i>${t.home}`;
    mobileLinks[1].innerHTML = `<i class="fas fa-user mr-3"></i>${t.about}`;
    mobileLinks[2].innerHTML = `<i class="fas fa-code mr-3"></i>${t.skills}`;
    mobileLinks[3].innerHTML = `<i class="fas fa-folder mr-3"></i>${t.projects}`;
    mobileLinks[4].innerHTML = `<i class="fas fa-envelope mr-3"></i>${t.contact}`;
  }

  // Hero Section
  const hiText = document.querySelector(".hi-text");
  if (hiText) hiText.textContent = t.hi;

  const introText = document.querySelector(".intro-text");
  if (introText) introText.textContent = t.iAm;

  const heroRole = document.querySelector(".typing-roles");
  if (heroRole) heroRole.textContent = t.heroRole;

  const heroSkills = document.querySelector(".typing-skills");
  if (heroSkills) heroSkills.textContent = t.heroSkills;

  const motivationQuote = document.querySelector(".typewriter-text");
  if (motivationQuote) motivationQuote.innerHTML = t.motivationQuote;

  const contactBtn = document.querySelector(".cyber-btn-primary .cyber-btn-text");
  if (contactBtn) contactBtn.textContent = t.initializeContact;

  const projectsBtn = document.querySelector(".cyber-btn-secondary .cyber-btn-text");
  if (projectsBtn) projectsBtn.textContent = t.viewProjects;

  const scrollText = document.querySelector(".scroll-text");
  if (scrollText) scrollText.textContent = t.scrollToExplore;

  // About Section
  const aboutTitle = document.querySelector("#about .section-title");
  if (aboutTitle) aboutTitle.textContent = t.aboutMe;

  const journeyTitle = document.querySelector("#about .slide-in-left h3");
  if (journeyTitle) journeyTitle.textContent = t.myJourneyTitle;

  const aboutParagraphs = document.querySelectorAll("#about .slide-in-left p");
  if (aboutParagraphs.length >= 3) {
    aboutParagraphs[0].textContent = t.aboutContent1;
    aboutParagraphs[1].textContent = t.aboutContent2;
    aboutParagraphs[2].textContent = t.aboutContent3;
  }

  const educationTitle = document.querySelector("#about .slide-in-right h3");
  if (educationTitle) educationTitle.textContent = t.educationExperience;

  // Skills Section - có 2 sections với id="skills"
  const allSkillsSections = document.querySelectorAll("#skills");
  if (allSkillsSections.length >= 2) {
    // Section đầu tiên: "Technologies Stack"
    const techStackTitle = allSkillsSections[0].querySelector(".section-title");
    if (techStackTitle) techStackTitle.textContent = t.technologiesStack;

    // Section thứ hai: "My Skills"
    const mySkillsTitle = allSkillsSections[1].querySelector(".section-title");
    if (mySkillsTitle) mySkillsTitle.textContent = t.mySkills;
  }

  // Projects Section
  const projectsTitle = document.querySelector("#projects .section-title");
  if (projectsTitle) projectsTitle.textContent = t.projectsExperience;

  // Academic Projects và Real-World Projects titles
  const projectSubTitles = document.querySelectorAll("#projects h3");
  if (projectSubTitles.length >= 2) {
    projectSubTitles[0].textContent = t.academicProjects;
    projectSubTitles[1].textContent = t.realWorldProjects;
  }

  // Translate project content based on language
  translateProjectContent(lang);

  // Skill cards trong My Skills section
  const skillCards = document.querySelectorAll(".skill-card h3");
  if (skillCards.length >= 3) {
    skillCards[0].textContent = t.frontendDev;
    skillCards[1].textContent = t.backendDev;
    skillCards[2].textContent = t.toolsOtherSkills;
  }

  // Contact Section
  const contactTitle = document.querySelector("#contact .section-title");
  if (contactTitle) contactTitle.textContent = t.getInTouch;

  const contactInfoTitle = document.querySelector("#contact h3:first-of-type");
  if (contactInfoTitle) contactInfoTitle.textContent = t.contactInfo;

  const sendMessageTitle = document.querySelector("#contact h3:last-of-type");
  if (sendMessageTitle) sendMessageTitle.textContent = t.sendMessage;

  // Footer
  const copyright = document.querySelector("footer .text-center p");
  if (copyright) {
    copyright.innerHTML = `&copy; 2025 Trần Bá Hiếu. ${t.allRightsReserved}`;
  }
}

// Function to translate project content
function translateProjectContent(lang) {
  // Translate to Vietnamese and Japanese
  if (lang === "vi") {
    // Academic Projects
    const academicProjects = document.querySelectorAll("#projects .fade-in:first-child .space-y-4 > div");

    if (academicProjects.length >= 4) {
      // Text Similarity Comparison Tool
      academicProjects[0].querySelector("h4").textContent = "Công cụ So sánh Độ tương đồng Văn bản";
      academicProjects[0].querySelector("p").textContent = "Nghiên cứu và phát triển công cụ so sánh độ tương đồng văn bản sử dụng thuật toán Matthanan và Cosine";

      // Apple Products E-commerce Website
      academicProjects[1].querySelector("h4").textContent = "Website Thương mại điện tử Sản phẩm Apple";
      academicProjects[1].querySelector("p").textContent = "Xây dựng website thương mại điện tử chuyên về sản phẩm Apple";

      // Computer Business Website
      academicProjects[2].querySelector("h4").textContent = "Website Kinh doanh Máy tính";
      academicProjects[2].querySelector("p").textContent = "Phát triển nền tảng kinh doanh trực tuyến cho thiết bị máy tính";

      // Face Recognition System
      academicProjects[3].querySelector("h4").textContent = "Hệ thống Nhận diện Khuôn mặt";
      academicProjects[3].querySelector("p").textContent = "Ứng dụng AI cho việc điểm danh sinh viên sử dụng nhận diện khuôn mặt";
    }

    // Real-World Projects
    const realProjects = document.querySelectorAll("#projects .fade-in:last-child .space-y-4 > div");

    if (realProjects.length >= 3) {
      // 365 EJSC APIs Development
      realProjects[0].querySelector("h4").textContent = "Phát triển APIs 365 EJSC";
      realProjects[0].querySelector("p").textContent = "Xây dựng APIs từ các dự án thực tế trong thời gian thực tập tại 365 EJSC sử dụng ASP.NET Core với mô hình Clean Architecture";

      // Japan Job Opportunities Website
      realProjects[1].querySelector("h4").textContent = "Website Cơ hội Việc làm Nhật Bản Seiki 世紀";
      realProjects[1].querySelector("p").textContent = "Xây dựng nền tảng chuyên nghiệp cho tuyển dụng lao động Nhật Bản";

      // Ngoc Van Phuong Real Estate Website
      realProjects[2].querySelector("h4").textContent = "Website Bất động sản Ngọc Vạn Phương";
      realProjects[2].querySelector("p").textContent = "Phát triển website bất động sản cho các doanh nghiệp tại các huyện và xã Vĩnh Long";
    }
  } else if (lang === "ja") {
    // Academic Projects
    const academicProjects = document.querySelectorAll("#projects .fade-in:first-child .space-y-4 > div");

    if (academicProjects.length >= 4) {
      // Text Similarity Comparison Tool
      academicProjects[0].querySelector("h4").textContent = "テキスト類似度比較ツール";
      academicProjects[0].querySelector("p").textContent = "MatthananとCosineアルゴリズムを使用したテキスト類似度比較ツールの研究開発";

      // Apple Products E-commerce Website
      academicProjects[1].querySelector("h4").textContent = "Apple製品ECサイト";
      academicProjects[1].querySelector("p").textContent = "Apple製品専門のECサイト構築";

      // Computer Business Website
      academicProjects[2].querySelector("h4").textContent = "コンピュータービジネスサイト";
      academicProjects[2].querySelector("p").textContent = "コンピューター機器のオンラインビジネスプラットフォーム開発";

      // Face Recognition System
      academicProjects[3].querySelector("h4").textContent = "顔認識システム";
      academicProjects[3].querySelector("p").textContent = "顔認識を使用した学生出席管理AIアプリケーション";
    }

    // Real-World Projects
    const realProjects = document.querySelectorAll("#projects .fade-in:last-child .space-y-4 > div");

    if (realProjects.length >= 3) {
      // 365 EJSC APIs Development
      realProjects[0].querySelector("h4").textContent = "365 EJSC API開発";
      realProjects[0].querySelector("p").textContent = "365 EJSCでのインターンシップ期間中、ASP.NET CoreとClean Architectureパターンを使用した実際のプロジェクトからのAPI構築";

      // Japan Job Opportunities Website
      realProjects[1].querySelector("h4").textContent = "日本求人サイト Seiki 世紀";
      realProjects[1].querySelector("p").textContent = "日本の労働者採用専門プラットフォーム構築";

      // Ngoc Van Phuong Real Estate Website
      realProjects[2].querySelector("h4").textContent = "Ngoc Van Phuong不動産サイト";
      realProjects[2].querySelector("p").textContent = "ヴィンロン地区・コミューンの企業向け不動産サイト開発";
    }
  }
}

// UI Helper Functions
function showLoadingIndicator() {
  let indicator = document.getElementById("language-loading");
  if (!indicator) {
    indicator = document.createElement("div");
    indicator.id = "language-loading";
    indicator.innerHTML = `
      <div class="language-loading-backdrop">
        <div class="language-loading-modal">
          <div class="loading-spinner"></div>
          <p class="loading-text">Translating...</p>
        </div>
      </div>
    `;
    document.body.appendChild(indicator);
  }
  indicator.style.display = "block";
}

function hideLoadingIndicator() {
  const indicator = document.getElementById("language-loading");
  if (indicator) {
    setTimeout(() => {
      indicator.style.display = "none";
    }, 500);
  }
}

function showSuccessNotification(lang) {
  const notification = document.createElement("div");
  notification.className = "language-notification success";
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>Language changed to ${lang.toUpperCase()}</span>
  `;
  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add("show"), 100);
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 2000);
}

function showErrorNotification() {
  const notification = document.createElement("div");
  notification.className = "language-notification error";
  notification.innerHTML = `
    <i class="fas fa-exclamation-triangle"></i>
    <span>Translation failed</span>
  `;
  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add("show"), 100);
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function showAIInfo() {
  const info = document.createElement("div");
  info.className = "ai-translation-info";
  info.innerHTML = `
    <div class="ai-info-content">
      <i class="fas fa-robot"></i>
      <h4>AI Translation Enabled</h4>
      <p>You can now translate to any language!</p>
      <button onclick="this.parentElement.parentElement.remove()">Got it</button>
    </div>
  `;
  document.body.appendChild(info);
  setTimeout(() => info.classList.add("show"), 100);
}

// Event Listeners
window.addEventListener("DOMContentLoaded", function () {
  console.log("Enhanced language system loaded");

  const langSelect = document.getElementById("language-switcher");
  const langSelectMobile = document.getElementById("language-switcher-mobile");
  const aiToggle = document.getElementById("ai-translation-toggle");
  const aiToggleMobile = document.getElementById("ai-translation-toggle-mobile");

  console.log("Controls found:", {
    desktop: !!langSelect,
    mobile: !!langSelectMobile,
    aiToggle: !!aiToggle,
    aiToggleMobile: !!aiToggleMobile,
  });

  // Language change handler
  async function changeLang(e) {
    const selectedLang = e.target.value;
    const useAI = (aiToggle && aiToggle.checked) || (aiToggleMobile && aiToggleMobile.checked);

    await setLanguage(selectedLang, useAI);

    // Sync selectors
    if (langSelect) langSelect.value = selectedLang;
    if (langSelectMobile) langSelectMobile.value = selectedLang;
  }

  // AI toggle handler
  function toggleAI(e) {
    const isChecked = e.target.checked;

    // Sync toggles
    if (aiToggle) aiToggle.checked = isChecked;
    if (aiToggleMobile) aiToggleMobile.checked = isChecked;

    // Update visual state
    document.querySelectorAll(".ai-toggle-switch").forEach((toggle) => {
      if (isChecked) {
        toggle.classList.add("active");
      } else {
        toggle.classList.remove("active");
      }
    });

    localStorage.setItem("useAI", isChecked.toString());

    if (isChecked) {
      showAIInfo();
    }
  }

  // Attach event listeners
  if (langSelect) {
    langSelect.addEventListener("change", changeLang);
  }

  if (langSelectMobile) {
    langSelectMobile.addEventListener("change", changeLang);
  }

  if (aiToggle) {
    aiToggle.addEventListener("change", toggleAI);
  }

  if (aiToggleMobile) {
    aiToggleMobile.addEventListener("change", toggleAI);
  }

  // Load saved preferences
  const savedLang = localStorage.getItem("selectedLanguage") || "vi";
  const savedUseAI = localStorage.getItem("useAI") !== "false"; // Default to true unless explicitly set to false

  if (langSelect) langSelect.value = savedLang;
  if (langSelectMobile) langSelectMobile.value = savedLang;
  if (aiToggle) aiToggle.checked = savedUseAI;
  if (aiToggleMobile) aiToggleMobile.checked = savedUseAI;

  // Set initial visual state
  document.querySelectorAll(".ai-toggle-switch").forEach((toggle) => {
    if (savedUseAI) {
      toggle.classList.add("active");
    }
  });

  // Initialize with delay
  setTimeout(() => {
    setLanguage(savedLang, savedUseAI);
  }, 1000);
});

// Expose for testing
window.setLanguage = setLanguage;
window.aiTranslator = aiTranslator;

console.log("✅ AI Translation system ready!");

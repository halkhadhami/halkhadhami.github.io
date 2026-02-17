/* =============================================
   HAYL AL-KHADHAMI — PORTFOLIO ENGINE
   i18n · Theme · Particles · Animations
   ============================================= */

// ===== i18n TRANSLATIONS =====
const translations = {
    en: {
        loading: "Loading...",
        "nav.home": "Home", "nav.about": "About", "nav.experience": "Experience",
        "nav.skills": "Skills", "nav.projects": "Projects", "nav.publications": "Publications", "nav.contact": "Contact",
        "hero.greeting": "Hello, I'm",
        "hero.firstName": "Hayl Saeed Hayder",
        "hero.lastName": "Al-Khadhami",
        "hero.description": "PhD in Manufacturing Automation | Assistant Teacher | Specializing in PLC, HMI, SCADA Systems & Deep Learning Applications, Digital Twins",
        "hero.viewProjects": "View Projects",
        "hero.getInTouch": "Get In Touch",
        "hero.badge.twins": "Digital Twins",
        "about.tag": "About Me", "about.title": "Who I Am",
        "about.lead": 'An experienced <strong>Automation Engineer</strong> with expertise in industrial control systems, deep learning, and embedded systems.',
        "about.p1": "I hold a Master's degree in Industrial Automation and a Bachelor's in Computer Engineering. Now I am doing my PhD in Manufacturing Automation. My professional journey spans teaching, research, and hands-on industrial automation projects involving PLC, HMI, and SCADA systems.",
        "about.p2": "Currently serving as an Assistant Teacher at Hodeidah University while working on cutting-edge research in AI-powered systems and graph neural networks for recommender systems.",
        "about.locationLabel": "Location", "about.location": "Xi'an, China",
        "about.educationLabel": "Education", "about.education": "PhD in Manufacturing Automation",
        "about.languagesLabel": "Languages", "about.languages": "English, Arabic, Urdu, Chinese",
        "about.stat.projects": "Projects Completed", "about.stat.years": "Years Experience",
        "about.stat.papers": "Research Papers", "about.stat.courses": "Courses Taught",
        "exp.tag": "Career Journey", "exp.title": "Experience & Education",
        "exp.education": "Education", "exp.work": "Work Experience", "exp.awards": "Awards & Certifications",
        "exp.edu1.date": "2024 – Present", "exp.edu1.title": "PhD in Manufacturing Automation",
        "exp.edu1.place": "Xi'an, China", "exp.edu1.desc": "Focus on regenerative braking systems, digital twins, and intelligent manufacturing.",
        "exp.edu2.date": "July 2023", "exp.edu2.title": "Master of Engineering in Industrial Automation",
        "exp.edu2.place": "Dawood University of Engineering and Technology (DUET)",
        "exp.edu2.desc": "Research Methodologies, Computer Vision, Pattern Recognition, Six Sigma, Modeling & Simulation, Industrial Instrumentation.",
        "exp.edu3.date": "March 2013", "exp.edu3.title": "Bachelor of Engineering in Computer Engineering",
        "exp.edu3.place": "University of Hodeidah",
        "exp.edu3.desc": "Programming, Computer Architecture, Digital Logic, Embedded Systems, PLC & SCADA, Electronics, Aerospace Applications.",
        "exp.w1.date": "Aug 2014 – Present", "exp.w1.title": "Assistant Teacher",
        "exp.w1.place": "Hodeidah University, IT Department",
        "exp.w1.desc": "Teaching university-level courses in image processing, programming (C++, C#, Assembly), analog & digital electronics, embedded systems, computer architecture, and Android development.",
        "exp.w2.date": "Jan 2014 – Present", "exp.w2.title": "Automation Software Engineer",
        "exp.w2.place": "Yemen Dairy and Food Products Company",
        "exp.w2.desc": "Designing, programming, and commissioning automated control panels. PLC, HMI, and SCADA systems for industrial machinery. 50+ control panels designed and commissioned.",
        "exp.w3.date": "Jan 2012 – Dec 2013", "exp.w3.title": "Electrical Technician",
        "exp.w3.place": "Yemen Dairy and Food Products Company",
        "exp.w3.desc": "Electrical control panel design, installation, and maintenance. Power station projects and troubleshooting.",
        "exp.w4.date": "Dec 2009 – Dec 2011", "exp.w4.title": "Machines Operator",
        "exp.w4.place": "Yemen Dairy and Food Products Company",
        "exp.w4.desc": "Operated steam boilers and air compressors, monitoring, controlling, and maintaining critical industrial machines.",
        "exp.a1.title": "Outstanding International Master Student", "exp.a1.org": "DUET & SPE International",
        "exp.a2.title": "IEEE SCONEST Conference", "exp.a2.org": "Sukkur IBA University",
        "exp.a3.title": "Siemens TIA Portal Certification", "exp.a3.org": "Professional Certification",
        "exp.a4.title": "Teaching Excellence", "exp.a4.org": "Hodeidah University",
        "exp.a5.title": "Industrial Innovation Award", "exp.a5.org": "Yemen Dairy & Food Products",
        "skills.tag": "What I Do", "skills.title": "Skills & Expertise",
        "skills.cat1": "Industrial Automation", "skills.cat2": "AI & Deep Learning",
        "skills.cat3": "Embedded & Electronics", "skills.cat4": "Software Development",
        "proj.tag": "Portfolio", "proj.title": "Featured Projects",
        "proj.all": "All", "proj.automation": "Automation", "proj.ai": "AI & Research",
        "proj.embedded": "Embedded", "proj.software": "Software",
        "proj.p1.title": "Regenerative Braking System (VAGRB)",
        "proj.p1.desc": "PhD research: variable-air-gap regenerative braking for heavy-duty equipment, targeting 15–25% energy recovery.",
        "proj.p2.title": "Ship-to-Shore Container Cranes Automation",
        "proj.p2.desc": "Advanced automation for STS cranes with precision load control, safety interlocks, and real-time monitoring.",
        "proj.p3.title": "Cement Manufacturing Plant Automation",
        "proj.p3.desc": "Complete automation solution for cement plant — PLC, HMI, SCADA for raw material handling, kiln, and packaging.",
        "proj.p4.title": "Poultry Feed Production Line Automation",
        "proj.p4.desc": "End-to-end automation with real-time monitoring, quality control, and automated reporting for feed production.",
        "proj.p5.title": "YOLO-Based Traffic Light Detection",
        "proj.p5.desc": "CNN-based detection system for autonomous vehicles using YOLOv3. 95%+ accuracy in real-time scenarios.",
        "proj.p6.title": "Graph Neural Networks for Recommender Systems",
        "proj.p6.desc": "Comprehensive survey of GNN integration in recommender systems. Review of 100+ papers with comparative analysis.",
        "proj.p7.title": "Milk Production Line Automation Panel",
        "proj.p7.desc": "Complete control panel from scratch — PLC, HMI, SCADA, wiring, commissioning. Reduced downtime by 40%.",
        "proj.p8.title": "AVR/PIC Microcontroller Applications",
        "proj.p8.desc": "Temperature/humidity monitoring, motor speed control, data acquisition, custom PCB design for teaching and industry.",
        "proj.p9.title": "Solar Energy Systems Design",
        "proj.p9.desc": "Designed 10+ solar PV systems (2kW – 20kW). Sizing, inverter config, battery storage, ROI analysis.",
        "proj.p10.title": "Android Application Development",
        "proj.p10.desc": "Educational and personal apps: SQLite, REST APIs, Material Design, Firebase, sensor-based apps.",
        "pub.tag": "Research", "pub.title": "Publications",
        "pub.journal": "Journal Paper", "pub.survey": "Survey Paper",
        "pub.pub1.title": "Detection and Recognition of Traffic Lights Using CNN",
        "pub.pub1.authors": "Hayl Al-Khadhami et al.",
        "pub.pub1.venue": "International Journal Publication, 2023",
        "pub.pub1.abstract": "An efficient traffic light detection and recognition system for autonomous vehicles using YOLOv3 CNN architecture. Achieved 95%+ real-time detection accuracy under varying lighting and weather conditions.",
        "pub.pub2.title": "Graph Neural Networks in Recommender Systems – A Comprehensive Survey",
        "pub.pub2.authors": "Hayl Al-Khadhami et al.",
        "pub.pub2.venue": "Under Peer Review, 2024",
        "pub.pub2.abstract": "Systematic review and comparison of GNN architectures in recommender systems. Covers collaborative filtering, graph-based approaches, and performance evaluation across 100+ recent papers.",
        "pub.viewPaper": "View Paper", "pub.underReview": "Under Review",
        "contact.tag": "Get In Touch", "contact.title": "Let's Work Together",
        "contact.intro": "I'm available for consultations, remote projects, and collaboration opportunities. Whether you need automation solutions, technical consultations, or research collaboration, feel free to reach out.",
        "contact.email": "Email", "contact.whatsapp": "WhatsApp",
        "contact.locationLabel": "Location", "contact.locationValue": "Yanta, Xi'an, China",
        "contact.quote": '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."',
        "contact.form.name": "Your Name", "contact.form.email": "Your Email",
        "contact.form.subject": "Subject", "contact.form.message": "Message",
        "contact.form.send": "Send Message",
        "contact.form.sending": "Sending...",
        "contact.form.success": "Thank you! Your message has been sent successfully.",
        "contact.form.error": "Error sending message. Please try again.",
        "footer.tagline": "Automation Engineer | Researcher | Educator",
        "footer.rights": "All rights reserved."
    },
    ar: {
        loading: "جارٍ التحميل...",
        "nav.home": "الرئيسية", "nav.about": "عنّي", "nav.experience": "الخبرات",
        "nav.skills": "المهارات", "nav.projects": "المشاريع", "nav.publications": "الأبحاث", "nav.contact": "تواصل",
        "hero.greeting": "مرحباً، أنا",
        "hero.firstName": "هايل سعيد حيدر",
        "hero.lastName": "الخضمي",
        "hero.description": "دكتوراه في أتمتة التصنيع | مدرّس مساعد | متخصص في أنظمة PLC و HMI و SCADA والتعلم العميق والتوائم الرقمية",
        "hero.viewProjects": "عرض المشاريع",
        "hero.getInTouch": "تواصل معي",
        "hero.badge.twins": "التوائم الرقمية",
        "about.tag": "عنّي", "about.title": "من أنا",
        "about.lead": 'مهندس <strong>أتمتة</strong> ذو خبرة في أنظمة التحكم الصناعي والتعلم العميق والأنظمة المدمجة.',
        "about.p1": "أحمل درجة الماجستير في الأتمتة الصناعية ودرجة البكالوريوس في هندسة الحاسوب. أقوم حالياً بدراسة الدكتوراه في أتمتة التصنيع. تمتد مسيرتي المهنية عبر التدريس والبحث ومشاريع الأتمتة الصناعية التطبيقية.",
        "about.p2": "أعمل حالياً كمدرّس مساعد في جامعة الحديدة بالإضافة إلى البحث في أنظمة الذكاء الاصطناعي والشبكات العصبية البيانية لأنظمة التوصية.",
        "about.locationLabel": "الموقع", "about.location": "شيآن، الصين",
        "about.educationLabel": "التعليم", "about.education": "دكتوراه في أتمتة التصنيع",
        "about.languagesLabel": "اللغات", "about.languages": "العربية، الإنجليزية، الأردية، الصينية",
        "about.stat.projects": "مشروع مُنجز", "about.stat.years": "سنوات خبرة",
        "about.stat.papers": "أوراق بحثية", "about.stat.courses": "مقرراً دراسياً",
        "exp.tag": "المسيرة المهنية", "exp.title": "الخبرات والتعليم",
        "exp.education": "التعليم", "exp.work": "الخبرة العملية", "exp.awards": "الجوائز والشهادات",
        "exp.edu1.date": "2024 – حتى الآن", "exp.edu1.title": "دكتوراه في أتمتة التصنيع",
        "exp.edu1.place": "شيآن، الصين", "exp.edu1.desc": "التركيز على أنظمة الفرملة التجديدية والتوائم الرقمية والتصنيع الذكي.",
        "exp.edu2.date": "يوليو 2023", "exp.edu2.title": "ماجستير هندسة في الأتمتة الصناعية",
        "exp.edu2.place": "جامعة داود للهندسة والتكنولوجيا (DUET)",
        "exp.edu2.desc": "منهجيات البحث، الرؤية الحاسوبية، التعرف على الأنماط، ستة سيجما، النمذجة والمحاكاة، الأجهزة الصناعية.",
        "exp.edu3.date": "مارس 2013", "exp.edu3.title": "بكالوريوس هندسة حاسوب",
        "exp.edu3.place": "جامعة الحديدة",
        "exp.edu3.desc": "البرمجة، عمارة الحاسوب، المنطق الرقمي، الأنظمة المدمجة، PLC و SCADA، الإلكترونيات.",
        "exp.w1.date": "أغسطس 2014 – حتى الآن", "exp.w1.title": "مدرّس مساعد",
        "exp.w1.place": "جامعة الحديدة، قسم تكنولوجيا المعلومات",
        "exp.w1.desc": "تدريس مقررات جامعية في معالجة الصور والبرمجة (C++ و C# و Assembly) والإلكترونيات والأنظمة المدمجة وتطوير تطبيقات أندرويد.",
        "exp.w2.date": "يناير 2014 – حتى الآن", "exp.w2.title": "مهندس برمجيات الأتمتة",
        "exp.w2.place": "شركة منتجات الألبان والأغذية اليمنية",
        "exp.w2.desc": "تصميم وبرمجة وتشغيل لوحات التحكم الآلية. أنظمة PLC و HMI و SCADA للآلات الصناعية. أكثر من 50 لوحة تحكم.",
        "exp.w3.date": "يناير 2012 – ديسمبر 2013", "exp.w3.title": "فنّي كهرباء",
        "exp.w3.place": "شركة منتجات الألبان والأغذية اليمنية",
        "exp.w3.desc": "تصميم وتركيب وصيانة لوحات التحكم الكهربائية ومشاريع محطات الطاقة.",
        "exp.w4.date": "ديسمبر 2009 – ديسمبر 2011", "exp.w4.title": "مشغّل ماكينات",
        "exp.w4.place": "شركة منتجات الألبان والأغذية اليمنية",
        "exp.w4.desc": "تشغيل غلايات البخار وضواغط الهواء ومراقبة وصيانة الآلات الصناعية الحرجة.",
        "exp.a1.title": "طالب ماجستير دولي متميز", "exp.a1.org": "DUET و SPE الدولية",
        "exp.a2.title": "مؤتمر IEEE SCONEST", "exp.a2.org": "جامعة سكر IBA",
        "exp.a3.title": "شهادة Siemens TIA Portal", "exp.a3.org": "شهادة مهنية",
        "exp.a4.title": "التميز في التدريس", "exp.a4.org": "جامعة الحديدة",
        "exp.a5.title": "جائزة الابتكار الصناعي", "exp.a5.org": "شركة الألبان والأغذية اليمنية",
        "skills.tag": "ما أقوم به", "skills.title": "المهارات والخبرات",
        "skills.cat1": "الأتمتة الصناعية", "skills.cat2": "الذكاء الاصطناعي والتعلم العميق",
        "skills.cat3": "الأنظمة المدمجة والإلكترونيات", "skills.cat4": "تطوير البرمجيات",
        "proj.tag": "أعمالي", "proj.title": "المشاريع المميزة",
        "proj.all": "الكل", "proj.automation": "الأتمتة", "proj.ai": "الذكاء الاصطناعي",
        "proj.embedded": "الأنظمة المدمجة", "proj.software": "البرمجيات",
        "proj.p1.title": "نظام الفرملة التجديدية (VAGRB)",
        "proj.p1.desc": "بحث دكتوراه: فرملة تجديدية بفجوة هوائية متغيرة للمعدات الثقيلة، تستهدف استرداد 15-25% من الطاقة.",
        "proj.p2.title": "أتمتة رافعات الحاويات من السفينة إلى الرصيف",
        "proj.p2.desc": "أتمتة متقدمة لرافعات STS مع تحكم دقيق بالحمولة وأقفال أمان ومراقبة فورية.",
        "proj.p3.title": "أتمتة مصنع الأسمنت",
        "proj.p3.desc": "حل أتمتة كامل لمصنع إسمنت — PLC و HMI و SCADA لمناولة المواد الخام والفرن والتعبئة.",
        "proj.p4.title": "أتمتة خط إنتاج أعلاف الدواجن",
        "proj.p4.desc": "أتمتة شاملة مع مراقبة فورية ومراقبة جودة وتقارير آلية لإنتاج الأعلاف.",
        "proj.p5.title": "كشف إشارات المرور بتقنية YOLO",
        "proj.p5.desc": "نظام كشف قائم على CNN للمركبات ذاتية القيادة باستخدام YOLOv3 بدقة +95%.",
        "proj.p6.title": "الشبكات العصبية البيانية لأنظمة التوصية",
        "proj.p6.desc": "مسح شامل لدمج GNN في أنظمة التوصية. مراجعة أكثر من 100 ورقة بحثية.",
        "proj.p7.title": "لوحة أتمتة خط إنتاج الحليب",
        "proj.p7.desc": "لوحة تحكم كاملة من الصفر — PLC و HMI و SCADA والأسلاك والتشغيل. خفض التوقف 40%.",
        "proj.p8.title": "تطبيقات متحكمات AVR/PIC",
        "proj.p8.desc": "مراقبة الحرارة والرطوبة، التحكم بسرعة المحركات، اقتناء البيانات، تصميم PCB.",
        "proj.p9.title": "تصميم أنظمة الطاقة الشمسية",
        "proj.p9.desc": "تصميم أكثر من 10 أنظمة شمسية (2 كيلوواط – 20 كيلوواط).",
        "proj.p10.title": "تطوير تطبيقات أندرويد",
        "proj.p10.desc": "تطبيقات تعليمية وشخصية: SQLite و REST APIs و Material Design و Firebase.",
        "pub.tag": "الأبحاث", "pub.title": "المنشورات",
        "pub.journal": "ورقة بحثية", "pub.survey": "ورقة مسحية",
        "pub.pub1.title": "كشف والتعرف على إشارات المرور باستخدام الشبكات العصبية التلافيفية",
        "pub.pub1.authors": "هايل الخضمي وآخرون",
        "pub.pub1.venue": "منشور في مجلة دولية، 2023",
        "pub.pub1.abstract": "نظام فعال لكشف إشارات المرور للمركبات ذاتية القيادة باستخدام بنية YOLOv3 CNN بدقة +95% في الوقت الفعلي.",
        "pub.pub2.title": "الشبكات العصبية البيانية في أنظمة التوصية — مسح شامل",
        "pub.pub2.authors": "هايل الخضمي وآخرون",
        "pub.pub2.venue": "قيد المراجعة، 2024",
        "pub.pub2.abstract": "مراجعة منهجية ومقارنة لبنى GNN في أنظمة التوصية تغطي التصفية التعاونية والمقاربات البيانية.",
        "pub.viewPaper": "عرض الورقة", "pub.underReview": "قيد المراجعة",
        "contact.tag": "تواصل معي", "contact.title": "لنعمل معاً",
        "contact.intro": "أنا متاح للاستشارات والمشاريع عن بُعد وفرص التعاون. سواء كنت بحاجة إلى حلول أتمتة أو استشارات تقنية أو تعاون بحثي، لا تتردد في التواصل.",
        "contact.email": "البريد الإلكتروني", "contact.whatsapp": "واتساب",
        "contact.locationLabel": "الموقع", "contact.locationValue": "يانتا، شيآن، الصين",
        "contact.quote": '"عملك سيملأ جزءاً كبيراً من حياتك، والطريقة الوحيدة لتكون راضياً حقاً هي أن تفعل ما تؤمن أنه عمل عظيم."',
        "contact.form.name": "اسمك", "contact.form.email": "بريدك الإلكتروني",
        "contact.form.subject": "الموضوع", "contact.form.message": "الرسالة",
        "contact.form.send": "إرسال الرسالة",
        "contact.form.sending": "جارٍ الإرسال...",
        "contact.form.success": "شكراً لك! تم إرسال رسالتك بنجاح.",
        "contact.form.error": "خطأ في الإرسال. يرجى المحاولة مرة أخرى.",
        "footer.tagline": "مهندس أتمتة | باحث | مدرّس",
        "footer.rights": "جميع الحقوق محفوظة."
    }
};

const typingPhrases = {
    en: ['Automation Engineer', 'PLC Programmer', 'AI Researcher', 'Embedded Systems Developer', 'SCADA Specialist', 'University Lecturer'],
    ar: ['مهندس أتمتة', 'مبرمج PLC', 'باحث ذكاء اصطناعي', 'مطوّر أنظمة مدمجة', 'متخصص SCADA', 'محاضر جامعي']
};

// ===== STATE =====
let currentLang = 'en';
let currentTheme = 'dark';

// ===== INIT ON DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    detectDefaults();
    initTheme();
    initLanguage();
    initLoadingScreen();
    initNavbar();
    initSmoothScroll();
    initRevealAnimations();
    initCounters();
    initSkillBars();
    initProjectFilter();
    initLightbox();
    initContactForm();
    initParticles();
    initCustomCursor();
    initTypingEffect();
    initBackToTop();
});

// ===== DETECT BROWSER DEFAULTS =====
function detectDefaults() {
    // Theme: localStorage > prefers-color-scheme
    const savedTheme = localStorage.getItem('hk-theme');
    if (savedTheme) {
        currentTheme = savedTheme;
    } else {
        currentTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    // Language: localStorage > navigator.language
    const savedLang = localStorage.getItem('hk-lang');
    if (savedLang) {
        currentLang = savedLang;
    } else {
        const browserLang = navigator.language || navigator.userLanguage || '';
        currentLang = browserLang.startsWith('ar') ? 'ar' : 'en';
    }
}

// ===== THEME ENGINE =====
function initTheme() {
    applyTheme(currentTheme);
    document.getElementById('themeToggle').addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
        localStorage.setItem('hk-theme', currentTheme);
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('themeIcon');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    const meta = document.getElementById('metaThemeColor');
    if (meta) meta.content = theme === 'dark' ? '#0a0f1c' : '#f8fafc';
}

// ===== i18n ENGINE =====
function initLanguage() {
    applyLanguage(currentLang);
    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        applyLanguage(currentLang);
        localStorage.setItem('hk-lang', currentLang);
        // Restart typing
        restartTyping();
    });
}

function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            // Use innerHTML for keys that contain HTML (like <strong>)
            if (dict[key].includes('<')) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    // Update HTML dir and lang
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update lang toggle button label
    document.getElementById('langLabel').textContent = lang === 'ar' ? 'EN' : 'AR';
}

// ===== LOADING SCREEN =====
function initLoadingScreen() {
    const screen = document.getElementById('loadingScreen');
    if (!screen) return;
    window.addEventListener('load', () => {
        setTimeout(() => screen.classList.add('hidden'), 300);
    });
    // Fallback
    setTimeout(() => screen.classList.add('hidden'), 3000);
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });

    // Mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', e => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Active section tracking (scroll-based for reliability)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    function updateActiveNav() {
        const scrollY = window.scrollY + 120;
        let currentSection = '';

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollY >= top && scrollY < top + height) {
                currentSection = section.id;
            }
        });

        // If scrolled near bottom, activate last section
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
            currentSection = sections[sections.length - 1].id;
        }

        if (currentSection) {
            navLinks.forEach(l => {
                l.classList.toggle('active', l.getAttribute('data-section') === currentSection);
            });
        }
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== REVEAL ANIMATIONS =====
function initRevealAnimations() {
    const els = document.querySelectorAll('.reveal-up, .reveal-left');
    if (!els.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
}

// ===== ANIMATED COUNTERS =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;

    let animated = false;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    const update = () => {
                        current += step;
                        if (current < target) {
                            counter.textContent = Math.floor(current);
                            requestAnimationFrame(update);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    update();
                });
            }
        });
    }, { threshold: 0.3 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);

    // Fallback
    setTimeout(() => {
        if (!animated) {
            counters.forEach(c => c.textContent = c.dataset.target);
            animated = true;
        }
    }, 5000);
}

// ===== SKILL BARS =====
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar');
    if (!bars.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percent = bar.dataset.percent;
                bar.style.setProperty('--percent', percent + '%');
                bar.classList.add('animated');
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    bars.forEach(bar => observer.observe(bar));
}

// ===== PROJECT FILTER =====
function initProjectFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    if (!buttons.length || !cards.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            cards.forEach(card => {
                const cat = card.dataset.category;
                if (filter === 'all' || cat === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp .4s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ===== LIGHTBOX =====
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    if (!lightbox) return;

    document.querySelectorAll('.project-zoom').forEach(btn => {
        btn.addEventListener('click', () => {
            const src = btn.dataset.img;
            if (src) {
                lightboxImg.src = src;
                lightbox.classList.add('active');
                lightbox.setAttribute('aria-hidden', 'false');
            }
        });
    });

    const close = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
    };

    lightboxClose.addEventListener('click', close);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        const btnText = btn.querySelector('[data-i18n]');
        const originalKey = btnText.getAttribute('data-i18n');
        btnText.textContent = translations[currentLang]['contact.form.sending'];
        btn.disabled = true;

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                form.innerHTML = `<div class="form-success"><h3>✓</h3><p>${translations[currentLang]['contact.form.success']}</p></div>`;
            } else {
                throw new Error();
            }
        } catch {
            alert(translations[currentLang]['contact.form.error']);
            btnText.textContent = translations[currentLang][originalKey];
            btn.disabled = false;
        }
    });
}

// ===== PARTICLE CANVAS =====
function initParticles() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;
    let w, h;

    function resize() {
        const hero = document.getElementById('hero');
        w = canvas.width = hero.offsetWidth;
        h = canvas.height = hero.offsetHeight;
    }

    function createParticles() {
        const count = Math.min(Math.floor(w * h / 12000), 100);
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.5 + 0.5,
                o: Math.random() * 0.5 + 0.2
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#10b981';

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = accentColor.replace(')', `, ${0.08 * (1 - dist / 120)})`).replace('rgb', 'rgba');
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        // Draw particles
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = accentColor.replace(')', `, ${p.o})`).replace('rgb', 'rgba');
            ctx.fill();
        });

        animId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    // Debounced resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            resize();
            createParticles();
        }, 250);
    });

    // Pause when not visible
    const heroObs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            if (!animId) draw();
        } else {
            cancelAnimationFrame(animId);
            animId = null;
        }
    }, { threshold: 0 });
    heroObs.observe(document.getElementById('hero'));
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let mx = 0, my = 0, dx = 0, dy = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    });

    function followCursor() {
        dx += (mx - dx) * 0.15;
        dy += (my - dy) * 0.15;
        ring.style.transform = `translate(${dx - 18}px, ${dy - 18}px)`;
        requestAnimationFrame(followCursor);
    }
    followCursor();

    // Hover effects
    document.querySelectorAll('a, button, .project-card, .glass-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.style.width = '52px';
            ring.style.height = '52px';
            ring.style.borderColor = 'var(--accent)';
            ring.style.opacity = '0.3';
        });
        el.addEventListener('mouseleave', () => {
            ring.style.width = '36px';
            ring.style.height = '36px';
            ring.style.borderColor = 'var(--accent)';
            ring.style.opacity = '0.5';
        });
    });
}

// ===== TYPING EFFECT =====
let typingTimeout;
function initTypingEffect() {
    startTyping();
}

function restartTyping() {
    clearTimeout(typingTimeout);
    const el = document.getElementById('typingText');
    if (el) el.textContent = '';
    startTyping();
}

function startTyping() {
    const el = document.getElementById('typingText');
    if (!el) return;

    const phrases = typingPhrases[currentLang] || typingPhrases.en;
    let phraseIdx = 0, charIdx = 0, deleting = false;

    function tick() {
        const phrase = phrases[phraseIdx];
        if (deleting) {
            el.textContent = phrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            el.textContent = phrase.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = deleting ? 40 : 80;
        if (!deleting && charIdx === phrase.length) {
            speed = 2000;
            deleting = true;
        } else if (deleting && charIdx === 0) {
            deleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 400;
        }

        typingTimeout = setTimeout(tick, speed);
    }

    setTimeout(tick, 800);
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== FADE-IN-UP ANIMATION (for project filter) =====
const styleSheet = document.createElement('style');
styleSheet.textContent = `@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`;
document.head.appendChild(styleSheet);

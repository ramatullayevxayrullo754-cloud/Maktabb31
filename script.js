// ====== SOZLAMALAR ======
// Telegram username'ingizni shu yerga yozing (@ belgisiz)
const CONFIG = {
  telegramUsername: "Intizor_23_11",
};

// ====== TARJIMALAR ======
const translations = {
  uz: {
    page_title: "Raqamli Maktab | Ingliz tili va dasturlash kurslari",
    nav_courses: "Kurslar",
    nav_how: "Qanday ishlaydi",
    nav_faq: "Savollar",
    nav_contact: "Aloqa",
    hero_title: "Raqamli kelajakni bugun boshlang",
    hero_text: "Ingliz tili va dasturlash kurslari. Darslar o'zbek, rus va ingliz tillarida. Ro'yxatdan o'tish bir necha daqiqa.",
    hero_btn: "Telegram orqali yozilish",
    hero_btn2: "Kurslarni ko'rish",
    courses_title: "Kurslarimiz",
    courses_text: "Noldan boshlab yoki bilimingizni oshirish uchun mos kurs tanlang.",
    c1_title: "Ingliz tili — boshlang'ich (A1–A2)",
    c1_text: "Alifbo, asosiy grammatika, kundalik suhbat va so'z boyligi.",
    c2_title: "Ingliz tili — o'rta daraja (B1–B2)",
    c2_text: "Erkin suhbatlashish, yozish, IELTS va xalqaro imtihonlarga tayyorgarlik.",
    c3_title: "Python dasturlash",
    c3_text: "O'zgaruvchilar, sikllar, funksiyalar, ma'lumotlar tahlili va amaliy loyihalar.",
    c4_title: "Veb-dasturlash",
    c4_text: "HTML, CSS va JavaScript yordamida o'z veb-saytingizni yaratish.",
    how_title: "Qanday ishlaydi?",
    step1_title: "Kursni tanlang",
    step1_text: "Sizga mos yo'nalishni saytdan ko'ring.",
    step2_title: "Telegram'ga yozing",
    step2_text: "Tugmani bosing va administrator bilan bog'laning.",
    step3_title: "Darslarni boshlang",
    step3_text: "Guruh va dars jadvali haqida ma'lumot olasiz.",
    faq_title: "Ko'p so'raladigan savollar",
    q1: "Darslar qaysi tillarda o'tiladi?",
    a1: "O'zbek, rus va ingliz tillarida. Kurs va guruhga qarab tanlanadi.",
    q2: "Dasturlash bo'yicha oldindan bilim kerakmi?",
    a2: "Yo'q. Kompyuterdan foydalana olish yetarli.",
    q3: "Narxlar qanday?",
    a3: "Narxlar va chegirmalar haqida Telegram orqali ma'lumot olasiz.",
    register_title: "Hoziroq ro'yxatdan o'ting",
    register_text: "Joylar cheklangan. Telegram orqali yozing va o'z kursingizni tanlang.",
    tg_btn: "Telegram'da yozish",
    contact_title: "Aloqa",
    contact_text: "Savollaringiz bo'lsa, bizga yozing.",
    footer_text: "© 2026 Raqamli Maktab. Barcha huquqlar himoyalangan.",
  },
  ru: {
    page_title: "Цифровая школа | Курсы английского и программирования",
    nav_courses: "Курсы",
    nav_how: "Как это работает",
    nav_faq: "Вопросы",
    nav_contact: "Контакты",
    hero_title: "Начните цифровое будущее уже сегодня",
    hero_text: "Курсы английского языка и программирования. Занятия на узбекском, русском и английском языках. Запись займёт несколько минут.",
    hero_btn: "Записаться в Telegram",
    hero_btn2: "Смотреть курсы",
    courses_title: "Наши курсы",
    courses_text: "Выберите курс, который подходит вашему уровню — с нуля или для углубления знаний.",
    c1_title: "Английский — начальный (A1–A2)",
    c1_text: "Алфавит, основы грамматики, разговорная практика и словарный запас.",
    c2_title: "Английский — средний (B1–B2)",
    c2_text: "Свободное общение, письмо и подготовка к IELTS и другим международным экзаменам.",
    c3_title: "Программирование на Python",
    c3_text: "Переменные, циклы, функции, анализ данных и практические проекты.",
    c4_title: "Веб-разработка",
    c4_text: "Создание собственного сайта с помощью HTML, CSS и JavaScript.",
    how_title: "Как это работает?",
    step1_title: "Выберите курс",
    step1_text: "Посмотрите направления на сайте и выберите подходящее.",
    step2_title: "Напишите в Telegram",
    step2_text: "Нажмите кнопку и свяжитесь с администратором.",
    step3_title: "Начните занятия",
    step3_text: "Вы получите информацию о группе и расписании.",
    faq_title: "Частые вопросы",
    q1: "На каком языке проходят занятия?",
    a1: "На узбекском, русском или английском — в зависимости от курса и группы.",
    q2: "Нужны ли знания программирования заранее?",
    a2: "Нет. Достаточно уметь пользоваться компьютером.",
    q3: "Какие цены?",
    a3: "Цены и скидки вы узнаете в Telegram.",
    register_title: "Запишитесь прямо сейчас",
    register_text: "Места ограничены. Напишите в Telegram и выберите свой курс.",
    tg_btn: "Написать в Telegram",
    contact_title: "Контакты",
    contact_text: "Если у вас есть вопросы, напишите нам.",
    footer_text: "© 2026 Цифровая школа. Все права защищены.",
  },
  en: {
    page_title: "Digital School | English and Programming Courses",
    nav_courses: "Courses",
    nav_how: "How it works",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_title: "Start your digital future today",
    hero_text: "English and programming courses. Lessons in Uzbek, Russian and English. Registration takes a few minutes.",
    hero_btn: "Register on Telegram",
    hero_btn2: "View courses",
    courses_title: "Our courses",
    courses_text: "Choose a course that fits your level, whether you are starting from scratch or upgrading your skills.",
    c1_title: "English — Beginner (A1–A2)",
    c1_text: "Alphabet, core grammar, everyday conversation and vocabulary.",
    c2_title: "English — Intermediate (B1–B2)",
    c2_text: "Fluent conversation, writing, and preparation for IELTS and other international exams.",
    c3_title: "Python Programming",
    c3_text: "Variables, loops, functions, data analysis and hands-on projects.",
    c4_title: "Web Development",
    c4_text: "Build your own website with HTML, CSS and JavaScript.",
    how_title: "How it works",
    step1_title: "Choose a course",
    step1_text: "Browse the courses on this site and pick the one for you.",
    step2_title: "Message us on Telegram",
    step2_text: "Tap the button and contact our administrator.",
    step3_title: "Start learning",
    step3_text: "You will receive details about your group and schedule.",
    faq_title: "Frequently asked questions",
    q1: "What language are the lessons in?",
    a1: "Uzbek, Russian or English, depending on the course and group.",
    q2: "Do I need programming experience?",
    a2: "No. Basic computer skills are enough.",
    q3: "What are the prices?",
    a3: "You can get pricing and discounts on Telegram.",
    register_title: "Register now",
    register_text: "Seats are limited. Message us on Telegram and choose your course.",
    tg_btn: "Message on Telegram",
    contact_title: "Contact",
    contact_text: "If you have any questions, write to us.",
    footer_text: "© 2026 Digital School. All rights reserved.",
  },
};

// ====== TIL ALMASHTIRISH ======
function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  document.title = t.page_title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem("siteLang", lang);
  } catch (e) {
    // Brauzer saqlashni taqiqlagan bo'lsa, shunchaki o'tkazib yuboramiz
  }
}

// ====== TELEGRAM HAVOLALARI ======
function setTelegramLinks() {
  const url = `https://t.me/${CONFIG.telegramUsername}`;
  document.querySelectorAll(".tg-link").forEach((a) => {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

// ====== ISHGA TUSHIRISH ======
document.addEventListener("DOMContentLoaded", () => {
  setTelegramLinks();

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  let savedLang = "uz";
  try {
    savedLang = localStorage.getItem("siteLang") || "uz";
  } catch (e) {}
  setLanguage(savedLang);

  // Scroll bilan paydo bo'ladigan elementlar
  const revealEls = document.querySelectorAll(".card, .step, .faq-item");
  revealEls.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }
});

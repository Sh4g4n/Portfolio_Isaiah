const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const langToggle = document.querySelector("[data-lang-toggle]");
const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const descriptionMeta = document.querySelector('meta[name="description"]');

const storedTheme = window.localStorage.getItem("portfolio-theme");
const storedLanguage = window.localStorage.getItem("portfolio-language");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
const initialLanguage = storedLanguage || "it";

const translations = {
  it: {
    title: "Akinyemi Isaiah Olaoluwa - Portfolio tecnico",
    description:
      "Portfolio di Akinyemi Isaiah Olaoluwa, diplomato IPSIA in Manutenzione e Assistenza Tecnica con esperienza in lavorazioni meccaniche, zincatura, CAD, Python e supporto operativo.",
    skipLink: "Vai al contenuto",
    brandRole: "Portfolio tecnico",
    menu: "Menu",
    navAbout: "Chi sono",
    navExperience: "Esperienze",
    navSkills: "Competenze",
    navProjects: "Progetti",
    navContact: "Contatti",
    themeLabel: "Tema",
    langToggle: "IT / EN",
    heroEyebrow: "Diplomato IPSIA e operatore pratico",
    heroRole: "Diplomato in Manutenzione e Assistenza Tecnica (IPSIA).",
    heroLead:
      "Sono diplomato in Manutenzione e Assistenza Tecnica (IPSIA), con esperienza in lavorazioni meccaniche di precisione, zincatura, supporto catering, CAD e Python. Il mio metodo di lavoro è preciso, collaborativo e orientato alla pratica.",
    heroPrimary: "Vedi i progetti",
    heroSecondary: "Contattami",
    metric1: "Esperienze tra lavoro e tirocinio",
    metric2: "Corsi tecnici evidenziati",
    metric3: "Lingue nel CV",
    profileKicker: "Focus attuale",
    profileTitle: "Manutenzione, operatività e supporto tecnico",
    summaryEducationLabel: "Formazione",
    summaryEducationValue: "Diploma IPSIA in Manutenzione e Assistenza Tecnica",
    summaryStrengthsLabel: "Punti forti",
    summaryStrengthsValue: "Precisione, ordine, adattabilità e affidabilità",
    summaryToolsLabel: "Strumenti",
    summaryToolsValue: "Office, strumenti di misura, utensili manuali, CNC, SolidWorks, Python",
    profileLocation: "Rovato, Brescia, Italia",
    profileAvailability: "Disponibile via email o telefono",
    aboutEyebrow: "Chi sono",
    aboutTitle: "Un percorso costruito sulla pratica, non solo sulla teoria.",
    aboutP1:
      "Il mio CV mostra un percorso tecnico chiaro: ho completato il diploma in Manutenzione e Assistenza Tecnica e ho maturato esperienza pratica in ambienti meccanici, elettrici ed elettromeccanici. Ho inoltre lavorato in produzione e nel catering, rafforzando disciplina, comunicazione e organizzazione.",
    aboutP2:
      "Il filo conduttore del mio profilo è l’esecuzione affidabile. Imparo velocemente, seguo le procedure con attenzione e preferisco un lavoro concreto, preciso e utile.",
    expEyebrow: "Esperienze",
    expTitle: "Un percorso definito da formazione tecnica e contesti di lavoro reali.",
    schoolTag: "Formazione",
    schoolP1:
      "Percorso professionale in Manutenzione e Assistenza Tecnica, focalizzato su installazione, riparazione e manutenzione di sistemi meccanici, idraulici, elettrici ed elettromeccanici.",
    schoolP2:
      "L’esperienza comprende attività di laboratorio, attenzione alla sicurezza, diagnosi dei guasti ed esposizione a strumenti industriali e contesti CNC.",
    internshipTag: "Tirocinio",
    metecnalP1:
      "Ho affiancato il personale nel taglio di profilati, nella finitura di articoli e nell’imballaggio dei prodotti finiti in un ambiente di meccanica di precisione.",
    metecnalP2:
      "Ho acquisito familiarità con il flusso produttivo, gli strumenti di lavoro, la precisione, l’ordine e le procedure aziendali.",
    partTimeTag: "Tempo parziale",
    porticoP1:
      "Ho supportato il personale nella preparazione e nel servizio in ambito catering, anche durante eventi e momenti di forte intensità operativa.",
    porticoP2: "Ho rafforzato lavoro di squadra, gestione dei tempi e adattabilità in un contesto dinamico.",
    alghisiP1:
      "Ho lavorato nel trattamento superficiale e nella zincatura dei metalli, occupandomi di preparazione, gestione e imballaggio dei pezzi trattati.",
    alghisiP2:
      "Ho approfondito la disciplina produttiva e l’attenzione alle fasi di processo in un flusso industriale strutturato.",
    cascinaP1:
      "Ho supportato la preparazione e il servizio catering durante eventi, compreso l’allestimento e l’assistenza operativa generale.",
    cascinaP2:
      "Ho rafforzato affidabilità, ritmo e calma operativa durante i momenti di maggiore lavoro.",
    alghisi2P1:
      "Ho svolto una seconda esperienza nella stessa realtà, lavorando con maggiore autonomia e maggiore precisione operativa.",
    alghisi2P2:
      "Ho migliorato velocità, precisione e responsabilità, consolidando la conoscenza dei processi aziendali.",
    skillsEyebrow: "Competenze",
    skillsTitle: "Competenze tecniche, disciplina sul lavoro e collaborazione.",
    techTitle: "Tecniche",
    personalTitle: "Personali",
    relationalTitle: "Relazionali",
    orgTitle: "Organizzative",
    langTitle: "Lingue",
    languageEnglish: "Inglese",
    languageEnglishValue: "Livello madrelingua",
    languageItalian: "Italiano",
    projectEyebrow: "Progetti",
    projectTitle: "Due progetti formativi che mostrano curiosità tecnica e apprendimento strutturato.",
    project1Title: "Corso di programmazione Python",
    project1Desc:
      "Corso introduttivo alla programmazione incentrato sui fondamenti del coding, sulla logica e sul problem solving attraverso esercitazioni pratiche.",
    project1P1: "Ho acquisito familiarità con i concetti base della programmazione.",
    project1P2: "Ho praticato il pensiero analitico attraverso esercitazioni.",
    project1P3: "Ho rafforzato un approccio strutturato all’apprendimento.",
    project2Title: "Progettazione meccanica CAD e modellazione 3D con SolidWorks",
    project2Desc:
      "Corso incentrato sulla progettazione meccanica e sulla modellazione 3D tramite SolidWorks, con attenzione a disegni tecnici, componenti e assiemi.",
    project2P1: "Ho esplorato la modellazione 3D di componenti.",
    project2P2: "Ho appreso le basi di assiemi e disegni tecnici.",
    project2P3: "Ho collegato la modellazione digitale al pensiero meccanico.",
    contactEyebrow: "Contatti",
    contactTitle: "Aperto a opportunità, conversazioni e collaborazioni concrete.",
    contactNote: "Se vuoi contattarmi, usa il modulo oppure i riferimenti qui sotto.",
    formName: "Nome",
    formEmail: "Email",
    formMessage: "Messaggio",
    formSubmit: "Invia messaggio",
    directContacts: "Contatti diretti",
    networkEyebrow: "La mia rete professionale",
    networkTitle: "Persone e collegamenti professionali da mostrare ai recruiter.",
    networkLabel: "Partner",
    networkLink: "Portfolio",
    footerNote: "Portfolio tecnico costruito solo sui dati del CV.",
    footerCredit: "Questo sito è stato realizzato da Shagandeep Singh.",
    photoAlt: "Foto del portfolio owner",
    formStatusEmpty: "Compila tutti i campi prima di inviare.",
    formStatusSent: "Apro l'app email per inviare il messaggio.",
    themeAriaDark: "Attiva o disattiva la modalita scura",
    themeAriaLight: "Attiva o disattiva la modalita scura",
    langAria: "Cambia lingua"
  },
  en: {
    title: "Akinyemi Isaiah Olaoluwa - Technical Portfolio",
    description:
      "Portfolio of Akinyemi Isaiah Olaoluwa, an IPSIA graduate in Maintenance and Technical Assistance with experience in mechanical work, galvanizing, CAD, Python, and operational support.",
    skipLink: "Skip to content",
    brandRole: "Technical portfolio",
    menu: "Menu",
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    themeLabel: "Theme",
    langToggle: "EN / IT",
    heroEyebrow: "IPSIA graduate and hands-on operator",
    heroRole: "Graduate in Maintenance and Technical Assistance (IPSIA).",
    heroLead:
      "I am a graduate in Maintenance and Technical Assistance (IPSIA), with experience in precision mechanical work, galvanizing, catering support, CAD, and Python. My work style is precise, collaborative, and practice-driven.",
    heroPrimary: "View projects",
    heroSecondary: "Contact me",
    metric1: "Work and internship experiences",
    metric2: "Featured technical courses",
    metric3: "Languages in the CV",
    profileKicker: "Current focus",
    profileTitle: "Maintenance, operations, and technical support",
    summaryEducationLabel: "Education",
    summaryEducationValue: "IPSIA diploma in Maintenance and Technical Assistance",
    summaryStrengthsLabel: "Strengths",
    summaryStrengthsValue: "Precision, order, adaptability, and reliability",
    summaryToolsLabel: "Tools",
    summaryToolsValue: "Office, measuring tools, hand tools, CNC, SolidWorks, Python",
    profileLocation: "Rovato, Brescia, Italy",
    profileAvailability: "Available via email or phone",
    aboutEyebrow: "About",
    aboutTitle: "A path built on practice, not theory alone.",
    aboutP1:
      "My CV shows a clear technical path: I completed my diploma in Maintenance and Technical Assistance and gained practical experience in mechanical, electrical, and electromechanical settings. I also worked in production and catering, strengthening discipline, communication, and organization.",
    aboutP2:
      "The thread running through my profile is dependable execution. I learn quickly, follow procedures carefully, and prefer work that is concrete, accurate, and useful.",
    expEyebrow: "Experience",
    expTitle: "A path shaped by technical training and real workplace routines.",
    schoolTag: "Education",
    schoolP1:
      "Professional track in Maintenance and Technical Assistance, focused on installation, repair, and maintenance of mechanical, hydraulic, electrical, and electromechanical systems.",
    schoolP2:
      "The experience includes lab work, safety awareness, fault diagnosis, and exposure to industrial tools and CNC contexts.",
    internshipTag: "Internship",
    metecnalP1:
      "Supported staff with cutting profiles, finishing articles, and packaging finished products in a precision mechanical environment.",
    metecnalP2:
      "Built familiarity with production flow, workplace tools, precision, order, and company procedures.",
    partTimeTag: "Part-time",
    porticoP1:
      "Supported preparation and service in catering, including events and high-intensity service moments.",
    porticoP2: "Strengthened teamwork, timing, and adaptability in a fast-moving environment.",
    alghisiP1:
      "Worked in surface treatment and metal galvanizing operations, assisting with preparation, handling, and packaging of treated parts.",
    alghisiP2:
      "Deepened production discipline and attention to process steps in a structured industrial workflow.",
    cascinaP1:
      "Supported catering preparation and service during events, including setup and general operational assistance.",
    cascinaP2:
      "Reinforced reliability, pace, and calm execution during busy service periods.",
    alghisi2P1:
      "Returned for a second experience in the same company, working with greater autonomy and stronger operational accuracy.",
    alghisi2P2:
      "Improved speed, precision, and responsibility while reinforcing knowledge of company processes.",
    skillsEyebrow: "Skills",
    skillsTitle: "Technical ability, workplace discipline, and collaboration.",
    techTitle: "Technical",
    personalTitle: "Personal",
    relationalTitle: "Relational",
    orgTitle: "Organizational",
    langTitle: "Languages",
    languageEnglish: "English",
    languageEnglishValue: "Native level",
    languageItalian: "Italian",
    projectEyebrow: "Projects",
    projectTitle: "Two course-based projects that show technical curiosity and structured learning.",
    project1Title: "Python programming course",
    project1Desc:
      "Introductory programming course focused on coding fundamentals, logic, and problem solving through practical exercises.",
    project1P1: "Built comfort with basic programming concepts.",
    project1P2: "Practiced analytical thinking through exercises.",
    project1P3: "Reinforced a structured approach to learning.",
    project2Title: "Mechanical CAD and SolidWorks 3D modeling",
    project2Desc:
      "Course centered on mechanical design and 3D modeling with SolidWorks, with attention to technical drawings, components, and assemblies.",
    project2P1: "Explored 3D component modeling.",
    project2P2: "Learned the basics of assemblies and technical drawings.",
    project2P3: "Connected digital modeling with mechanical thinking.",
    contactEyebrow: "Contact",
    contactTitle: "Open to opportunities, conversations, and hands-on collaborations.",
    contactNote: "If you want to reach out, use the form or the details below.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send message",
    directContacts: "Direct contacts",
    networkEyebrow: "My professional network",
    networkTitle: "People and professional links to show recruiters.",
    networkLabel: "Partner",
    networkLink: "Portfolio",
    footerNote: "Technical portfolio built only from CV data.",
    footerCredit: "This website was built by Shagandeep Singh.",
    photoAlt: "Photo of the portfolio owner",
    formStatusEmpty: "Please complete every field before sending.",
    formStatusSent: "Opening your email app so you can send the message.",
    themeAriaDark: "Toggle dark mode",
    themeAriaLight: "Toggle dark mode",
    langAria: "Switch language"
  }
};

function text(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function setLanguage(language) {
  const copy = translations[language] || translations.it;
  root.setAttribute("lang", language);
  window.localStorage.setItem("portfolio-language", language);
  document.title = copy.title;
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", copy.description);
  }

  text(".skip-link", copy.skipLink);
  text(".brand-role", copy.brandRole);
  text("[data-menu-button]", copy.menu);
  text('nav a[href="#about"]', copy.navAbout);
  text('nav a[href="#experience"]', copy.navExperience);
  text('nav a[href="#skills"]', copy.navSkills);
  text('nav a[href="#projects"]', copy.navProjects);
  text('nav a[href="#contact"]', copy.navContact);
  text(".theme-toggle-label", copy.themeLabel);
  if (langToggle) {
    langToggle.setAttribute("aria-label", copy.langAria);
    langToggle.textContent = copy.langToggle;
  }
  text(".hero .eyebrow", copy.heroEyebrow);
  text(".hero-role", copy.heroRole);
  text(".hero .lead", copy.heroLead);
  text(".hero-actions .button-primary", copy.heroPrimary);
  text(".hero-actions .button-secondary", copy.heroSecondary);
  text(".metric-card:nth-of-type(1) .metric-label", copy.metric1);
  text(".metric-card:nth-of-type(2) .metric-label", copy.metric2);
  text(".metric-card:nth-of-type(3) .metric-label", copy.metric3);
  text(".profile-kicker", copy.profileKicker);
  text(".profile-card h2", copy.profileTitle);
  text(".summary-item:nth-of-type(1) span", copy.summaryEducationLabel);
  text(".summary-item:nth-of-type(1) strong", copy.summaryEducationValue);
  text(".summary-item:nth-of-type(2) span", copy.summaryStrengthsLabel);
  text(".summary-item:nth-of-type(2) strong", copy.summaryStrengthsValue);
  text(".summary-item:nth-of-type(3) span", copy.summaryToolsLabel);
  text(".summary-item:nth-of-type(3) strong", copy.summaryToolsValue);
  text(".profile-foot span:nth-of-type(1)", copy.profileLocation);
  text(".profile-foot span:nth-of-type(2)", copy.profileAvailability);
  text("#about .eyebrow", copy.aboutEyebrow);
  text("#about h2", copy.aboutTitle);
  text("#about .prose-card p:nth-of-type(1)", copy.aboutP1);
  text("#about .prose-card p:nth-of-type(2)", copy.aboutP2);
  text("#experience .eyebrow", copy.expEyebrow);
  text("#experience h2", copy.expTitle);
  text(".timeline-item:nth-of-type(1) .timeline-tag", copy.schoolTag);
  text(".timeline-item:nth-of-type(1) .timeline-card p:nth-of-type(1)", copy.schoolP1);
  text(".timeline-item:nth-of-type(1) .timeline-card p:nth-of-type(2)", copy.schoolP2);
  text(".timeline-item:nth-of-type(2) .timeline-tag", copy.internshipTag);
  text(".timeline-item:nth-of-type(2) .timeline-card p:nth-of-type(1)", copy.metecnalP1);
  text(".timeline-item:nth-of-type(2) .timeline-card p:nth-of-type(2)", copy.metecnalP2);
  text(".timeline-item:nth-of-type(3) .timeline-tag", copy.partTimeTag);
  text(".timeline-item:nth-of-type(3) .timeline-card p:nth-of-type(1)", copy.porticoP1);
  text(".timeline-item:nth-of-type(3) .timeline-card p:nth-of-type(2)", copy.porticoP2);
  text(".timeline-item:nth-of-type(4) .timeline-tag", copy.internshipTag);
  text(".timeline-item:nth-of-type(4) .timeline-card p:nth-of-type(1)", copy.alghisiP1);
  text(".timeline-item:nth-of-type(4) .timeline-card p:nth-of-type(2)", copy.alghisiP2);
  text(".timeline-item:nth-of-type(5) .timeline-tag", copy.partTimeTag);
  text(".timeline-item:nth-of-type(5) .timeline-card p:nth-of-type(1)", copy.cascinaP1);
  text(".timeline-item:nth-of-type(5) .timeline-card p:nth-of-type(2)", copy.cascinaP2);
  text(".timeline-item:nth-of-type(6) .timeline-tag", copy.internshipTag);
  text(".timeline-item:nth-of-type(6) .timeline-card p:nth-of-type(1)", copy.alghisi2P1);
  text(".timeline-item:nth-of-type(6) .timeline-card p:nth-of-type(2)", copy.alghisi2P2);
  text("#skills .eyebrow", copy.skillsEyebrow);
  text("#skills h2", copy.skillsTitle);
  text(".skill-card:nth-of-type(1) h3", copy.techTitle);
  text(".skill-card:nth-of-type(2) h3", copy.personalTitle);
  text(".skill-card:nth-of-type(3) h3", copy.relationalTitle);
  text(".skill-card:nth-of-type(4) h3", copy.orgTitle);
  text(".skill-card-wide h3", copy.langTitle);
  const languageLabels = document.querySelectorAll(".language-item span");
  const languageValues = document.querySelectorAll(".language-item strong");
  if (languageLabels[0]) languageLabels[0].textContent = copy.languageEnglish;
  if (languageValues[0]) languageValues[0].textContent = copy.languageEnglishValue;
  if (languageLabels[1]) languageLabels[1].textContent = copy.languageItalian;
  text("#projects .eyebrow", copy.projectEyebrow);
  text("#projects h2", copy.projectTitle);
  text(".project-card:nth-of-type(1) h3", copy.project1Title);
  text(".project-card:nth-of-type(1) p", copy.project1Desc);
  text(".project-card:nth-of-type(1) .project-points li:nth-of-type(1)", copy.project1P1);
  text(".project-card:nth-of-type(1) .project-points li:nth-of-type(2)", copy.project1P2);
  text(".project-card:nth-of-type(1) .project-points li:nth-of-type(3)", copy.project1P3);
  text(".project-card:nth-of-type(2) h3", copy.project2Title);
  text(".project-card:nth-of-type(2) p", copy.project2Desc);
  text(".project-card:nth-of-type(2) .project-points li:nth-of-type(1)", copy.project2P1);
  text(".project-card:nth-of-type(2) .project-points li:nth-of-type(2)", copy.project2P2);
  text(".project-card:nth-of-type(2) .project-points li:nth-of-type(3)", copy.project2P3);
  text("#contact .eyebrow", copy.contactEyebrow);
  text("#contact h2", copy.contactTitle);
  text("#contact .section-note", copy.contactNote);
  const contactLabels = document.querySelectorAll(".contact-form label");
  if (contactLabels[0]) {
    const labelText = contactLabels[0].querySelector("span");
    if (labelText) labelText.textContent = copy.formName;
  }
  if (contactLabels[1]) {
    const labelText = contactLabels[1].querySelector("span");
    if (labelText) labelText.textContent = copy.formEmail;
  }
  if (contactLabels[2]) {
    const labelText = contactLabels[2].querySelector("span");
    if (labelText) labelText.textContent = copy.formMessage;
  }
  text(".contact-form .button-primary", copy.formSubmit);
  text(".contact-links h3", copy.directContacts);
  text("#network .eyebrow", copy.networkEyebrow);
  text("#network h2", copy.networkTitle);
  text(".network-label", copy.networkLabel);
  text(".network-item a", copy.networkLink);
  text(".footer-links p:nth-of-type(1)", copy.footerNote);
  text(".footer-links p:nth-of-type(2)", copy.footerCredit);

  const heroImage = document.querySelector(".portrait-image");
  if (heroImage) {
    heroImage.setAttribute("alt", copy.photoAlt);
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      root.dataset.theme === "dark" ? copy.themeAriaDark : copy.themeAriaLight
    );
  }
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  window.localStorage.setItem("portfolio-theme", theme);
  if (themeMeta) {
    themeMeta.setAttribute("content", theme === "dark" ? "#192338" : "#d9e1f1");
  }
  const copy = translations[root.lang || "it"] || translations.it;
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? copy.themeAriaDark : copy.themeAriaLight
    );
  }
}

root.setAttribute("lang", initialLanguage);
applyTheme(initialTheme);
setLanguage(initialLanguage);

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

langToggle?.addEventListener("click", () => {
  const nextLanguage = root.getAttribute("lang") === "it" ? "en" : "it";
  setLanguage(nextLanguage);
});

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 760) {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const copy = translations[root.lang || "it"] || translations.it;

  if (!name || !email || !message) {
    if (formStatus) {
      formStatus.textContent = copy.formStatusEmpty;
    }
    return;
  }

  const subject =
    root.lang === "en"
      ? encodeURIComponent(`Portfolio request from ${name}`)
      : encodeURIComponent(`Richiesta dal portfolio di ${name}`);
  const body = encodeURIComponent(
    root.lang === "en"
      ? `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      : `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`
  );
  const mailto = `mailto:damilareisaiah737@gmail.com?subject=${subject}&body=${body}`;

  if (formStatus) {
    formStatus.textContent = copy.formStatusSent;
  }

  window.location.href = mailto;
});

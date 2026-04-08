/* ============================================================
   DATA
   ============================================================ */

const skills = [
  { category: "Datos & BI",      items: "Power BI, Power Query, Excel Avanzado, Macros / VBA" },
  { category: "Automatización",  items: "Google Sheets, Google Apps Script, Freshdesk" },
  { category: "Análisis",        items: "KPIs, reportes de gestión, dashboards operacionales" },
  { category: "Programación",    items: "Java, JavaScript, SQL, HTML, CSS, Spring" },
  { category: "Bases de datos",  items: "MySQL, SQLite" },
  { category: "Finanzas",        items: "Banca patrimonial, privada y masiva, prevención de fraudes, venta consultiva" },
];

const experience = [
  {
    title:    "Analista de Datos",
    company:  "Vento Motorcycles U.S.A — Remoto",
    dates:    "Jul 2025 – Actualidad",
    bullets: [
      "Elaboración de reportes y dashboards interactivos en Power BI y Excel para operaciones y ventas.",
      "Gestión y análisis de tickets en Freshdesk con métricas de atención al cliente.",
      "Manejo avanzado de datos con macros (VBA) y Power Query para automatización de reportes.",
      "Automatización de flujos de trabajo con Google Sheets y Google Apps Script.",
      "Análisis de KPIs estratégicos para toma de decisiones del equipo directivo.",
    ],
  },
  {
    title:    "Banquero / Asesor Digital",
    company:  "BBVA — Santa Fe, CDMX",
    dates:    "Oct 2023 – Jun 2025",
    bullets: [
      "Gestión integral de cartera digital con asesoría en productos financieros.",
      "Seguimiento de aclaraciones y actualización de bases de datos.",
      "Cumplimiento y superación constante de metas comerciales.",
    ],
  },
  {
    title:    "Service Associate 2",
    company:  "Tarjetas Banamex (Citi) — Metepec",
    dates:    "Abr 2020 – Sep 2023",
    bullets: [
      "Atención a clientes de Banca Patrimonial, Privada y CPB.",
      "Prevención de fraudes y asesoría en banca electrónica e inversiones.",
      "Altos índices de retención mediante soluciones rápidas y efectivas.",
    ],
  },
  {
    title:    "Ejecutivo Telefónico",
    company:  "PRH – Citibanamex — Metepec",
    dates:    "Jun 2017 – Mar 2020",
    bullets: [
      "Resolución de aclaraciones y soporte técnico multicanal.",
      "Venta y asesoría de productos financieros.",
    ],
  },
];

const certifications = [
  {
    tag:  "Programación",
    name: "Lógica de Programación: Sumérgete en JavaScript",
    url:  "https://app.aluracursos.com/user/pogan147/course/logica-programacion-sumergete-programacion-javascript/formalCertificate",
  },
  {
    tag:  "Programación",
    name: "Lógica de Programación: Explora Funciones y Listas",
    url:  "https://app.aluracursos.com/user/pogan147/course/logica-programacion-explorar-funciones-listas/formalCertificate",
  },
  {
    tag:  "Programación",
    name: "Challenge: Amigo Secreto",
    url:  "https://app.aluracursos.com/user/pogan147/course/logica-programacion-challenge-amigo-secreto/formalCertificate",
  },
  {
    tag:  "Git",
    name: "Git & GitHub: Repositorio, Commit y Control de Versiones",
    url:  "https://app.aluracursos.com/user/pogan147/course/git-github-repositorio-commit-versiones/formalCertificate",
  },
  {
    tag:  "Web",
    name: "HTML y CSS: Estructura de Archivos y Etiquetas",
    url:  "https://app.aluracursos.com/user/pogan147/course/html-css-desarrollo-estructura-archivos-tags/formalCertificate",
  },
  {
    tag:  "Web",
    name: "HTML y CSS: Clases, Posicionamiento y Flexbox",
    url:  "https://app.aluracursos.com/user/pogan147/course/html-css-clases-posicionamiento-flexbox/formalCertificate",
  },
  {
    tag:  "Web",
    name: "HTML y CSS: Header, Footer y Variables CSS",
    url:  "https://app.aluracursos.com/user/pogan147/course/html-css-header-footer-variables-css/formalCertificate",
  },
  {
    tag:  "Web",
    name: "HTML y CSS: Responsividad y Publicación de Proyectos",
    url:  "https://app.aluracursos.com/user/pogan147/course/html-css-trabajando-responsividad-publicacion-proyectos/formalCertificate",
  },
  {
    tag:  "IA",
    name: "ChatGPT: Optimizando la Calidad de los Resultados",
    url:  "https://app.aluracursos.com/user/pogan147/course/chatgpt-optimizando-calidad-resultados/formalCertificate",
  },
  {
    tag:  "Soft Skills",
    name: "Aprender a Aprender: Técnicas de Autodesarrollo",
    url:  "https://app.aluracursos.com/certificate/pogan147/aprender-a-aprender-tecnicas-autodesarrollo",
  },
  {
    tag:  "Soft Skills",
    name: "Hábitos Productivos para Alcanzar Metas Personales",
    url:  "https://app.aluracursos.com/user/pogan147/course/habitos-productivos-metas-personales/formalCertificate",
  },
  {
    tag:  "Soft Skills",
    name: "Foco: Hábito del Día a Día",
    url:  "https://app.aluracursos.com/user/pogan147/course/foco-habito-dia-a-dia/formalCertificate",
  },
  {
    tag:  "LinkedIn",
    name: "LinkedIn: Haz que tu Perfil Trabaje por Ti",
    url:  "https://app.aluracursos.com/user/pogan147/course/linkedin-hacer-perfil-trabaje-por-ti/formalCertificate",
  },
];

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skills.map(s => `
    <div class="skill-card">
      <h4>${s.category}</h4>
      <p>${s.items}</p>
    </div>
  `).join("");
}

function renderExperience() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = experience.map(job => `
    <div class="job">
      <div class="job-header">
        <h3>${job.title}</h3>
        <span class="job-meta">${job.dates}</span>
      </div>
      <div class="job-company">${job.company}</div>
      <ul>
        ${job.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function renderCerts() {
  const grid = document.getElementById("certs-grid");
  grid.innerHTML = certifications.map(c => `
    <div class="cert-card">
      <span class="cert-tag">${c.tag}</span>
      <h4>${c.name}</h4>
      <a href="${c.url}" target="_blank" rel="noopener noreferrer">Ver certificado</a>
    </div>
  `).join("");
}

/* ============================================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================================ */

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".job").forEach(el => observer.observe(el));
}

/* ============================================================
   ACTIVE NAV HIGHLIGHT
   ============================================================ */

function initActiveNav() {
  const sections = document.querySelectorAll("section[id], .content-section[id]");
  const navLinks = document.querySelectorAll("nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove("active"));
          const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderExperience();
  renderCerts();
  initScrollAnimations();
  initActiveNav();
});

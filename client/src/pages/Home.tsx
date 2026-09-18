import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  Grid2X2,
  Globe2,
  House,
  Languages,
  Layers,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorCog,
  MousePointer2,
  Phone,
  PanelsTopLeft,
  Quote,
  Send,
  Server,
  Shapes,
  Sparkles,
  TerminalSquare,
  UserRound,
  X,
} from "lucide-react";

const storageBase = "/manus-storage";
const cvUrl = `${storageBase}/MamadouDIALLOkiwicv_aebcb62d.pdf`;

const navItems = [
  { id: "home", label: "Accueil", number: "01" },
  { id: "about", label: "À propos", number: "02" },
  { id: "resume", label: "Parcours", number: "03" },
  { id: "services", label: "Services", number: "04" },
  { id: "skills", label: "Compétences", number: "05" },
  { id: "projects", label: "Projets", number: "06" },
];

const railNavItems = [
  { id: "home", label: "Accueil", icon: House },
  { id: "about", label: "À propos", icon: UserRound },
  { id: "resume", label: "Parcours", icon: BriefcaseBusiness },
  { id: "services", label: "Services", icon: Layers3 },
  { id: "skills", label: "Compétences", icon: Shapes },
  { id: "projects", label: "Projets", icon: Grid2X2 },
];

const englishNavLabels: Record<string, string> = {
  home: "Home",
  about: "About",
  resume: "Resume",
  services: "Services",
  skills: "Skills",
  projects: "Projects",
};
const experiences = [
  {
    date: "2020 — aujourd'hui",
    role: "Développeur Full-Stack",
    company: "GEOSO · Casablanca, Maroc",
    description:
      "Refonte complète de l'intranet et développement de briques métier robustes : chat temps réel, tickets IT, tâches, rôles et permissions. Mise en production, optimisation et maintenance d'une plateforme utilisée au quotidien.",
    stack: ["Laravel", "Livewire", "Echo / Reverb", "MySQL"],
    en: {
      date: "2020 — present",
      role: "Full-Stack Developer",
      company: "GEOSO · Casablanca, Morocco",
      description: "Complete intranet redesign and development of robust business features: real-time chat, IT tickets, tasks, roles and permissions. Production deployment, optimization and maintenance of a platform used every day.",
    },
  },
  {
    date: "Projet clé",
    role: "Psyphone · Site vitrine + CRM",
    company: "Un espace de pilotage pensé pour les psychologues et les commerciaux",
    description:
      "Pipeline de prospects, fiches patients, consultations, agenda synchronisé, facturation PDF et APIs automatisées. Une expérience multi-profils, claire et orientée performance.",
    stack: ["ReactJS", "InertiaJS", "REST API", "Docker"],
    en: {
      date: "Key project",
      role: "Psyphone · Showcase site + CRM",
      company: "A workspace designed for psychologists and sales teams",
      description: "Prospect pipeline, patient records, consultations, synchronized calendar, PDF invoicing and automated APIs. A clear, performance-focused multi-profile experience.",
    },
  },
  {
    date: "Projet clé",
    role: "Houkouki · CRM juridique",
    company: "Digitalisation de l'activité juridique",
    description:
      "Site éditorial et back-office pour gérer lois, publications et consultations. CRM commercial de bout en bout, blog optimisé pour le SEO et intégration des APIs de facturation.",
    stack: ["Laravel", "ReactJS", "TailwindCSS", "MySQL"],
    en: {
      date: "Key project",
      role: "Houkouki · Legal CRM",
      company: "Digitalizing legal operations",
      description: "Editorial website and back office for managing laws, publications and consultations. End-to-end sales CRM, SEO-optimized blog and billing API integration.",
    },
  },
  {
    date: "Projet clé",
    role: "DigiAssur · CRM assurance",
    company: "Un outil complet pour les métiers de l'assurance",
    description:
      "Gestion clients, prospects, devis, souscriptions, renouvellements, sinistres, agenda et notifications. Architecture multi-profils et automatisation de la facturation.",
    stack: ["Laravel 11/12", "InertiaJS", "REST API", "Docker"],
    en: {
      date: "Key project",
      role: "DigiAssur · Insurance CRM",
      company: "A complete tool for insurance professionals",
      description: "Management of customers, prospects, quotes, subscriptions, renewals, claims, calendars and notifications. Multi-profile architecture and automated billing.",
    },
  },
];

const skillGroups = [
  { label: "Backend", skills: ["Laravel", "PHP 8", "Livewire", "REST API", "Laravel Echo / Reverb"] },
  { label: "Frontend", skills: ["ReactJS", "Vue.js", "InertiaJS", "Alpine.js", "TailwindCSS"] },
  { label: "Data & outils", skills: ["MySQL", "SQLite", "MongoDB", "Git", "Docker", "Postman"] },
];

const projects = [
  {
    number: "01",
    title: "GEOSO Intranet",
    type: "Productivité · Temps réel",
    description: "Un espace de travail interne avec chat, tickets IT, tâches, rôles et notifications en temps réel.",
    tags: ["Laravel", "Livewire", "Reverb"],
    tone: "cyan",
    url: "https://geoso.fr/",
    en: { type: "Productivity · Real-time", description: "An internal workspace with chat, IT tickets, tasks, roles and real-time notifications." },
  },
  {
    number: "02",
    title: "Psyphone CRM",
    type: "Santé · Gestion d'activité",
    description: "Du prospect à la consultation, une suite complète pour piloter l'activité des psychologues.",
    tags: ["React", "Inertia", "Facturation"],
    tone: "violet",
    url: "https://psyphone.ma/",
    image: "/manus-storage/psyphone_a5814a6c.png",
    en: { type: "Healthcare · Activity management", description: "From prospect to consultation, a complete suite to manage the daily work of psychologists." },
  },
  {
    number: "03",
    title: "Houkouki",
    type: "Juridique · Éditorial",
    description: "Un portail juridique moderne combinant gestion documentaire, contenus SEO et CRM commercial.",
    tags: ["React", "Laravel", "SEO"],
    tone: "orange",
    url: "https://houkouki.com/",
    en: { type: "Legal · Editorial", description: "A modern legal portal combining document management, SEO content and sales CRM." },
  },
  {
    number: "04",
    title: "DigiAssur",
    type: "Assurance · Automatisation",
    description: "Un CRM assurance multi-produits pour fluidifier devis, souscriptions, renouvellements et sinistres.",
    tags: ["Laravel", "MySQL", "API"],
    tone: "blue",
    url: "https://digiassur.ma/",
    image: "/manus-storage/digiassur_bf3e6103.png",
    en: { type: "Insurance · Automation", description: "A multi-product insurance CRM streamlining quotes, subscriptions, renewals and claims." },
  },
  {
    number: "05",
    title: "Assurwi",
    type: "Assurance · Expérience client",
    description: "Une présence digitale dédiée aux besoins d'assurance, pensée pour guider les visiteurs vers la bonne solution.",
    tags: ["Web", "Assurance", "UX"],
    tone: "cyan",
    url: "https://assurwi.ma/",
    en: { type: "Insurance · Customer experience", description: "A digital presence dedicated to insurance needs, guiding visitors toward the right solution." },
  },
  {
    number: "06",
    title: "Loona",
    type: "Produit digital · Web",
    description: "Un univers web complémentaire dans l'écosystème des produits digitaux conçus et accompagnés avec soin.",
    tags: ["Web", "Design", "Delivery"],
    tone: "violet",
    url: "https://loona.ma/",
    en: { type: "Digital product · Web", description: "A complementary web universe within a carefully designed and delivered digital product ecosystem." },
  },
];

function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {detail && <p className="section-detail">{detail}</p>}
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"fr" | "en">(() => {
    if (typeof window === "undefined") return "fr";
    return window.localStorage.getItem("mamadou-portfolio-language") === "en" ? "en" : "fr";
  });
  const isEnglish = language === "en";
  const tr = (fr: string, en: string) => (isEnglish ? en : fr);

  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "fr";
    window.localStorage.setItem("mamadou-portfolio-language", language);
  }, [isEnglish, language]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-shell">
      <header className="mobile-header">
        <button className="brand-mark" onClick={() => goTo("home")} aria-label="Retour à l'accueil">MD<span>.</span></button>
        <button className="icon-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-menu">
          {navItems.map((item) => (
            <button key={item.id} className={activeSection === item.id ? "active" : ""} onClick={() => goTo(item.id)}>
              <span>{item.number}</span>{isEnglish ? englishNavLabels[item.id] : item.label}
            </button>
          ))}
          <button className="mobile-language" onClick={() => setLanguage(isEnglish ? "fr" : "en")}><Languages size={15} /> {isEnglish ? "Passer en français" : "Switch to English"}</button>
          <a href={cvUrl} download className="mobile-cv"><Download size={15} /> {tr("Télécharger le CV", "Download CV")}</a>
        </div>
      )}

      <aside className="side-rail">
        <button className="sidebar-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
          <span /><span />
        </button>
        <nav className="rail-nav" aria-label="Navigation principale">
          {railNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <button key={item.id} className={activeSection === item.id ? "active" : ""} onClick={() => goTo(item.id)} aria-label={isEnglish ? englishNavLabels[item.id] : item.label} data-tooltip={isEnglish ? englishNavLabels[item.id] : item.label}>
                <Icon size={18} strokeWidth={1.45} />
              </button>
            );
          })}
        </nav>
        <a className="rail-cv" href={cvUrl} download="Mamadou-Diallo-CV.pdf" aria-label="Télécharger le CV PDF" title="Télécharger le CV PDF">
          <Download size={14} strokeWidth={1.55} />
          <span>CV PDF</span>
        </a>
        <button className="language-toggle" onClick={() => setLanguage(isEnglish ? "fr" : "en")} aria-label={isEnglish ? "Passer en français" : "Switch to English"} data-tooltip={isEnglish ? "Français" : "English"}>
          <Languages size={13} /> <span>{isEnglish ? "FR" : "EN"}</span>
        </button>
        <div className="rail-socials">
          <a href="mailto:md.mamadoudiallo@gmail.com" aria-label="Email"><Mail size={14} /></a>
          <a href="https://github.com/momojahlow" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={14} /></a>
          <a href="https://www.linkedin.com/in/mamadou-diallo-06343b55/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
        </div>
      </aside>

      <main key={language} className={`main-content language-transition ${language}`}>
        <section id="home" className="hero-section">
          <div className="hero-visual" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content page-width">
            <div className="hero-kicker"><span className="live-line" /> Full-Stack Developer <span className="kicker-separator">/</span> {tr("Casablanca, Maroc", "Casablanca, Morocco")}</div>
            <h1>{tr("Je transforme", "I turn")}<br /><em>{tr("les idées", "ideas")}</em> {tr("en", "into")}<br /><strong>{tr("produits utiles.", "useful products.")}</strong></h1>
            <p className="hero-intro">{tr("Conception, développement et évolution d'applications web exigeantes avec Laravel, React et une obsession pour les expériences simples.", "Designing, building and evolving demanding web applications with Laravel, React and an obsession for simple experiences.")}</p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => goTo("projects")}>{tr("Voir mes réalisations", "View my work")} <ArrowDown size={16} /></button>
              <a className="button-quiet" href={cvUrl} download><Download size={16} /> {tr("Télécharger mon CV", "Download my CV")}</a>
            </div>
          </div>
          <div className="hero-meta page-width">
            <span>01 / 06</span><span>Scroll pour explorer <ArrowDown size={14} /></span>
          </div>
          <div className="hero-signature">MD<span>.</span></div>
        </section>

        <section id="about" className="section light-section">
          <div className="page-width about-grid">
            <SectionHeading eyebrow={tr("À propos", "About")} title={tr("Le code comme outil de clarté.", "Code as a tool for clarity.")} detail={tr("Des architectures solides derrière des interfaces qui restent humaines.", "Solid architectures behind interfaces that remain human.")} />
            <div className="about-copy">
              <p className="lead-copy">Je suis <strong>Mamadou Diallo</strong>, développeur Full-Stack spécialisé Laravel / ReactJS avec plus de cinq ans d'expérience.</p>
              <p>J'interviens sur des applications métier complexes — CRM, intranet, facturation, gestion des tâches, calendriers, rendez-vous et chat temps réel — avec une approche pragmatique : comprendre le besoin, structurer la solution et livrer un produit durable.</p>
              <p>Ce qui m'anime : rendre les workflows plus fluides, les données plus lisibles et la technologie plus utile aux équipes qui l'utilisent chaque jour.</p>
              <div className="about-signoff"><span className="signature-line" /> <span>Basé à Casablanca<br /><small>Ouvert aux collaborations ambitieuses</small></span></div>
            </div>
          </div>
          <div className="page-width stats-row">
            <div><strong>05<span>+</span></strong><small>années d'expérience</small></div>
            <div><strong>04</strong><small>écosystèmes métier livrés</small></div>
            <div><strong>100<span>%</span></strong><small>engagement produit</small></div>
            <div><strong>24<span>/</span>7</strong><small>curiosité technique</small></div>
          </div>
        </section>

        <section id="resume" className="section dark-section resume-section">
          <div className="page-width">
            <SectionHeading eyebrow={tr("Parcours", "Resume")} title={tr("Des systèmes qui avancent.", "Systems that move forward.")} detail={tr("Une expérience construite sur des produits concrets et des problématiques métier réelles.", "Experience built on real products and real business challenges.")} />
            <div className="timeline">
              {experiences.map((experience, index) => (
                <article className="timeline-item" key={experience.role}>
                  <div className="timeline-index">0{index + 1}</div>
                  <div className="timeline-date">{isEnglish ? experience.en.date : experience.date}</div>
                  <div className="timeline-body">
                    <h3>{isEnglish ? experience.en.role : experience.role}</h3>
                    <p className="timeline-company">{isEnglish ? experience.en.company : experience.company}</p>
                    <p>{isEnglish ? experience.en.description : experience.description}</p>
                    <div className="tag-list">{experience.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <ArrowUpRight className="timeline-arrow" size={20} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section cream-section">
          <div className="page-width">
            <SectionHeading eyebrow={tr("Services", "Services")} title={tr("Du besoin au produit.", "From need to product.")} detail={tr("Une expertise full-stack pour construire, fiabiliser et faire grandir vos outils digitaux.", "Full-stack expertise to build, strengthen and grow your digital tools.")} />
            <div className="services-grid">
              <article className="service-card service-card-main">
                <div className="service-icon"><Code2 size={23} /></div>
                <p className="card-index">01 — BUILD</p>
                <h3>Applications métier<br /><em>sur mesure.</em></h3>
                <p>CRM, intranet, portails clients ou plateformes internes : je conçois des applications structurées pour épouser vos processus, pas l'inverse.</p>
                <div className="service-footer"><span>Architecture · UI · API</span><ChevronRight size={18} /></div>
              </article>
              <article className="service-card service-card-dark">
                <div className="service-icon"><Layers3 size={23} /></div>
                <p className="card-index">02 — SCALE</p>
                <h3>Performance et<br /><em>évolution.</em></h3>
                <p>Refactorisation, cache, optimisation et déploiement : je donne une base saine aux produits qui doivent durer.</p>
                <div className="service-footer"><span>Audit · Refacto · Delivery</span><ChevronRight size={18} /></div>
              </article>
              <article className="service-card service-card-outline">
                <div className="service-icon"><MonitorCog size={23} /></div>
                <p className="card-index">03 — CONNECT</p>
                <h3>Des données qui<br /><em>circulent.</em></h3>
                <p>APIs REST, facturation, notifications et temps réel : je relie vos outils pour créer une expérience fluide de bout en bout.</p>
                <div className="service-footer"><span>Intégration · Automatisation</span><ChevronRight size={18} /></div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section light-section skills-section">
          <div className="page-width skills-grid">
            <div>
              <SectionHeading eyebrow={tr("Compétences", "Skills")} title={tr("Une stack pensée pour livrer.", "A stack built to ship.")} detail={tr("Les outils que j'utilise pour passer de la première idée à une solution fiable.", "The tools I use to turn a first idea into a reliable solution.")} />
              <div className="skills-marquee"><span>Laravel</span><i>·</i><span>React</span><i>·</i><span>MySQL</span><i>·</i><span>Inertia</span><i>·</i><span>Reverb</span></div>
            </div>
            <div className="skills-list">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <div className="skill-group-head"><span>{group.label}</span><small>{String(group.skills.length).padStart(2, "0")} technologies</small></div>
                  <div className="skill-pills">{group.skills.map((skill) => <span key={skill}>{skill}<Check size={13} /></span>)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="page-width toolkit-strip"><span><TerminalSquare size={17} /> Environnement</span><span>Windows / Linux</span><span>Agile / Scrum</span><span>Git · Docker · Postman</span><span>Français courant · Anglais moyen</span></div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="page-width">
            <div className="projects-heading">
              <SectionHeading eyebrow={tr("Projets sélectionnés", "Selected work")} title={tr("Des interfaces au service du réel.", "Interfaces in service of the real world.")} detail={tr("Quelques terrains de jeu où le produit, la technique et l'usage se rencontrent.", "A few places where product, technology and usage meet.")} />
              <div className="project-count"><strong>06</strong><span>projets<br />présentés</span></div>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className={`project-card tone-${project.tone}`} key={project.number}>
                  <div className={`project-art ${project.image ? "has-project-image" : ""}`}>
                    {project.image ? <img src={project.image} alt={`${project.title} — capture du site`} /> : <><div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" /><div className="art-core"><span>{project.number}</span></div><div className="art-crosshair"><span /><span /></div></>}
                  </div>
                  <div className="project-card-body">
                    <div className="project-card-top"><span>{project.number} / 04</span><ArrowUpRight size={17} /></div>
                    <p className="project-type">{isEnglish ? project.en.type : project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{isEnglish ? project.en.description : project.description}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Visiter le site <ExternalLink size={14} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="page-width contact-grid">
            <div>
              <p className="eyebrow light-eyebrow"><span />{tr("Contact", "Contact")}</p>
              <h2>{tr("Un projet en tête ?", "Have a project in mind?")}<br /><em>{tr("Parlons-en.", "Let's talk.")}</em></h2>
              <p className="contact-lead">{tr("Vous avez un produit à construire, un outil à faire évoluer ou une idée à clarifier ? Je serais ravi d'échanger avec vous.", "Have a product to build, a tool to evolve or an idea to clarify? I would love to hear from you.")}</p>
            </div>
            <div className="contact-panel">
              <a className="contact-link" href="mailto:md.mamadoudiallo@gmail.com"><span className="contact-icon"><Mail size={19} /></span><span><small>Email</small>md.mamadoudiallo@gmail.com</span><ArrowUpRight size={17} /></a>
              <a className="contact-link" href="tel:+2120635178483"><span className="contact-icon"><Phone size={19} /></span><span><small>Téléphone</small>+212 06 35 17 84 83</span><ArrowUpRight size={17} /></a>
              <div className="contact-location"><span className="contact-icon"><MapPin size={19} /></span><span><small>Localisation</small>Casablanca, Maroc</span></div>
              <a className="contact-cta" href="mailto:md.mamadoudiallo@gmail.com?subject=Projet%20web%20—%20Mamadou%20Diallo"><Send size={17} /> Démarrer une conversation <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="page-width footer-line"><span>MD<span className="accent-dot">.</span></span><span>Conçu & développé avec soin</span><span>2026 · Casablanca</span></div>
        </section>
      </main>

      <a className="floating-contact" href="mailto:md.mamadoudiallo@gmail.com" aria-label="Contacter Mamadou Diallo"><MessageCircle size={18} /></a>
    </div>
  );
}

export { BriefcaseBusiness, CalendarDays, ExternalLink, Globe2, Linkedin, MousePointer2, Quote, Server, Sparkles };

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
const cvUrl = `${storageBase}/MamadouDIALLOkiwicv_1f602f02.docx`;

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
  { id: "services", label: "Services", icon: Layers },
  { id: "skills", label: "Compétences", icon: Shapes },
  { id: "projects", label: "Projets", icon: Grid2X2 },
];

const experiences = [
  {
    date: "2020 — aujourd'hui",
    role: "Développeur Full-Stack",
    company: "GEOSO · Casablanca, Maroc",
    description:
      "Refonte complète de l'intranet et développement de briques métier robustes : chat temps réel, tickets IT, tâches, rôles et permissions. Mise en production, optimisation et maintenance d'une plateforme utilisée au quotidien.",
    stack: ["Laravel", "Livewire", "Echo / Reverb", "MySQL"],
  },
  {
    date: "Projet clé",
    role: "Psyphone · Site vitrine + CRM",
    company: "Un espace de pilotage pensé pour les psychologues et les commerciaux",
    description:
      "Pipeline de prospects, fiches patients, consultations, agenda synchronisé, facturation PDF et APIs automatisées. Une expérience multi-profils, claire et orientée performance.",
    stack: ["ReactJS", "InertiaJS", "REST API", "Docker"],
  },
  {
    date: "Projet clé",
    role: "Houkouki · CRM juridique",
    company: "Digitalisation de l'activité juridique",
    description:
      "Site éditorial et back-office pour gérer lois, publications et consultations. CRM commercial de bout en bout, blog optimisé pour le SEO et intégration des APIs de facturation.",
    stack: ["Laravel", "ReactJS", "TailwindCSS", "MySQL"],
  },
  {
    date: "Projet clé",
    role: "DigiAssur · CRM assurance",
    company: "Un outil complet pour les métiers de l'assurance",
    description:
      "Gestion clients, prospects, devis, souscriptions, renouvellements, sinistres, agenda et notifications. Architecture multi-profils et automatisation de la facturation.",
    stack: ["Laravel 11/12", "InertiaJS", "REST API", "Docker"],
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
  },
  {
    number: "02",
    title: "Psyphone CRM",
    type: "Santé · Gestion d'activité",
    description: "Du prospect à la consultation, une suite complète pour piloter l'activité des psychologues.",
    tags: ["React", "Inertia", "Facturation"],
    tone: "violet",
    url: "https://psyphone.ma/",
  },
  {
    number: "03",
    title: "Houkouki",
    type: "Juridique · Éditorial",
    description: "Un portail juridique moderne combinant gestion documentaire, contenus SEO et CRM commercial.",
    tags: ["React", "Laravel", "SEO"],
    tone: "orange",
    url: "https://houkouki.com/",
  },
  {
    number: "04",
    title: "DigiAssur",
    type: "Assurance · Automatisation",
    description: "Un CRM assurance multi-produits pour fluidifier devis, souscriptions, renouvellements et sinistres.",
    tags: ["Laravel", "MySQL", "API"],
    tone: "blue",
    url: "https://digiassur.ma/",
  },
  {
    number: "05",
    title: "Assurwi",
    type: "Assurance · Expérience client",
    description: "Une présence digitale dédiée aux besoins d'assurance, pensée pour guider les visiteurs vers la bonne solution.",
    tags: ["Web", "Assurance", "UX"],
    tone: "cyan",
    url: "https://assurwi.ma/",
  },
  {
    number: "06",
    title: "Loona",
    type: "Produit digital · Web",
    description: "Un univers web complémentaire dans l'écosystème des produits digitaux conçus et accompagnés avec soin.",
    tags: ["Web", "Design", "Delivery"],
    tone: "violet",
    url: "https://loona.ma/",
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
              <span>{item.number}</span>{item.label}
            </button>
          ))}
          <a href={cvUrl} download className="mobile-cv"><Download size={15} /> Télécharger le CV</a>
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
              <button key={item.id} className={activeSection === item.id ? "active" : ""} onClick={() => goTo(item.id)} aria-label={item.label} title={item.label}>
                <Icon size={18} strokeWidth={1.45} />
              </button>
            );
          })}
        </nav>
        <div className="rail-socials">
          <a href="mailto:md.mamadoudiallo@gmail.com" aria-label="Email"><Mail size={14} /></a>
          <a href="https://github.com/momojahlow" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={14} /></a>
          <a href="https://www.linkedin.com/in/mamadou-diallo-06343b55/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
        </div>
      </aside>

      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="hero-visual" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content page-width">
            <div className="hero-kicker"><span className="live-line" /> Full-Stack Developer <span className="kicker-separator">/</span> Casablanca, Maroc</div>
            <h1>Je transforme<br /><em>les idées</em> en<br /><strong>produits utiles.</strong></h1>
            <p className="hero-intro">Conception, développement et évolution d'applications web exigeantes avec Laravel, React et une obsession pour les expériences simples.</p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => goTo("projects")}>Voir mes réalisations <ArrowDown size={16} /></button>
              <a className="button-quiet" href={cvUrl} download><Download size={16} /> Télécharger mon CV</a>
            </div>
          </div>
          <div className="hero-meta page-width">
            <span>01 / 06</span><span>Scroll pour explorer <ArrowDown size={14} /></span>
          </div>
          <div className="hero-signature">MD<span>.</span></div>
        </section>

        <section id="about" className="section light-section">
          <div className="page-width about-grid">
            <SectionHeading eyebrow="À propos" title="Le code comme outil de clarté." detail="Des architectures solides derrière des interfaces qui restent humaines." />
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
            <SectionHeading eyebrow="Parcours" title="Des systèmes qui avancent." detail="Une expérience construite sur des produits concrets et des problématiques métier réelles." />
            <div className="timeline">
              {experiences.map((experience, index) => (
                <article className="timeline-item" key={experience.role}>
                  <div className="timeline-index">0{index + 1}</div>
                  <div className="timeline-date">{experience.date}</div>
                  <div className="timeline-body">
                    <h3>{experience.role}</h3>
                    <p className="timeline-company">{experience.company}</p>
                    <p>{experience.description}</p>
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
            <SectionHeading eyebrow="Services" title="Du besoin au produit." detail="Une expertise full-stack pour construire, fiabiliser et faire grandir vos outils digitaux." />
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
              <SectionHeading eyebrow="Compétences" title="Une stack pensée pour livrer." detail="Les outils que j'utilise pour passer de la première idée à une solution fiable." />
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
              <SectionHeading eyebrow="Projets sélectionnés" title="Des interfaces au service du réel." detail="Quelques terrains de jeu où le produit, la technique et l'usage se rencontrent." />
              <div className="project-count"><strong>06</strong><span>projets<br />présentés</span></div>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className={`project-card tone-${project.tone}`} key={project.number}>
                  <div className="project-art"><div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" /><div className="art-core"><span>{project.number}</span></div><div className="art-crosshair"><span /><span /></div></div>
                  <div className="project-card-body">
                    <div className="project-card-top"><span>{project.number} / 04</span><ArrowUpRight size={17} /></div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
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
              <p className="eyebrow light-eyebrow"><span />Contact</p>
              <h2>Un projet en tête ?<br /><em>Parlons-en.</em></h2>
              <p className="contact-lead">Vous avez un produit à construire, un outil à faire évoluer ou une idée à clarifier ? Je serais ravi d'échanger avec vous.</p>
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

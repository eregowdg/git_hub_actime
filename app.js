const services = [
  { id: "ai-intelligent-solutions", short: "AI", title: "AI & Intelligent Solutions", copy: "We design and ship AI that earns its place in production — machine learning models, generative AI applications and intelligent agents embedded into the workflows where decisions happen.", items: ["AI strategy, use-case discovery and readiness assessments", "Machine learning and deep learning model development", "Generative AI and LLM-powered applications", "Intelligent automation, agents and decision support"], icon: "✳", poster: "./assets/data-platform.jpeg" },
  { id: "data-engineering-analytics", short: "DATA", title: "Data Engineering & Analytics", copy: "Pipelines, warehouses and analytics products that turn scattered data into a dependable source of truth — and decisions your business can act on.", items: ["Modern ETL/ELT pipelines and data modelling", "Real-time and batch analytics at scale", "Business intelligence dashboards and reporting", "Data quality, lineage and governance frameworks"], icon: "⌁", poster: "./assets/service-posters/data-engineering.jpeg" },
  { id: "cloud-engineering-modernization", short: "CLOUD", title: "Cloud Engineering & Modernization", copy: "We architect cloud-native foundations on Azure — migrating, re-platforming and optimizing systems so they scale reliably and cost-effectively.", items: ["Azure migration and secure landing zones", "Cloud-native application architecture and re-platforming", "DevOps, CI/CD and infrastructure as code", "Cost, performance and reliability engineering"], icon: "⌂", poster: "./assets/service-posters/cloud-engineering.jpeg" },
  { id: "software-product-development", short: "SOFTWARE", title: "Software Product Development", copy: "Full-cycle product engineering — from discovery and UX to enterprise-grade release — for platforms your customers and teams rely on every day.", items: ["Product discovery, UX and rapid prototyping", "Web and enterprise application development", "API-first architecture and systems integration", "Legacy application modernization"], icon: "⌘", poster: "./assets/service-posters/software-development.jpeg" },
  { id: "data-platforms-engineering", short: "PLATFORM", title: "Data Platforms & Engineering", copy: "Lakehouse foundations built on Azure Data Factory, Azure Databricks and Microsoft Fabric — engineered for scale, governance and speed to insight.", items: ["Lakehouse and medallion architecture design", "Azure Data Factory ingestion and orchestration", "Azure Databricks and PySpark workloads", "Microsoft Fabric and warehouse implementations"], icon: "▤", poster: "./assets/engineering.jpeg" },
  { id: "digital-transformation", short: "TRANSFORM", title: "Digital Transformation", copy: "Technology roadmaps that connect business ambition to engineering execution — modernizing what exists and building what's next, without losing momentum.", items: ["Digital strategy, roadmapping and operating models", "Process re-engineering powered by AI and automation", "Platform consolidation and legacy modernization", "Adoption, enablement and measurable outcomes"], icon: "↗", poster: "./assets/service-posters/digital-transformation.jpeg" }
];

const industries = [
  { id: "financial-services", title: "Financial Services", copy: "Data-intensive by nature — financial firms win on trust, speed and precision.", uses: ["Real-time risk and regulatory reporting pipelines", "Intelligent fraud and anomaly detection", "Customer 360 and personalization analytics", "Modernized core and payments data platforms"] },
  { id: "retail-ecommerce", title: "Retail & E-commerce", copy: "Every transaction is a signal. We help retailers read them all.", uses: ["Demand forecasting and inventory optimization", "Unified commerce and customer data platforms", "Personalization and pricing intelligence", "Supply chain visibility and analytics"] },
  { id: "healthcare", title: "Healthcare", copy: "Better outcomes depend on data that is connected, compliant and timely.", uses: ["Care and operational analytics platforms", "Secure, interoperable patient data foundations", "Predictive capacity and resource planning", "Quality and compliance reporting automation"] },
  { id: "manufacturing", title: "Manufacturing", copy: "From shop floor to top floor — one connected picture of production.", uses: ["Predictive maintenance and asset analytics", "IoT data platforms and the digital thread", "Production quality and yield analytics", "End-to-end supply chain intelligence"] },
  { id: "technology-saas", title: "Technology & SaaS", copy: "For product companies, data is the product. We help you ship it.", uses: ["Product and usage analytics platforms", "AI feature engineering and experimentation", "Scalable multi-tenant data architectures", "Customer health and retention intelligence"] }
];

const solutionPrograms = [
  { title: "Enterprise AI Enablement", copy: "A pragmatic path from AI curiosity to production systems — use-case discovery, data readiness, model development and MLOps, sequenced to show value early.", deliverables: ["AI opportunity map", "Production-grade pilots", "MLOps & evaluation framework"], fit: "Leadership teams under pressure to make AI real." },
  { title: "Intelligent Data Platform", copy: "A unified lakehouse on Azure Data Factory, Databricks and Microsoft Fabric — one governed foundation for analytics, AI and operations.", deliverables: ["Lakehouse architecture blueprint", "Ingestion & orchestration layer", "Governance & quality framework"], fit: "Organizations drowning in fragmented data." },
  { title: "Cloud Modernization Program", copy: "Move and re-platform critical workloads to Azure with a staged, low-risk migration — modern architecture without pausing the business.", deliverables: ["Migration readiness assessment", "Target architecture & landing zone", "Staged migration plan"], fit: "Enterprises carrying legacy estates." },
  { title: "Analytics That Operate", copy: "Embedded decision intelligence: the metrics, models and dashboards wired into the workflows where teams actually make calls.", deliverables: ["Metric & KPI framework", "Self-service BI layer", "Embedded analytics apps"], fit: "Teams still deciding by spreadsheet." },
  { title: "Digital Transformation Office", copy: "A joint execution engine that turns transformation ambition into shipped milestones — strategy, engineering and adoption in one team.", deliverables: ["Transformation roadmap", "Platform consolidation plan", "Adoption & change program"], fit: "Change programs that must show return." }
];

const articles = [
  { category: "Data Platforms", minutes: 6, title: "The Lakehouse Decision: Choosing Between Fabric, Databricks and a Hybrid Architecture", copy: "Microsoft Fabric and Azure Databricks solve overlapping problems with different philosophies. Here is how we help enterprises decide — and why a hybrid often wins.", id: "lakehouse-decision" },
  { category: "AI Engineering", minutes: 7, title: "From Pilot to Production: What It Actually Takes to Ship Enterprise LLM Applications", copy: "Most enterprise AI pilots stall before production. The gap is rarely the model — it is data readiness, evaluation and guardrails.", id: "llm-to-production" },
  { category: "Analytics Strategy", minutes: 5, title: "Dashboards Are Not a Strategy: Building an Analytics Culture That Sticks", copy: "Adoption is the hardest metric in analytics. A practical approach to landing insights in the daily rhythm of decisions.", id: "analytics-culture" },
  { category: "Software Engineering", minutes: 5, title: "Modernize Without the Rewrite: Incremental Paths Off Legacy Systems", copy: "Big-bang rewrites fail quietly and expensively. Strangler patterns, anti-corruption layers and staging the migration.", id: "modernize-without-rewrite" }
];

const technologies = [
  ["01", "Artificial Intelligence & Machine Learning", "Models, MLOps and applied AI embedded in products and operations.", "APPLIED AI"],
  ["02", "Azure & Cloud Engineering", "Cloud-native architecture, landing zones and platform automation on Azure.", "AZURE"],
  ["03", "Azure Data Factory", "Enterprise-grade ingestion and orchestration for data at any scale.", "ORCHESTRATION"],
  ["04", "Azure Databricks", "Collaborative data engineering, Spark workloads and large-scale processing.", "SPARK"],
  ["05", "Microsoft Fabric", "Unified analytics that brings lakes, warehouses and reporting together.", "UNIFIED ANALYTICS"],
  ["06", "SQL & PySpark", "The engineering core of transformation, modelling and data pipelines.", "DATA CORE"],
  ["07", "Data Warehousing & Lakehouse", "Medallion architectures from bronze to gold, governed end to end.", "ARCHITECTURE"],
  ["08", "Modern Software Engineering", "API-first, test-automated, continuously delivered product engineering.", "ENGINEERING"]
];

const outcomes = [
  ["01", "Actionable insight from complex data", "We turn fragmented, messy data into clear answers — models, metrics and dashboards people actually use to make decisions."],
  ["02", "Scalable, reliable data platforms", "Lakehouse and warehouse foundations engineered for growth, governed by design and fast enough for the questions you'll ask next."],
  ["03", "Accelerated software delivery", "Modern engineering practices and automation that compress the distance between an idea and production."],
  ["04", "Modernized legacy systems", "We re-platform what slows you down — incrementally, without pausing the business."],
  ["05", "AI applied to real problems", "No demos that die in a slide deck. We take AI from prototype to production, measured against business outcomes."],
  ["06", "Operational efficiency through technology", "Automated workflows and intelligent systems that remove friction from everyday operations."]
];

const routeLink = (path, label, className = "") => `<a class="${className}" href="#/${path}">${label}</a>`;

function serviceCards() {
  return services.map((item, index) => `<a class="service-card" href="#/services#${item.id}">
    <span class="card-topline"><span class="card-icon">${item.icon}</span><span class="card-index">${String(index + 1).padStart(2, "0")}</span></span>
    <h3>${item.title}</h3><p>${item.copy}</p><span class="card-link">Explore service <span aria-hidden="true">↗</span></span>
  </a>`).join("");
}

function industryCards() {
  return `${industries.map((item, index) => `<a class="industry-card" href="#/industries#${item.id}">
    <span class="card-index">0${index + 1} / INDUSTRY</span><h3>${item.title}</h3><p>${item.copy}</p><ul>${item.uses.slice(0, 2).map((use) => `<li>${use}</li>`).join("")}</ul>
  </a>`).join("")}<a class="industry-card industry-prompt" href="#/contact"><span class="card-index">YOUR INDUSTRY</span><h3>Don't see your industry?</h3><p>The disciplines transfer. Tell us your problem — we'll bring the engineering.</p><span class="card-link">Start a conversation <span aria-hidden="true">↗</span></span></a>`;
}

function articleCards(list = articles) {
  return list.map((item, index) => `<article class="insight-card" data-category="${item.category}">
    <div class="insight-meta"><span>${item.category}</span><span>${item.minutes} min read</span></div>
    <span class="card-index" style="margin-top:22px">0${index + 1} / SAMPLE ARTICLE</span>
    <h3>${item.title}</h3><p>${item.copy}</p><a class="card-link" href="#/insights#${item.id}">Read article <span aria-hidden="true">↗</span></a>
  </article>`).join("");
}

function ticker() {
  const labels = ["Artificial Intelligence", "Data Platforms", "Cloud Engineering", "Lakehouse Architecture", "Modern Software Engineering", "Intelligent Automation"];
  return `<div class="ticker" aria-label="Capabilities ribbon"><div class="ticker-track">${[...labels, ...labels].map((label) => `<span class="ticker-item">${label}</span>`).join("")}</div></div>`;
}

function cta() {
  return `<section class="section cta-section"><div class="cta-band"><div class="cta-copy"><p class="section-label">Let's build</p><h2>Ready to transform your enterprise?</h2><p>Tell us about the challenge you're facing. We'll bring the engineers, the data and the AI to solve it.</p></div><div class="cta-actions">${routeLink("contact", `Let's Talk <span aria-hidden="true">↗</span>`, "button button-primary")}${routeLink("services", "Explore Our Services", "button button-outline")}</div></div></section>`;
}

function homePage() {
  return `<section class="hero">
    <div class="hero-copy"><p class="eyebrow">AI-native engineering & analytics</p><h1>Engineering Intelligence<span>.</span><br>Accelerating Innovation<span>.</span></h1>
      <p class="hero-description">We help businesses transform ideas into intelligent digital solutions through AI, modern software engineering, data platforms, and cloud technologies.</p>
      <div class="hero-actions">${routeLink("services", `Explore Our Services <span aria-hidden="true">↗</span>`, "button button-primary")}${routeLink("contact", "Let's Talk", "button button-outline")}</div>
    </div><div class="hero-meta"><a href="#/home#capabilities">↓ &nbsp; Scroll</a><p>AI / Data / Cloud / Software Engineering</p></div>
  </section>
  ${ticker()}
  <section class="section home-capabilities" id="capabilities"><div class="section-head"><div><p class="section-label">Capabilities</p><h2 class="section-title">Technology That Moves Business Forward.</h2></div><p class="section-copy">Six disciplines, one team — engineered to compound: data feeds AI, AI accelerates software, software transforms operations.</p></div><div class="services-grid">${serviceCards()}</div></section>
  <section class="section home-approach"><div class="split-feature"><div class="feature-intro"><p class="section-label">Why Actime Analytics</p><h2 class="section-title">From Complex Challenges to Intelligent Outcomes.</h2><p class="section-copy feature-copy">Every engagement starts with a business problem, not a technology. We bring the engineering discipline to make the answer real — and the pragmatism to make it last.</p><div class="feature-image" role="img" aria-label="Abstract visualization of a modern data platform with flowing pipelines"><span class="image-caption">Data platforms / engineered</span></div></div><div class="outcome-list">${outcomes.map(([number,title,copy]) => `<div class="outcome-row"><span>${number}</span><div><h3>${title}</h3><p>${copy}</p></div></div>`).join("")}</div></div></section>
  <section class="section home-tech-section"><div class="section-head"><div><p class="section-label">Engineering & technology</p><h2 class="section-title">The Engineering Behind the Intelligence.</h2></div><p class="section-copy">Deep platform expertise that supports every engagement — chosen for the problem, mastered end to end.</p></div><div class="tech-grid">${technologies.map(([number,title,copy,tag]) => `<article class="tech-card"><span>${number} / ${tag}</span><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></section>
  <section class="section home-industries"><div class="section-head"><div><p class="section-label">Solutions by industry</p><h2 class="section-title">Fluency in Your Domain.</h2></div>${routeLink("industries", `All industries <span aria-hidden="true">↗</span>`, "button button-outline")}</div><div class="industry-grid">${industryCards()}</div></section>
  <section class="section home-insights"><div class="section-head"><div><p class="section-label">Insights</p><h2 class="section-title">Notes From the Engineering Floor.</h2></div>${routeLink("insights", `All insights <span aria-hidden="true">↗</span>`, "button button-outline")}</div><div class="insight-grid">${articleCards(articles.slice(0,3))}</div></section>${cta()}`;
}

function pageHero(label, title, copy, actions = "") {
  return `<section class="page-hero"><p class="eyebrow">${label}</p><h1>${title}</h1><p class="lead">${copy}</p>${actions ? `<div class="hero-actions">${actions}</div>` : ""}</section>`;
}

function servicesPage() {
  const actions = services.map((item, index) => `<a class="filter-chip" href="#/services#${item.id}"><span>0${index + 1}</span> ${item.short}</a>`).join("");
  return `${pageHero("Services", "Six disciplines. One engineering team.", "From AI strategy to production data platforms, we cover the full arc of intelligent systems — and we staff every engagement with engineers who build, not just advise.")}<div class="section service-index" style="padding-top:20px"><nav class="filter-row" aria-label="Jump to a service">${actions}</nav></div>
  ${services.map((item,index) => `<section class="section service-detail${index === 0 ? " service-detail-first" : ""}${index === services.length - 1 ? " service-detail-last" : ""}" id="${item.id}"><div class="detail-layout"><div><p class="section-label">0${index + 1} / ${item.short}</p><h2>${item.title}</h2><p class="lead">${item.copy}</p><ul class="detail-list">${item.items.map((text) => `<li>${text}</li>`).join("")}</ul><a class="card-link" href="#/contact">Discuss this service <span aria-hidden="true">↗</span></a></div><div class="service-video-frame" aria-hidden="true"><video autoplay loop muted playsinline preload="metadata" poster="${item.poster}"><source src="./videos/${item.id}.webm" type="video/webm"><source src="./videos/${item.id}.mp4" type="video/mp4"></video><span class="service-video-label">${item.short} / ENGINEERED</span></div></div></section>`).join("")}${cta()}`;
}

function solutionsPage() {
  return `${pageHero("Solutions", "Programs built for outcomes, not output.", "Packaged ways of working that turn strategy into shipped systems — each one a proven shape of engagement, adapted to your context.")}<section class="section"><p class="section-label">How we engage</p><div class="program-grid">${solutionPrograms.map((program, index) => `<article class="program-card"><span class="card-index">0${index + 1} / PROGRAM</span><h2>${program.title}</h2><p>${program.copy}</p><p class="program-label">What you get</p><ul>${program.deliverables.map((deliverable) => `<li>${deliverable}</li>`).join("")}</ul><p class="program-fit"><strong>Best for:</strong> ${program.fit}</p><a class="card-link" href="#/contact">Discuss <span aria-hidden="true">↗</span></a></article>`).join("")}</div><p class="section-copy program-note">Every program is tailored before it starts. Bring us the business problem — we'll shape the engagement around it.</p></section>${cta()}`;
}

function industriesPage() {
  return `${pageHero("Industries", "Engineering that speaks your domain.", "The disciplines are universal; the use cases are not. Here is how our capabilities land in five data-intensive industries.")}<section class="section">${industries.map((item,index) => `<article class="industry-detail" id="${item.id}"><div><h2>${item.title}</h2><p>${item.copy}</p></div><div><p class="section-label">0${index + 1} / Potential use cases</p><ul>${item.uses.map((use,i) => `<li><span>0${i + 1}</span>${use}</li>`).join("")}</ul></div></article>`).join("")}<div class="cta-band" style="margin-top:42px"><div class="cta-copy"><p class="section-label">Not listed?</p><h2>The engineering transfers. The curiosity is yours to bring.</h2></div>${routeLink("contact", `Tell us about your industry <span aria-hidden="true">↗</span>`, "button button-primary")}</div></section>${cta()}`;
}

function insightsPage() {
  const categories = ["All", ...new Set(articles.map((article) => article.category))];
  return `${pageHero("Insights", "Notes from the engineering floor.", "Field notes on AI, data platforms and modern engineering — written by practitioners, not content calendars.")}<section class="section"><p class="editorial-note">Sample editorial content — replace with your own articles</p><div class="filter-row" aria-label="Filter articles">${categories.map((category,index) => `<button type="button" class="filter-chip ${index === 0 ? "is-active" : ""}" data-filter="${category}">${category}</button>`).join("")}</div><div class="insight-grid">${articleCards()}</div></section>${cta()}`;
}

function aboutPage() {
  const values = [
    ["01", "Engineer with intent", "Every architecture, model and line of code exists to move a business metric — not to showcase technology."],
    ["02", "Data before opinions", "We let evidence lead. Hypotheses are welcome; the data decides."],
    ["03", "AI with accountability", "Intelligent systems must be explainable, governed and aligned with the people they serve."],
    ["04", "Partner, not vendor", "We build with your teams, transfer what we know, and measure ourselves on your outcomes."]
  ];
  const process = [
    ["01", "Discover", "We start with your business problem, data reality and constraints — not a technology pitch."],
    ["02", "Architect", "We design the system — AI, data, cloud — with governance and scale built in from day one."],
    ["03", "Build", "Senior engineers ship working software in short, measurable increments. No black boxes."],
    ["04", "Scale & Run", "We harden, document and hand over — or run it alongside you. Your team levels up either way."]
  ];
  return `${pageHero("About us", "An engineering company built around intelligence.", "Actime Analytics exists for one reason: to help businesses turn what they know into what they can do — with AI, data and disciplined software engineering.")}<section class="section"><div class="mission"><div><p class="section-label">Our mission</p><h2>Systems that learn.<br>Data that decides.<br>Software that ships.</h2></div><div><p>We believe every enterprise deserves the same leverage the best engineering companies give themselves: systems that learn, data that decides, software that ships.</p><p>That belief shapes how we work: small senior teams, short feedback loops, architectures that assume growth, and AI treated as engineering — measurable, governed and accountable.</p><span class="card-link">INTELLIGENCE / ENGINEERED</span></div></div></section><section class="section" style="padding-top:10px"><div class="section-head"><div><p class="section-label">What we stand for</p><h2 class="section-title">Principles that survive contact with production.</h2></div></div><div class="values-grid">${values.map(([number,title,copy]) => `<article class="value-card"><span>${number}</span><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></section><section class="section" style="padding-top:10px"><div class="section-head"><div><p class="section-label">How we engage</p><h2 class="section-title">From first question to lasting impact.</h2></div></div><div class="process-grid">${process.map(([number,title,copy]) => `<article class="process-card"><span>${number}</span><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></section>${cta()}`;
}

function contactPage() {
  const nextSteps = [
    ["01", "We listen", "A 30-minute conversation about your problem, your data and your constraints. No pitch deck."],
    ["02", "We frame the problem", "We restate what we heard in engineering terms — risks, options and honest trade-offs."],
    ["03", "We propose the path", "A concrete next step: a discovery sprint, a pilot, or a straight answer that you don't need us yet."]
  ];
  return `${pageHero("Contact", "Let's talk about what's next.", "Tell us where the friction is — a legacy platform, a data question, an AI ambition. We'll come back with an engineer's answer, not a brochure.")}<section class="section"><div class="contact-layout"><div><p class="section-label">What happens next</p><div class="next-steps">${nextSteps.map(([number,title,copy]) => `<article class="next-step"><span>${number}</span><div><h3>${title}</h3><p>${copy}</p></div></article>`).join("")}</div><div class="contact-info"><a href="mailto:info@actimeanalytics.com">info@actimeanalytics.com ↗</a></div></div><form class="contact-form">
    <div class="form-field"><label for="name">Name *</label><input id="name" name="name" autocomplete="name" placeholder="Jane Cooper" required></div>
    <div class="form-field"><label for="email">Work email *</label><input id="email" name="email" type="email" autocomplete="email" placeholder="jane@company.com" required></div>
    <div class="form-field"><label for="company">Company</label><input id="company" name="company" autocomplete="organization" placeholder="Company Inc."></div>
    <div class="form-field"><label for="interest">I'm interested in</label><select id="interest" name="interest">${services.map((item) => `<option>${item.title}</option>`).join("")}<option>Something else</option></select></div>
    <div class="form-field full"><label for="challenge">What are you trying to solve? *</label><textarea id="challenge" name="challenge" placeholder="Tell us about the challenge, the data you have, and what success looks like." required></textarea></div>
    <button class="button button-primary" type="submit">Send message <span aria-hidden="true">↗</span></button><p class="form-status" role="status">Front-end demo — submissions aren't delivered to a mailbox yet</p>
  </form></div></section>${cta()}`;
}

function careersPage() {
  const roles = ["Senior Data Engineer (Azure)", "AI / ML Engineer", "Cloud Engineer", "Senior Software Engineer", "Analytics Consultant", "Other"];
  return `${pageHero("Careers", "Apply to Actime Analytics.", "Tell us who you are, pick the role you're after, and share your resume — we'll be in touch.")}<section class="section"><form class="career-form">
    <div class="form-field"><label for="applicant-name">Full name *</label><input id="applicant-name" name="name" autocomplete="name" placeholder="Jane Cooper" required></div>
    <div class="form-field"><label for="applicant-role">Role *</label><select id="applicant-role" name="role" required><option value="" selected disabled>Select a role</option>${roles.map((role) => `<option>${role}</option>`).join("")}</select></div>
    <div class="form-field"><label for="applicant-email">Email *</label><input id="applicant-email" name="email" type="email" autocomplete="email" placeholder="jane@company.com" required></div>
    <div class="form-field"><label for="applicant-phone">Phone number *</label><input id="applicant-phone" name="phone" type="tel" autocomplete="tel" placeholder="+1 555 000 0000" required></div>
    <div class="form-field full"><label for="resume">Resume *</label><input class="file-input" id="resume" name="resume" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required><span class="file-hint">PDF or DOC — required</span></div>
    <button class="button button-primary" type="submit">Submit application <span aria-hidden="true">↗</span></button><p class="form-status" role="status">Front-end demo — applications aren't stored yet</p>
  </form></section>${cta()}`;
}

function footer() {
  return `<div class="site-footer"><div class="footer-grid">
    <div class="footer-about"><a class="brand" href="#/" aria-label="Actime Analytics home"><img class="brand-image" src="./assets/logo-3.svg" alt="Actime Analytics"></a><p>AI-native software engineering, data engineering and analytics. We help businesses transform ideas into intelligent digital solutions.</p><a href="mailto:info@actimeanalytics.com">info@actimeanalytics.com</a></div>
    <div class="footer-column"><h3>Services</h3>${services.slice(0,5).map((item) => routeLink(`services#${item.id}`, item.title)).join("")}</div>
    <div class="footer-column"><h3>Company</h3>${[["", "Home"],["about","About Us"],["careers","Careers"],["solutions","Solutions"],["industries","Industries"],["insights","Insights"],["contact","Contact"]].map(([path,label]) => routeLink(path,label)).join("")}</div>
    <div class="footer-column"><h3>Presence</h3><p>Remote-first<br>Serving clients globally</p></div>
  </div><p class="footer-wordmark" aria-hidden="true">ACTIME</p><div class="footer-bottom"><p>© 2026 Actime Analytics. All rights reserved.</p><p>Engineering Intelligence. Accelerating Innovation.</p></div></div>`;
}

const pages = { "/": homePage, "/home": homePage, "/services": servicesPage, "/solutions": solutionsPage, "/industries": industriesPage, "/insights": insightsPage, "/about": aboutPage, "/careers": careersPage, "/contact": contactPage };
const app = document.querySelector("#app");
const footerRoot = document.querySelector("#footer");
const menu = document.querySelector(".menu-layer");
const menuToggle = document.querySelector(".menu-toggle");

function render() {
  const [routePart, anchor] = decodeURIComponent(location.hash.slice(1)).split("#");
  const route = pages[routePart || "/"] ? routePart || "/" : "/";
  app.innerHTML = pages[route]();
  footerRoot.innerHTML = footer();
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("menu-open");
  window.scrollTo(0, 0);
  if (anchor) requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }));
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("menu-open", open);
});

menu.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("menu-open");
});

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    const category = filter.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("is-active", button === filter));
    document.querySelectorAll(".insight-card").forEach((card) => card.classList.toggle("hidden", category !== "All" && card.dataset.category !== category));
  }
});

document.addEventListener("submit", (event) => {
  if (!event.target.matches(".contact-form, .career-form")) return;
  event.preventDefault();
  const status = event.target.querySelector(".form-status");
  status.textContent = event.target.matches(".career-form")
    ? "Thanks for your interest. This demo application form does not store or send applications yet."
    : "Thanks for reaching out. This demo form is not connected to a mailbox yet.";
});

window.addEventListener("hashchange", render);
render();

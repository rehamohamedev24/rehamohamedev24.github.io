const $ = (q) => document.querySelector(q);

const data = window.PORTFOLIO;

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value ?? "";
}

function setHref(id, href) {
  const el = $(id);
  if (el) el.href = href ?? "#";
}


function getSkillIconName(name) {
  const map = {
    "Kotlin": "code-2",
    "Java": "coffee",
    "Android SDK": "smartphone",
    "Jetpack Compose": "palette",
    "Android Jetpack (ViewModel, LiveData, Navigation)": "layers",
    "MVVM Architecture": "boxes",
    "Clean Architecture (Multi-Module)": "layout-grid",
    "Hilt (Dependency Injection)": "package",
    "Coroutines & Flow": "zap",
    "Retrofit (REST APIs)": "globe",
    "Room / DataStore / SharedPreferences": "database",
    "Firebase + GitHub Actions (CI/CD)": "flame",
  };

  return map[name] || "check";
}

function renderSkills() {
  const grid = $("#skillsGrid");
  if (!grid) return;

  grid.innerHTML = (data.skills || []).map(s => `
    <div class="card skill">
      <div class="skill__top">
        <div class="skill__left">
          <span class="skill__icon">
            <i data-lucide="${getSkillIconName(s.name)}"></i>
          </span>
          <b>${s.name}</b>
        </div>
        <span>${s.level}%</span>
      </div>
      <div class="bar">
        <div class="fill" data-level="${s.level}"></div>
      </div>
    </div>
  `).join("");

  // render lucide icons
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }

  // animate when visible
  const fills = document.querySelectorAll(".fill[data-level]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.getAttribute("data-level") + "%";
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.35 });

  fills.forEach(f => io.observe(f));
}


function projectCard(p) {
  return `
    <a class="card projectCardLink" href="${p.github}" target="_blank" rel="noreferrer"
       aria-label="Open ${p.title} on GitHub">
      <img class="project__img" src="${p.image}" alt="${p.title}" onerror="this.style.display='none'"/>
      <h3 style="margin-top:12px">${p.title}</h3>
      <p class="muted">${p.description}</p>
      <div class="tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </a>
  `;
}


function renderProjects(list) {
  const grid = $("#projectsGrid");
  grid.innerHTML = list.map(projectCard).join("");
}

function renderExperience() {
  const wrap = $("#experienceStack");
  wrap.innerHTML = data.experience.map(x => `
    <div class="card">
      <div class="row">
        <div>
          <h3>${x.title}</h3>
          <p class="muted">${x.company} • ${x.location}</p>
        </div>
        <span class="exp__date">${x.period}</span>
      </div>
      <p class="muted" style="margin-top:10px">${x.description}</p>
      <ul style="margin:10px 0 0;padding-left:18px;color:var(--muted)">
        ${x.achievements.map(a => `<li>${a}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function renderEducation() {
  const e = data.education;
  $("#educationCard").innerHTML = `
    <h3>${e.degree}</h3>
    <p class="muted">${e.school}</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px">
      <span class="pill2">${e.date}</span>
      <span class="pill2">GPA: ${e.gpa}</span>
    </div>
  `;
}

function setupSearch() {
  const input = $("#projectSearch");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    const filtered = data.projects.filter(p => {
      const hay = (p.title + " " + p.description + " " + p.tech.join(" ")).toLowerCase();
      return hay.includes(q);
    });
    renderProjects(filtered);
  });
}

function setupTheme() {
  const key = "reham_theme";
  const btn = $("#modeBtn");
  const icon = $("#modeIcon");

  const apply = (t) => {
    document.documentElement.classList.toggle("light", t === "light");
    icon.textContent = (t === "light") ? "☀" : "☾";
    localStorage.setItem(key, t);
  };

  const saved = localStorage.getItem(key) || "dark";
  apply(saved);

  btn.addEventListener("click", () => {
    const next = document.documentElement.classList.contains("light") ? "dark" : "light";
    apply(next);
  });
}

function hydrate() {
  setText("#summary", data.summary);
  setText("#phone", data.phone);
  setText("#email", data.email);
  setText("#footerName", data.name);
  setText("#year", new Date().getFullYear());

  setHref("#resumeBtn", data.resume);

  const mail = `mailto:${data.email}`;
  setHref("#emailBtn", mail);
  setHref("#emailBtn2", mail);

  setHref("#phoneBtn", `tel:${data.phone.replace(/\s/g, "")}`);

  setHref("#githubBtn", data.github);
  setHref("#githubBtn2", data.github);

  setHref("#linkedinBtn", data.linkedin);
  setHref("#linkedinBtn2", data.linkedin);

  renderSkills();
  renderProjects(data.projects);
  renderExperience();
  renderEducation();
  setupSearch();
  setupTheme();
}

hydrate();

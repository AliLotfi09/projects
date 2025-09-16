import './style.css'

const projectList = document.querySelector('.section-proj');

async function loadProjects() {
  const res = await fetch('/projects.json');
  let projects = await res.json();

  projects.forEach(project => {
    // اگر تاریخ اضافه شدن موجود نبود، امروز رو بذار
    const addedDate = new Date(project.added_at || new Date());

    // تبدیل به شمسی و فقط ماه/سال
    const options = { year: 'numeric', month: 'long' };
    const addedDateShamsi = new Intl.DateTimeFormat('fa-IR', options).format(addedDate);

    const li = document.createElement('li');
    li.innerHTML = `
      <section>
        <a href="${project.link}">
          <img src="${project.image}" alt="${project.title}" class="preview">
          <h2 class="title-proj">${project.title}</h2>
        </a>
        <p class="desc-proj">${project.description}</p>
        <div class="proj-meta" style="text-align: right;">
        <div class="open">
            <a href="${project.link}" class="open-proj">باز کردن پروژه</a>
          </div>
          <span>${addedDateShamsi}</span>
        </div>
      </section>
    `;
    projectList.appendChild(li);
  });
}

loadProjects();

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('.icon');

  const soundToggle = document.getElementById('sound-toggle');
  const soundIcon = soundToggle.querySelector('.icon');

  const bubbles = document.getElementById('bubbles-sound');

  const moonSVG = `<svg width="20" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.4599 22.75C12.2899 22.75 12.1199 22.75 11.9499 22.74C6.34995 22.49 1.66995 17.98 1.27995 12.48C0.939948 7.75999 3.66995 3.34999 8.06995 1.49999C9.31995 0.979992 9.97995 1.37999 10.2599 1.66999C10.5399 1.94999 10.9299 2.59999 10.4099 3.78999C9.94995 4.84999 9.71995 5.97999 9.72995 7.13999C9.74995 11.57 13.4299 15.33 17.9199 15.51C18.5699 15.54 19.2099 15.49 19.8299 15.38C21.1499 15.14 21.6999 15.67 21.9099 16.01C22.1199 16.35 22.3599 17.08 21.5599 18.16C19.4399 21.06 16.0699 22.75 12.4599 22.75Z"/></svg>`;

  const sunSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.25C8 19.25 4.75 16 4.75 12C4.75 8 8 4.75 12 4.75C16 4.75 19.25 8 19.25 12C19.25 16 16 19.25 12 19.25ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25Z" fill="#292D32"/>
<path d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z" fill="currentColor"/>
</svg>
`;

  const speakerSVG = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.55 20.59C11.76 20.59 10.89 20.31 10.02 19.76L7.1 17.93C6.9 17.81 6.67 17.74 6.44 17.74H5C2.58 17.74 1.25 16.41 1.25 13.99V9.99C1.25 7.57 2.58 6.24 5 6.24H6.43C6.66 6.24 6.89 6.17 7.09 6.05L10.01 4.22C11.47 3.31 12.89 3.14 14.01 3.76C15.13 4.38 15.74 5.67 15.74 7.4V16.57C15.74 18.29 15.12 19.59 14.01 20.21C13.57 20.47 13.07 20.59 12.55 20.59Z"/><path fill="currentColor" d="M18 16.75C17.84 16.75 17.69 16.7 17.55 16.6C17.22 16.35 17.15 15.88 17.4 15.55C18.97 13.46 18.97 10.54 17.4 8.45C17.15 8.12 17.22 7.65 17.55 7.4C17.88 7.15 18.35 7.22 18.6 7.55C20.56 10.17 20.56 13.83 18.6 16.45C18.45 16.65 18.23 16.75 18 16.75Z"/><path fill="currentColor" d="M19.83 19.25C19.67 19.25 19.52 19.2 19.38 19.1C19.05 18.85 18.98 18.38 19.23 18.05C21.9 14.49 21.9 9.51 19.23 5.95C18.98 5.62 19.05 5.15 19.38 4.9C19.71 4.65 20.18 4.72 20.43 5.05C23.5 9.14 23.5 14.86 20.43 18.95C20.29 19.15 20.06 19.25 19.83 19.25Z"/></svg>`;

  const mutedSVG = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.55 20.59C11.76 20.59 10.89 20.31 10.02 19.76L7.1 17.93C6.9 17.81 6.67 17.74 6.44 17.74H5C2.58 17.74 1.25 16.41 1.25 13.99V9.99C1.25 7.57 2.58 6.24 5 6.24H6.43C6.66 6.24 6.89 6.17 7.09 6.05L10.01 4.22C11.47 3.31 12.89 3.14 14.01 3.76C15.13 4.38 15.74 5.67 15.74 7.4V16.57C15.74 18.29 15.12 19.59 14.01 20.21C13.57 20.47 13.07 20.59 12.55 20.59Z"/><line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" stroke-width="2"/></svg>`;

  // بارگذاری اولیه از localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  const savedMuted = localStorage.getItem('muted') === 'true';

  // اعمال تم اولیه
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeIcon.innerHTML = sunSVG;
  } else {
    document.body.classList.remove('dark');
    themeIcon.innerHTML = moonSVG;
  }

  // اعمال MUTE اولیه
  function applyMute(muted) {
    document.querySelectorAll('audio, video').forEach(el => {
      try { el.muted = muted; } catch (e) { }
    });
    soundIcon.innerHTML = muted ? mutedSVG : speakerSVG;
    localStorage.setItem('muted', muted ? 'true' : 'false');
  }
  applyMute(savedMuted);

  // تابع کمکی برای پخش صدای UI (فقط زمانی که muted نیست)
  function playUiSound() {
    if (localStorage.getItem('muted') === 'true') return;
    if (!bubbles) return;
    bubbles.currentTime = 0;
    bubbles.play().catch(() => { /* ignore play blocked error */ });
  }

  // تغییر تم با کلیک
  themeToggle.addEventListener('click', () => {
    const nextDark = !document.body.classList.contains('dark');
    if (nextDark) {
      document.body.classList.add('dark');
      themeIcon.innerHTML = sunSVG;
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      themeIcon.innerHTML = moonSVG;
      localStorage.setItem('theme', 'light');
    }
    playUiSound();
  });

  // تغییر تم با Enter/Space
  themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); themeToggle.click(); }
  });

  // قطع / وصل صدا با کلیک
  soundToggle.addEventListener('click', () => {
    const currentlyMuted = localStorage.getItem('muted') === 'true';
    const willBeMuted = !currentlyMuted;
    if (willBeMuted) {
      // اول mute کن
      applyMute(true);
    } else {
      // اول unmute کن، بعد صدای تأیید رو پخش کن
      applyMute(false);
      playUiSound();
    }
  });

  // کیبورد برای soundToggle
  soundToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); soundToggle.click(); }
  });
});
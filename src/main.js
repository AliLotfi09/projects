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


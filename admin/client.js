const form = document.getElementById('projectForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = form.title.value.trim();
  const image = form.image.value.trim();
  const link = form.link.value.trim();

  if (!title || !image || !link) return;

  // درخواست POST به GitHub Actions
  try {
    const res = await fetch(
      'https://api.github.com/repos/Alilotfi09/projects/dispatches', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github+json',
          'Authorization': 'token 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'
        },
        body: JSON.stringify({
          event_type: 'add_project',
          client_payload: { title, image, link }
        })
      }
    );

    if (res.status === 204) {
      msg.textContent = 'پروژه با موفقیت اضافه شد ✅';
      form.reset();
    } else {
      msg.textContent = 'خطا در اضافه کردن پروژه ❌';
      console.error(await res.json());
    }
  } catch (err) {
    console.error(err);
    msg.textContent = 'خطا در ارتباط با سرور ❌';
  }
});

document.querySelectorAll('[data-target]').forEach(button => {
  button.addEventListener('click', () => {
    const group = button.dataset.group;
    const targetId = button.dataset.target;

    document.querySelectorAll(`.content-page[data-group="${group}"]`).forEach(page => {
      page.style.display = 'none';
    });

    document.getElementById(targetId).style.display = 'block';
  });
});
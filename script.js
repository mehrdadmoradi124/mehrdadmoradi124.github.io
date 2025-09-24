// Hamburger toggle + ESC/Backdrop handling + live year
const menuBtn = document.getElementById('menuToggle');
const nav = document.getElementById('siteNav');
const backdrop = document.getElementById('backdrop');

function openNav() {
  nav.classList.add('open');
  nav.setAttribute('aria-hidden', 'false');
  menuBtn.classList.add('is-open');
  menuBtn.setAttribute('aria-expanded', 'true');
  backdrop.hidden = false;
}
function closeNav() {
  nav.classList.remove('open');
  nav.setAttribute('aria-hidden', 'true');
  menuBtn.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  backdrop.hidden = true;
}

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.contains('open');
  open ? closeNav() : openNav();
});
backdrop?.addEventListener('click', closeNav);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

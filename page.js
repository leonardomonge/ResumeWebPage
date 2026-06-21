// Navbar scroll shadow
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Dropdown contacto
function toggleDropdown() {
  const dropdown = document.getElementById('contactDropdown');
  dropdown.classList.toggle('open');
}

document.addEventListener('click', (e) => {
  const wrapper = document.querySelector('.nav-contact-wrapper');
  if (!wrapper.contains(e.target)) {
    document.getElementById('contactDropdown').classList.remove('open');
  }
});

// Cambio de idioma
let currentLang = 'en';

// Recorre TODOS los elementos con data-i18n y les pone el texto que
// corresponda. Como ya no depende de posiciones (whyCards[0], etc.),
// agregar, quitar o reordenar divs no vuelve a romper la traducción.
// Si un elemento tiene data-i18n="miClave" pero "miClave" no existe
// en translations.js, se avisa en consola en vez de tronar la página.
function applyTranslations(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    } else {
      console.warn(`Falta la traducción "${key}" para el idioma "${lang}"`);
    }
  });
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  document.documentElement.lang = currentLang;

  const btn = document.getElementById('langBtn');
  btn.textContent = currentLang === 'en' ? 'ES' : 'EN';

  applyTranslations(currentLang);
}

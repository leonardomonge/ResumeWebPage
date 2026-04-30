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

function toggleLang() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  const t = translations[currentLang];
  const btn = document.getElementById('langBtn');

  btn.textContent = currentLang === 'en' ? 'ES' : 'EN';

  // Navbar
  document.querySelector('a[href="#about"]').textContent = t.navAbout;
  document.querySelector('a[href="#why"]').textContent = t.navWhy;
  document.querySelector('a[href="#projects"]').textContent = t.navProjects;
  document.querySelector('a[href="#experience"]').textContent = t.navExperience;
  document.querySelector('a[href="#education"]').textContent = t.navEducation;
  document.querySelector('a[href="#skills"]').textContent = t.navSkills;
  document.querySelector('.nav-contact').textContent = t.contactBtn;

  // About
  document.querySelector('.available-tag').textContent = t.availableTag;
  document.querySelector('#about h1').textContent = t.aboutTitle;
  document.querySelector('.about-desc').textContent = t.aboutDesc;

  // Why
  const whyCards = document.querySelectorAll('.why-card');
  document.querySelector('#why h2').textContent = t.whyTitle;
  whyCards[0].querySelector('h4').textContent = t.why1Title;
  whyCards[0].querySelector('p').textContent = t.why1Desc;
  whyCards[1].querySelector('h4').textContent = t.why2Title;
  whyCards[1].querySelector('p').textContent = t.why2Desc;
  whyCards[2].querySelector('h4').textContent = t.why3Title;
  whyCards[2].querySelector('p').textContent = t.why3Desc;
  whyCards[3].querySelector('h4').textContent = t.why4Title;
  whyCards[3].querySelector('p').textContent = t.why4Desc;
  whyCards[4].querySelector('h4').textContent = t.why5Title;
  whyCards[4].querySelector('p').textContent = t.why5Desc;
  whyCards[5].querySelector('h4').textContent = t.why6Title;
  whyCards[5].querySelector('p').textContent = t.why6Desc;

 // Projects
const projectCards = document.querySelectorAll('.project-card');
document.querySelector('#projects h2').textContent = t.projectsTitle;

// Project 1 - Digital logBook
projectCards[0].querySelector('h3').textContent = t.project1Title;
const p1Items = projectCards[0].querySelectorAll('li');
p1Items[0].textContent = t.project1Li1;
p1Items[1].textContent = t.project1Li2;
p1Items[2].textContent = t.project1Li3;
p1Items[3].textContent = t.project1Li4;
document.querySelector('.project1-desc2').textContent = t.project1Desc2;
document.querySelector('.project1-desc3').textContent = t.project1Desc3;

// Project 2 - Pokemon
projectCards[1].querySelector('h3').textContent = t.project2Title;
projectCards[1].querySelectorAll('p')[0].textContent = t.project2Desc;
projectCards[1].querySelectorAll('p')[1].textContent = t.project2Desc2;

  // Experience
  const expItems = document.querySelectorAll('.exp-item');
  document.querySelector('#experience h2').textContent = t.experienceTitle;
  
  // Grupo Dipo
  expItems[0].querySelector('h3').textContent = t.exp1Role;
  expItems[0].querySelector('.exp-meta').textContent = t.exp1Meta;
  const exp1Items = expItems[0].querySelectorAll('li');
  exp1Items[0].textContent = t.exp1Li1;
  exp1Items[1].textContent = t.exp1Li2;
  exp1Items[2].textContent = t.exp1Li3;
  exp1Items[3].textContent = t.exp1Li4;
  
  // Alteco
  expItems[1].querySelector('h3').textContent = t.exp2Role;
  expItems[1].querySelector('.exp-meta').textContent = t.exp2Meta;
  const exp2Items = expItems[1].querySelectorAll('li');
  exp2Items[0].textContent = t.exp2Li1;
  exp2Items[1].textContent = t.exp2Li2;

  // Education
  const eduItems = document.querySelectorAll('.edu-item');
  document.querySelector('#education h2').textContent = t.educationTitle;
  eduItems[0].querySelector('h3').textContent = t.edu1Title;
  eduItems[0].querySelector('.edu-meta').textContent = t.edu1Meta;
  eduItems[0].querySelectorAll('li')[0].textContent = t.edu1Item1;
  eduItems[0].querySelectorAll('li')[1].textContent = t.edu1Item2;
  eduItems[1].querySelector('h3').textContent = t.edu2Title;
  eduItems[1].querySelector('.edu-meta').textContent = t.edu2Meta;
  eduItems[1].querySelector('.edu-intro').textContent = t.edu2Intro;
  eduItems[1].querySelectorAll('li')[0].textContent = t.edu2Item1;
  eduItems[1].querySelectorAll('li')[1].textContent = t.edu2Item2;
  eduItems[1].querySelectorAll('li')[2].textContent = t.edu2Item3;
  eduItems[1].querySelectorAll('li')[3].textContent = t.edu2Item4;
  eduItems[1].querySelectorAll('li')[4].textContent = t.edu2Item5;
  eduItems[1].querySelectorAll('li')[5].textContent = t.edu2Item6;
  eduItems[1].querySelectorAll('li')[6].textContent = t.edu2Item7;
  eduItems[1].querySelector('.edu-outro').textContent = t.edu2Outro;
  eduItems[2].querySelector('h3').textContent = t.edu3Title;
  eduItems[2].querySelector('.edu-meta').textContent = t.edu3Meta;
  eduItems[2].querySelector('.edu-intro').textContent = t.edu3Intro;
  eduItems[2].querySelectorAll('li')[0].textContent = t.edu3Item1;
  eduItems[3].querySelector('h3').textContent = t.edu4Title;
  eduItems[3].querySelector('.edu-meta').textContent = t.edu4Meta;

  // Skills
  const skillGroups = document.querySelectorAll('.skill-group');
  document.querySelector('#skills h2').textContent = t.skillsTitle;
  skillGroups[0].querySelector('h4').textContent = t.skillLang;
  skillGroups[1].querySelector('h4').textContent = t.skillFrameworks;
  skillGroups[2].querySelector('h4').textContent = t.skillDB;
  skillGroups[3].querySelector('h4').textContent = t.skillTools;

  // Footer
  document.querySelector('footer p').textContent = t.footer;
}

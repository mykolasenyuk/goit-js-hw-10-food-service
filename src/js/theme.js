const themeSwitch = document.querySelector('.theme-switch__toggle');
console.log(themeSwitch)
themeSwitch.addEventListener('click',onThemeSwitch)
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// 
const savedTheme = localStorage.getItem('theme');
const themeOn = JSON.parse(localStorage.getItem('swiched'));
themeSwitch.checked = themeOn;

//  Зміна теми при кліку на повзунок і зберігання її в local storage
function onThemeSwitch(e) {
   document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);
  const switchOn = e.target.checked

  localStorage.setItem('swiched', switchOn)
  if (document.body.classList.contains(Theme.LIGHT)) {
    localStorage.setItem('theme',Theme.LIGHT);
  }
  if (document.body.classList.contains(Theme.DARK)) {
    localStorage.setItem('theme',Theme.DARK);
  }
};

// Збережена тема при загрузці сторінки

function chosenTheme() {
  if (savedTheme) { document.body.classList.add(savedTheme) }
  else{document.body.classList.add(Theme.LIGHT)}
};
chosenTheme()


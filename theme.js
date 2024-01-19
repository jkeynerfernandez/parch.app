const theme = document.getElementById("change-theme");
const body = document.getElementById("body-html");

console.log(theme);
theme.addEventListener('change', () => {
  const themeChange = theme.value;
  console.log(themeChange)
  if (themeChange == "white") {
    body.classList.remove('dark-theme');
    body.classList.add('white-theme');
  }else {
    body.classList.remove('white-theme');
    body.classList.add('dark-theme');
  }
})
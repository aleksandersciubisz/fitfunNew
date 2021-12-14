// Scroll Up icon
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 250) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//nav toggler
document.getElementById('nav1').onclick = function () {
  document.getElementById('check').checked = false
}

document.getElementById('nav2').onclick = function () {
  document.getElementById('check').checked = false
}

document.getElementById('nav3').onclick = function () {
  document.getElementById('check').checked = false
}

document.getElementById('nav4').onclick = function () {
  document.getElementById('check').checked = false
}

document.getElementById('nav5').onclick = function () {
  document.getElementById('check').checked = false
}

document.getElementById('nav6').onclick = function () {
  document.getElementById('check').checked = false
}

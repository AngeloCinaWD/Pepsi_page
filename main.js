function imgSlider(nameImg) {
  document.querySelector('.pepsi').src = nameImg;
}

function changeBGcolor(color) {
  const sec = document.querySelector('.sec');
  sec.style.background = color;
}

function menuToggle() {
  const toggleMenu = document.querySelector('.toggleMenu');
  const navigation = document.querySelector('.navigation');
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
}

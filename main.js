// function imgSlider(nameImg) {
//   document.querySelector('.pepsi').src = nameImg;
// }
//
// function changeBGcolor(color) {
//   const sec = document.querySelector('.sec');
//   sec.style.background = color;
// }

function menuToggle() {
  const toggleMenu = document.querySelector('.toggleMenu');
  const navigation = document.querySelector('.navigation');
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
}

const changeColor = document.querySelectorAll('.changeColor');
const pepsiImg = document.querySelector('.pepsi');
const bgColor = document.querySelector('.sec');


for (var i = 0; i < changeColor.length; i++) {
  let imgBG = changeColor[i].id;

  changeColor[i].addEventListener('click', function(){
    if (imgBG === 'list01') {
      pepsiImg.src = 'img/pepsi001.png';
      bgColor.style.background = '#0062be';
    } else if (imgBG === 'list02') {
      pepsiImg.src = 'img/pepsi002.png';
      bgColor.style.background = '#e60c2c';
    } else if (imgBG === 'list03') {
      pepsiImg.src = 'img/pepsi003.png';
      bgColor.style.background = '#1e1e1e';
    }
  });
}

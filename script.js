TypeHangul.type('.typing-text');

var loadingArea = document.querySelector("#loading");
var loadingLogo = document.querySelector(".logo-area");

loadingLogo.addEventListener('click', function() {
  var mainC = document.querySelector('.mainC');
  var subC = document.querySelector('.subC');
  console.log(`。　♡ 。　　♡。　　♡
  ♡。　＼　　｜　　／。　♡
  　  Welcome to EL 21
  ♡。　／　　｜　　＼。　♡
  。　♡。 　　。　　♡。`);

  mainC.classList.add('screen-animation');
  setTimeout(() => {
    loadingArea.style.display = 'none';
    subC.classList.add('screen-animation');
  }, 500);
  setTimeout(() => {
    mainC.style.opacity = 0;
    subC.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    mainC.style.display = 'none';
    subC.style.display = 'none';
  }, 1500);
})
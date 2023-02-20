console.log(`%c
。　♡ 。　　♡。　　♡          
♡。　＼　　｜　　／。　♡
　  Welcome to EL 21
♡。　／　　｜　　＼。　♡
。　♡。 　　。　　♡。

`, "color: hotpink; font-size: 18px;");
console.log(`
／￣￣￣￣￣￣￣￣￣￣￣￣￣＼
  코드 안 뜯어 봤음 좋겠다..
＼＿＿＿＿＿＿＿＿＿＿＿＿＿／
　　ｏ
　　 。
　　　｡
　　∧＿∧
　 (*　･ω･)
＿(__つ/￣￣￣/_
　　＼/　　　/
`);
console.log(`
. . *
* * . * . * . *
. * . * . .
. . *
* * . * . * *
. * .  * . .    21기 회장 안서영이.. 만듦...
* * . * . * . *  Do It Myself..
________________🚶🏻‍♂️_________

`);


// accordion menu
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', event => {
    const accordionContent = header.nextElementSibling;

    header.classList.toggle('active');
    accordionContent.classList.toggle('active');

    if (accordionContent.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});



// intro animation
const cloud = document.querySelectorAll('.cloud');
const logo = document.querySelector('.logo-area');

cloud[0].classList.add('active');
setTimeout(() => {
  cloud[1].classList.add('active');
}, 500);
setTimeout(() => {
  logo.classList.add('active');
}, 1000)


// scroll animation

const bubble = document.querySelectorAll('.bubble');
const bubbleTop = [];
const bubbleBotom = [];
let currentBubble = null;

function updateCurrentBubble() {
  var currentScroll = window.scrollY + 600;

  for (var i = 0; i < bubble.length; i++) {
    const content = bubble[i];
    bubbleTop[i] = content.offsetTop;
    bubbleBotom[i] = content.offsetTop + content.offsetHeight;

    if (currentScroll >= bubbleTop[i] && currentScroll < bubbleBotom[i] ) {
      currentBubble = bubble[i];
      break;
  }
}}

function handleScroll() {
  window.requestAnimationFrame(() => {
    updateCurrentBubble();

    if (currentBubble) {
      currentBubble.style.opacity = 1;
    }
  })
}

window.addEventListener('scroll', handleScroll);
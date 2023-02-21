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
}
}

function handleScroll(event) {
  window.requestAnimationFrame(() => {
    updateCurrentBubble();

    if (currentBubble) {
      currentBubble.classList.add('active');
    }
  })
}

window.addEventListener('scroll', handleScroll);

function shareMessage() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: 'EL 21기 지금 지원하기!',
      description: `컴퓨터소프트웨어공학과 전공 동아리 EL을 소개합니다! 많은 지원 바랍니다!`,
      imageUrl:
        'https://asy047.github.io/introduce_el/img/el_logo_png.png',
      link: {
        mobileWebUrl: 'https://graceful-babka-40b815.netlify.app/',
        webUrl: 'https://graceful-babka-40b815.netlify.app/',
      },
    },
    buttons: [
      {
        title: '지원하러 가기',
        link: {
          mobileWebUrl: 'https://forms.gle/KY2UXcTnbz6oWyXC6',
          webUrl: 'https://forms.gle/KY2UXcTnbz6oWyXC6',
        },
      },
      {
        title: '소개 페이지 바로가기',
        link: {
          mobileWebUrl: 'https://el21.netlify.app',
          webUrl: 'https://el21.netlify.app',
        },
      }
    ],
  });
}

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

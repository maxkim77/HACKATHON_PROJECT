const $ = (selector) => document.querySelector(selector);

// 메뉴 버튼
//열기
$(".menu-open-btn").addEventListener('click', () => {
  document.body.classList.add("non-scroll");
  $(".gnb").classList.add("opened");
  $(".menu-close-btn").classList.add("opened");
  $("#backdrop").style.display = 'block';
  document.body.classList.add("non-scroll");
});
//닫기
$('.menu-close-btn').addEventListener('click', () => {
  $("#backdrop").style.display = 'none';
  $(".gnb").classList.remove("opened");
  $(".menu-close-btn").classList.remove("opened");
  document.body.classList.remove("non-scroll");
});

// const makerBtn = $('#maker-btn');
const chatBtn = $('#chat-btn');

// makerBtn.addEventListener('click', () => location.href = './maker/')
chatBtn.addEventListener('click', () => location.href = './another/index.html')
// 헤더
const header = document.querySelector('header');
const gnb = document.querySelector('.gnb');
const mains = document.querySelectorAll('.gnb>li>a')
const subs = document.querySelectorAll('.gnb>li .sub');

gnb.addEventListener('mouseenter', () => {
    subs.forEach(sub => {
        sub.style.height = sub.scrollHeight + 'px';
        mains.forEach(main => main.classList.add('active'));
    });
    header.classList.add('active');
});

gnb.addEventListener('mouseleave', () => {
    subs.forEach(sub => {
        sub.style.height = 0;
        mains.forEach(main => main.classList.remove('active'));
    });
    header.classList.remove('active');
});



// 섹션1: 검색
window.addEventListener('DOMContentLoaded', () => {
  const bannerElements = document.querySelectorAll('#search .transition-box>*');

  bannerElements.forEach(el => {
    el.style.transform = 'translateY(0px)';
    el.style.opacity = 1;
  })

})


const inputText = "관심있는 ETF 상품명이나 코드를 입력해보세요.";
const typingSpeed = 110;
const deletingSpeed = 70;
const delay = 1200;
const restartDelay = 1000;

let charIndex = 0;
let isDeleting = false;
let timer;

function typing() {
  const typingInput = document.querySelector('#search .search-bar');

  if (!isDeleting) {
    charIndex++;
  } else {
    charIndex--;
  }

  typingInput.placeholder = inputText.substring(0, charIndex);

  // 타이핑 완료 → 삭제 시작 전 딜레이
  if (!isDeleting && charIndex === inputText.length) {
    timer = setTimeout(() => {
      isDeleting = true;
      typing();
    }, delay);
    return;
  }

  // 삭제 완료 → 다시 타이핑 시작 전 딜레이
  if (isDeleting && charIndex === 0) {
    timer = setTimeout(() => {
      isDeleting = false;
      typing();
    }, restartDelay);
    return;
  }

  timer = setTimeout(typing, isDeleting ? deletingSpeed : typingSpeed);
}

typing();



// 섹션3: 추천 ETF
const recommendBtn = document.querySelectorAll('#recommend .left .tab-btn li')
const recommendCont = document.querySelectorAll('#recommend .right .etf-list')
const bookmark = document.querySelectorAll('#recommend .right .etf-list .bookmark');

for (let i = 0; i < recommendBtn.length; i++) {
  recommendBtn[i].addEventListener('click', function() {
    recommendBtn.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    recommendCont.forEach(cont => cont.classList.remove('active'));
    recommendCont[i].classList.add('active');
  });
}

// bookmark.forEach(function(img) {
  // img.addEventListener('mouseenter', function() {
  //   this.src = 'images/bookmark-full.png';
  // });
  // img.addEventListener('mouseleave', function() {
  //   this.src = 'images/bookmark-empty.png';
  // });
//   img.addEventListener('click', function() {
//     this.src = 'images/bookmark-full.png';
//   })
// });

const bookmarks = document.querySelectorAll(
  '#recommend .right .etf-list .bookmark'
);

bookmarks.forEach(star => {
  star.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    const isActive = star.classList.contains('fa-solid');

    if (isActive) {
      star.classList.remove('fa-solid', 'current');
      star.classList.add('fa-regular');
    } else {
      star.classList.remove('fa-regular');
      star.classList.add('fa-solid', 'current');
    }
  });
});



// 섹션4: 뉴스 swiper.js
const newsSwiper = new Swiper('#news .swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    prevEl: '.swiper-btns .prev',
    nextEl: '.swiper-btns .next'
  },
  speed: 700,
  autoplay: {
    delay: 2000
  }
  // speed: 5000,
  
});

// chat area toggle
document.addEventListener('DOMContentLoaded', () => {
  const botIcon = document.querySelector('.bot-area > .bot-icon');
  const chatbotWrap = document.querySelector('.chatbot-wrap');
  const botArea = document.querySelector('.bot-area');

  if (!botIcon || !chatbotWrap || !botArea) return;

  botIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    chatbotWrap.classList.toggle('on');
  });

  chatbotWrap.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.addEventListener('click', (e) => {
    // 열려있지 않으면 아무것도 안 함
    if (!chatbotWrap.classList.contains('on')) return;

    // bot-area 밖을 클릭했으면 닫기
    if (!botArea.contains(e.target)) {
      chatbotWrap.classList.remove('on');
    }
  });

});

// chat-search area
console.log('챗봇 JS 연결됨');

/* [1] 요소 선택 */
const chatArea = document.querySelector('.chat-log');
const input = document.querySelector('.chat-input input');
const sendBtn = document.querySelector('.chat-input button');
const quickBtns = document.querySelectorAll('.quick-buttons button');

/* [2] 말풍선 생성 함수 */
function createBubble(text, type = 'bot') {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble', type);
  bubble.innerHTML = text;
  chatArea.appendChild(bubble);
  scrollToBottom();
}

/* [3] 자동 스크롤 */
function scrollToBottom() {
  chatArea.scrollTop = chatArea.scrollHeight;
}

/* [4] 사용자 입력 전송 */
function sendUserMessage() {
  const text = input.value.trim();
  if (!text) return;

  createBubble(text, 'user');
  input.value = '';

  setTimeout(() => {
    createBubble('질문 감사합니다 😊<br>곧 도움을 드릴게요!');
  }, 600);
}

/* [5] 전송 버튼 클릭 */
sendBtn.addEventListener('click', sendUserMessage);

/* [6] 엔터 키 전송 */
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendUserMessage();
});

function resetChat() {
  chatArea.innerHTML = '';   // chat-log 비우기
  input.value = '';          // 입력창 비우기(선택)
  chatArea.scrollTop = 0;    // 스크롤 위로(선택)
}

/* [7] 퀵 버튼 클릭 처리 */
quickBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // reset 버튼이면 대화 초기화 후 종료
    if (btn.dataset.action === 'reset') {
      resetChat();
      return;
    }

    const question = btn.textContent.trim();
    const answer = btn.dataset.answer;

    // 혹시 answer 없는 버튼이면 아무것도 안 함
    if (!answer) return;

    createBubble(question, 'user');

    setTimeout(() => {
      createBubble(answer, 'bot');
    }, 500);
  });
});
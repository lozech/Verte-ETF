// 헤더
const header = document.querySelector('header');
const gnb = document.querySelector('.gnb');
const subs = document.querySelectorAll('.gnb>li .sub');
const headerTabs = document.querySelectorAll('.header-tab li a');

headerTabs.forEach(tab => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();

    headerTabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});

gnb.addEventListener('mouseenter', () => {
    subs.forEach(sub => {
        sub.style.height = sub.scrollHeight + 'px';
    });
    header.classList.add('active');
});

gnb.addEventListener('mouseleave', () => {
    subs.forEach(sub => {
        sub.style.height = 0;
    });
    header.classList.remove('active');
});


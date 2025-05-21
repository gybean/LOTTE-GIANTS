$(function () {
  //aos 스크롤 애니메이션
  AOS.init();



  //헤더 2차메뉴
  //싱글드롭다운
  $('.gnb>li').mouseenter(function () {
    $(this).find('.depth-02').stop().slideDown(300);
  });
  $('.gnb>li').mouseleave(function () {
    $(this).find('.depth-02').stop().slideUp(300);
  });



  //헤더
  //햄버거메뉴 아코디언
  $('.gnb_mobile .depth-01').click(function(){
    $(this).siblings('.depth-02').slideToggle();
    $(this).toggleClass('active');
  });

  //버튼클릭 이벤트
  $('.header .left_sns .mobile').click(function(){
    $('.nav_mobile').animate({
      'left' : '0'
    }, 700);
  });
  $('.header .close_btn').click(function(){
    $('.nav_mobile').animate({
      'left' : '-100%'
    }, 700);
  });



  //section-01
  //가로스크롤
  let sec01ScrollX = document.querySelector('.section-01 .box_wrap')

  let isDown = false;
  let startX;
  let scrollLeft;

  sec01ScrollX.addEventListener('mousedown', (e) => {
    isDown = true;
    sec01ScrollX.classList.add('active');
    startX = e.pageX - sec01ScrollX.offsetLeft;
    scrollLeft = sec01ScrollX.scrollLeft;
  });

  sec01ScrollX.addEventListener('mouseleave', () => {
    isDown = false;
    sec01ScrollX.classList.remove('active');
  });

  sec01ScrollX.addEventListener('mouseup', () => {
    isDown = false;
    sec01ScrollX.classList.remove('active');
  });

  sec01ScrollX.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sec01ScrollX.offsetLeft;
    const walk = (x - startX) * 1.5; // 스크롤 속도 조절
    sec01ScrollX.scrollLeft = scrollLeft - walk;
  });

  let touchStartX = 0;
  let touchScrollLeft = 0;

  sec01ScrollX.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = sec01ScrollX.scrollLeft;
  });

  sec01ScrollX.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 1.5;
    sec01ScrollX.scrollLeft = touchScrollLeft - walk;
  });



  //section-02
  //스와이퍼 슬라이드 per view
  var swiper = new Swiper(".section02Swiper", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 12,
    speed: 700,
    breakpoints: {
      360: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      /* 768: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 20,
      }, */
      1024: {
        slidesPerView: 5,
        slidesPerGroup: 4,
        spaceBetween: 12,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        updateCustomPagination(this);
      },
      slideChange: function () {
        updateCustomPagination(this);
      }
    },
  });

  function updateCustomPagination(swiperInstance) {
    const totalPages = Math.ceil(swiperInstance.slides.length / swiperInstance.params.slidesPerGroup) - 1;
    const currentPage = Math.floor(swiperInstance.activeIndex / swiperInstance.params.slidesPerGroup) + 1;

    // jQuery로 페이지 텍스트 업데이트
    $('.current-page').text(currentPage);
    $('.total-pages').text(totalPages);
  };



  //탑버튼 위치
  //부드럽게 올라가기
  let footer = document.querySelector('.footer');
  let footerTop = footer.offsetTop;
  let windowHeight = window.innerHeight;
  let topBtn = document.querySelector('.footer .top');
  let section01 = document.querySelector('.section-01');
  let section01Top = section01.offsetTop;

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    console.log(footerTop);
    console.log(windowHeight + scrollTop);

    if(scrollTop >= section01Top) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    });
  });



});
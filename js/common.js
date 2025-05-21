$(function(){
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
$(function(){
    //헤더 2차메뉴
    //싱글드롭다운
    $('.gnb>li').mouseenter(function(){
        $(this).find('.depth-02').stop().slideDown(300);
    });
    $('.gnb>li').mouseleave(function(){
        $(this).find('.depth-02').stop().slideUp(300);
    });



    //section-02
    //스와이퍼 슬라이드 per view
    var swiper = new Swiper(".section02Swiper", {
      slidesPerView: 5,
      slidesPerGroup: 4,
      spaceBetween: 12,
      speed: 700,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        init: function(){
          updateCustomPagination(this);
        },
        slideChange: function(){
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



});
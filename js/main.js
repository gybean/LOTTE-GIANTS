$(function(){
    //헤더 2차메뉴
    //싱글드롭다운
    $('.gnb>li').mouseenter(function(){
        $(this).find('.depth-02').stop().slideDown(300);
    });
    $('.gnb>li').mouseleave(function(){
        $(this).find('.depth-02').stop().slideUp(300);
    });
});
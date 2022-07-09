$(function(){
$(window).scroll(function(){
 const wHeight=$(window).height();
 const scrollAmount=$(window).scrollTop();
 $('.scrollanime').each(function () {
    const targetPosition = $(this).offset().top;
    if(scrollAmount > targetPosition - wHeight + 60) {
        $(this).addClass("fadeInDown");
    }
});

});



$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
      $(".top-wrapper,.profile-wrapper,.skills-wrapper,.service-wrapper,.works-wrapper,.footer").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
      $(".top-wrapper,.profile-wrapper,skills-wrapper,.service-wrapper,.works-wrapper,.footer").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去

  });


  $('portfolio').hover(
      function(){
          

      },
      function(){

      }
  );

});
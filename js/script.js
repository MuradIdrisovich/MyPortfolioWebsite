// const browserSync = require("browser-sync");

const burger = document.querySelector('.burger'),
      cross = document.querySelector('.menu__cross'),
      menu = document.querySelector('.menu'),
      menuOverlay = document.querySelector('.menu__overlay'),
      menuOverlayActive = document.querySelector('.menu__overlay'),
      sidePanel = document.querySelector('.sidepanel');

burger.addEventListener('click', () => {
    menu.classList.add('active'),
    menuOverlay.classList.add('active'),
    sidePanel.classList.add('active');
});

cross.addEventListener('click', () => {
    menu.classList.remove('active'),
    menuOverlay.classList.remove('active'),
    sidePanel.classList.remove('active');
    
});

menuOverlayActive.addEventListener('click', () => {
    menuOverlayActive.classList.remove('active');
    menu.classList.remove('active'),
    menuOverlay.classList.remove('active'),
    sidePanel.classList.remove('active');
});

const percentage = document.querySelectorAll('.rating__item_percentage'),
           level = document.querySelectorAll('.rating__item_level');

percentage.forEach( (item , i) => {
    level[i].style.width = item.innerHTML;
});

  // Smooth scroll and pageup

  $(window).scroll(function(){
    if ($(this).scrollTop() > 930) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  // $("a[href^='#']").click(function(){
  //   const _href = $(this).attr("href");
  //   $("html, body").animate({scrollTop: $(_href).offset().bottom+"0px"});
  //   return false;
  // });








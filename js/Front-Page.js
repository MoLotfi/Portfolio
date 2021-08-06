$(window).on('load', function(){
  console.log(45);
  $('.preload').remove();
$(body).css("overflow", "visible");


});
$(window).resize(function(){

  var x = $('.mid-pic').width();


  $('.mid-pic').css("height", x);
  
  
$('.mid-pic').css("right", $(window).width()/2- x/2);




$('.con-about').css('top', $('#particles-js').height());
$('.con-skills').css('top', $('.con-about').outerHeight(true) + $('.con-about').offset().top + 40);
$('.con-projects').css('top', $('.con-skills').outerHeight(true) + $('.con-skills').offset().top + 40);

$('.footer').css('top', 100%-$('.footer').height());
$('.shadow').css('width', $('.proj-1').width());
$('.con-contact').css('top', $('.con-projects').outerHeight(true) + $('.con-projects').offset().top + 40);
$('.footer').css('top', $('.con-contact').outerHeight(true) + $('.con-contact').offset().top);

$('#shadow-1').width($('.proj-1').width());
$('#shadow-2').width($('.proj-2').width());


$('.proj-1').height($('.proj-1').width());
$('.proj-2').height($('.proj-2').width());


$('#shadow-1').height($('.proj-1').height());
$('#shadow-2').height($('.proj-2').height());

});

$('#shadow-1').width($('.proj-1').width());
$('#shadow-2').width($('.proj-2').width());

$('.proj-1').height($('.proj-1').width());
$('.proj-2').height($('.proj-2').width());

$('#shadow-1').height($('.proj-1').height());
$('#shadow-2').height($('.proj-2').height());
    var x = $('.mid-pic').width();

    $('.mid-pic').css("height", x);
    
    
    $('.mid-pic').css("right", $(window).width()/2 - x/2);
  $('.down-btn').click(function(){

    $('html, body').animate({
        scrollTop: $('#particles-js').offset().top + $('#particles-js').height()
    }, 900);

    $('body').css("overflow", "visible")

  });

  $('.con-about').css('top', $('#particles-js').height());
  $('.con-skills').css('top', $('.con-about').outerHeight(true) + $('.con-about').offset().top + 40);
  $('.con-projects').css('top', $('.con-skills').outerHeight(true) + $('.con-skills').offset().top + 40);
  $('.con-contact').css('top', $('.con-projects').outerHeight(true) + $('.con-projects').offset().top + 40);
  $('.footer').css('top', $('.con-contact').outerHeight(true) + $('.con-contact').offset().top);
  $('.shadow-1').css('width', $('.proj-1').width());
  $('.proj-1').mouseenter(function(){
      $('.shadow-1').css('visibility', 'visible');

      $('.proj-view-1').css('visibility', 'visible');

  });

  $('.proj-1').mouseleave(function(){
    $('.shadow-1').css('visibility', 'hidden');
    $('.proj-view-1').css('visibility', 'hidden');

});
$('.shadow-2').css('width', $('.proj-1').width());
$('.proj-2').mouseenter(function(){
  $('.shadow-2').css('visibility', 'visible');

  $('.proj-view-2').css('visibility', 'visible');

});

$('.proj-2').mouseleave(function(){
$('.shadow-2').css('visibility', 'hidden');
$('.proj-view-2').css('visibility', 'hidden');

});



  var typed = new Typed('.type', {

    strings: [ ' Mohamed <span class="g-color"> Lotfi </span>' , ' a Full Stack <span class="g-color"> web </span> developer'],
typeSpeed: 80,
    loop: true,
    backspeed: 100

});

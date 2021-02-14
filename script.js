var elementTop = $('.nav').offset().top;

$(window).scroll(function(){
if( $(window).scrollTop() >= elementTop){
    $('body').addClass('nav_fixed');
}else{
    $('body').removeClass('nave_fixed');
}
});






document.querySelector('h1').addEventListener('click', ()=> {
    document.body.style.background = 'pink';
})
 $(function(){

    vitricuaedu =$('#khoiedu').offset().top;

    $('.xuong,.kn').click(function(){
        $('body, html').animate({scrollTop:vitricuaedu}, 1500);
    })
})  
 
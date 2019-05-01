 $(function(){

    vitricuaedu =$('#khoiedu').offset().top;

    $('.xuong,.kn').click(function(){
        $('body, html').animate({scrollTop:vitricuaedu}, 1500);
    })

    $('.cm').click(function(){
        $('body, html').animate({scrollTop:$('#phanhoi').offset().top}, 1500);
    })
})  
 
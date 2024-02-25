$(document).ready(function(){
    $('.carousel').carousel({
interval:6000
    })

$(window).scroll(function(){
if(($(this).scrollTop() >=700)){
    $('.up').fadeIn(400)
}else{
    $('.up').fadeOut(400)

}
})

$('.up').click(function(){
    $(' html,body').animate({
        scrollTop:0
    },1000)
    })

    $('.option-box .cog').click(function () {
           $('.option-box .color-option').fadeToggle()
    })
    
     var colorLi=$('.color-option ul li');
     colorLi
    .eq(0).css('backgroundColor','#E60024').end()
  .eq(1).css('backgroundColor',' #335d2d').end()
   .eq(2).css('backgroundColor','#005086').end()
   .eq(3).css('backgroundColor','#f6830f');

   colorLi.click(function(){
       $('link[href*="theme"]').attr('href',$(this).attr('data-value'))
   })
})

$(window).on('load',function(){
    $('.sk-cube-grid').fadeOut(1000,
        function(){
            $('body').css('overflow','auto')

            $(this).parent().fadeOut(1000,
                function(){

                    $(this).remove()
                })

        })
     
      

        $("html").niceScroll({
        cursorwidth: '15px',
        autohidemode: false,
         zindex: 999,
         cursorcolor:'#E60024'
       });
       
$('.Message div:first').css('display','block')

$('.Message h4').click(function(){
   
    $(this).next().slideToggle(500);
    $('.Message div').not($(this).next()).slideUp(500)
})
})



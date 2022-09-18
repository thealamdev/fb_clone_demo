var down_arrow = document.querySelector('.public_down_arrow i')
var edit_box = document.querySelector('.post_edit_box')


// edit box show and hide:
down_arrow.addEventListener("click", function(){
    edit_box.classList.toggle('editbox_active')
})

  //  Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 500){
        $('#header').addClass('my_stick_bg');
    }
    else {
         $('#header').removeClass('my_stick_bg');
    }
    });
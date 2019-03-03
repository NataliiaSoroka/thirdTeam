$('.menu-icon').on('click',function(event){
    console.log($("main"));
    if(event.target.style.right === "410px"){
        $('.header-nav').animate({'right':'-410px'},"slow");
        $('.menu-icon').animate({'right':'0px'},"slow");
    }else{
        $('.header-nav').animate({'right':'0px'},"slow");
        $('.menu-icon').animate({'right': '410px'},"slow");
    }
    })
$(function(){

    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown()
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp()
    })

    //슬라이드
    function slide(){
        $(".slide ul").animate({left:"-800px"},1000,function(){
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left:0})
        })
    }
    setInterval(slide, 2000)

    //팝업
    $(".pp").click(function(){
        $(".popup").show()
        return false;
    })
    $("button").click(function(){
        $(".popup").hide()
    })
})
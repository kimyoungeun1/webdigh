$(function(){

    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown()
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp()
    })

    //슬라이드
    var i = 0
    function slide(){
        if (i<2) {
            i++;
        } else {
            i = 0
        }
        $(".slide ul li").fadeOut()
        $(".slide ul li").eq(i).fadeIn()
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
$(document).ready(function(){

    //팝업
    $(".btn_open").click(function(){
        $(".popup").addClass("on")
    })
    //팝업닫기
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })
    //자동슬라이드
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateY(${-33.333*count}%)`)
    },3000)
    //탭메뉴
    $(".tab_menu>dt").click(function(){
        $(".tab_menu>dt").removeClass("on")
        $(this).addClass("on")
    })
})
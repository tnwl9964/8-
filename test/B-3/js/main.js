$(document).reday(function(){
    //슬라이드기능
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateX(${-33.333*count}%)`)
    },2500)

    //탭메뉴
    $(".tab_menu>dt").click(function(){
        $("tab_menu>dt").removeClass("on")
        $(this).addClass("on")
    })

    //팝업
    $(".btn_open").click(function(){
        $(".popup").addClass("on")
    })

    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })


})
$(document).ready(function(){

    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2500)

    $(".tab_menu>dt").click(function(){
        $(".tab_menu>dt").removeClass("on")
        $(this).addClass("on")
    })

    $(".btn_close").click(function(){
        $(".popup").addClass("on")
    })
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

})
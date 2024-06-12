$(document).ready(function(){

    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateY(${-33.333*count}%)`)
    },2500)

    $(".btn_open").click(function(){
        $(".popup").addClass("on")
    })
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    $(".tab_menu>dt").click(function(){
        $(".tab_menu>dt").removeClass("on")
        $(this).addClass("on")
    })

})
$(document).ready(function(){

    let count = 0
    let timer

    $("#btn_play").click(function(){
        clearInterval(timer)
        timer = setInterval(function(){
            count++
            $(".box").css("transform",`rotate(${count}deg)`)
        },1000)
    })
    $("#btn_stop").click(function(){
        clearInterval(timer)
    })

})
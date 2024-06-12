$(document).ready(function(){
    $(".btn1").click(function(){
        //클릭했을 대 실행될 소스코드
        $(".banner").css("color","red")
    })

    $(".btn2").click(function(){
        $(".banner").css("color","green")
    })

    $(".btn3").click(function(){
        $(".banner").css("color","blue")
    })

    $(".btn4").click(function(){
        let red = Math.random()*255
        let green = Math.random()*255
        let blue = Math.random()*255
        $(".banner").css("color",`rgb(${red},${green},${blue})`)
    })

    $(".btn5").click(function(){
        $(".banner").addClass("on")
        state = true
    })

    $(".btn6").click(function(){
        $(".banner").removeClass("on")
        state = false
    })
    

    let state = false
    $(".btn7").click(function(){
        if(state==false){
            $(".banner").addClass("on")
            state = true
        }else{
            $(".banner").removeClass("on")
            state = false
        }
    }) 
})
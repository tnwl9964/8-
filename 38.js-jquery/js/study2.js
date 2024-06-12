$(document).ready(function(){
    //문서가 끝까지 읽혀진 뒤 샐행되는 고그코드
    $("h1")
    $("h1#a")
    $(".b")

    $(".c").css("color","red")

    // $(".d").get(0).style.color="blue"

    // let atag = document.querySelector(".naverlink")
    // atag.getAttribute("href")
    // alert(href1)
    let href2 = $(".naverlink").attr("href")
    // alert(href2)
    $(".naverlink").attr("href","https://www.daum.net/")

    let text1 = $(".text").text()
    // alert(text1)
    $(".text").text("<i>새로운 내용</i>")
    $(".text").html("<i>새로운 내용</i>")

    $(".mom").children().css("border-bottom","1px solid black")
    $(".enom").parent().css("border","1px solid blue")
    $(".enom").prev().css("background","pink")
    $(".enom").next().css("background","orange")
    $(".enom").next().next().css("background","gray")

    $(".notice>li").css("color","red")
    $(".notice>li").eq(2).css("border","1px solid red")

    $(".box").addClass("on")
    $(".box").removeClass("on")
})

     
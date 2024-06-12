window.onload = function(){
    //문서가 다 잃혀진 다음 실행되는 소스코드

    let  btn_next = document.querySelector(".btn_next")
    let  btn_prev = document.querySelector(".btn_prev")
    let slider = document.querySelector(".train")
    let count = 0
    //다음버튼
    btn_next.addEventListener("click",function(){
        count++
        if(count>2){count=2}
        slider.style.transform = `translateX(${-33.333*count}%)`
    })
    //이전버튼
    btn_prev.addEventListener("click",function(){
        count--
        if(count<0){count=0}
        slider.style.transform = `translateX(${-33.333*count}%)`
    })
}


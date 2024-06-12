window.onload = function(){
    //메인배너 슬라이드 기능
    let slider = document.querySelector(".main_train")
    let main_btn_next = document.querySelector(".main_btn_next")
    let main_btn_prev = document.querySelector(".main_btn_prev")
    let main_cur_slide = document.querySelector(".main_cur_slide")
    let count = 0

    //다음버튼
    main_btn_next.addEventListener("click",function(){
        count++
        if(count>1){count=1}
        slider.style.transform = `translateX(${-50*count}%)`
        main_cur_slide.innerHTML = count+1
    })
    //이전버튼
    main_btn_prev.addEventListener("click",function(){
        count--
        if(count<0){count=0}
        slider.style.transform = `translateX(${-50*count}%)`
        main_cur_slide.innerHTML = count+1
    })

    //브랜드서포트 슬라이드 기능
    let support_train = document.querySelector(".support_train")
    let btn_sup_next = document.querySelector(".btn_sup_next")
    let btn_sup_prev = document.querySelector(".btn_sup_prev")
    let sup_cur_slide = document.querySelector(".sup_cur_slide")
    let sup_count = 0
    //다음버튼
    btn_sup_next.addEventListener("click",function(){
        sup_count++
        if(sup_count>3){sup_count=3}
        support_train.style.transform = `translateX(${-25*sup_count}%)`
        sup_cur_slide.innerHTML = sup_count+1
    })
    //이전버튼
    btn_sup_prev.addEventListener("click",function(){
        sup_count--
        if(sup_count<0){sup_count=0}
        support_train.style.transform = `translateX(${-25*sup_count}%)`
        sup_cur_slide.innerHTML = sup_count+1
    })
}
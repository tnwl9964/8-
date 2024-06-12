window.onload = function(){
    let tab_dt = document.querySelectorAll(".tabmenu>dt")

    for(let i=0 ; i<3 ; i++){
        tab_dt[i].addEventListener("click",function(){
            tab_dt[0].classList.remove("on")
            tab_dt[1].classList.remove("on")
            tab_dt[2].classList.remove("on")
            tab_dt[i].classList.add("on")    
        })        
    } 


    // tab_dt[1].addEventListener("click",function(){
    //     tab_dt[0].classList.remove("on")
    //     tab_dt[1].classList.remove("on")
    //     tab_dt[2].classList.remove("on")
    //     tab_dt[1].classList.add("on")
    // }) 
    // tab_dt[2].addEventListener("click",function(){
    //     tab_dt[0].classList.remove("on")
    //     tab_dt[1].classList.remove("on")
    //     tab_dt[2].classList.remove("on")
    //     tab_dt[2].classList.add("on")
    // })        
    
}
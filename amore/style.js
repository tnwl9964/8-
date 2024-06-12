window.onload = function(){
    //채용공고 탭메뉴
    // mytab(".bbs_tab")
    // mytab(".tab_menu")

    function my_tab(classname){
        let bbs_tab_dt = document.querySelectorAll(classname+">dt")
        for(let i=0 ; i<bbs_tab_dt.length ; i++){
            bbs_tab_dt[i].addEventListener("click",function(){
                for(let j=0 ; j<bbs_tab_dt.length ; j++){
                    bbs_tab_dt[j].classList.remove("on")
                }
                bbs_tab_dt[i].classList.add("on")
            }) 
    }

    // let bbs_tab_dt = document.querySelectorAll(".bbs_tab>dt")
    // for(let i=0 ; i<bbs_tab_dt.length ; i++){
    //     bbs_tab_dt[i].addEventListener("click",function(){
    //         bbs_tab_dt[0].classList.remove("on")
    //         bbs_tab_dt[1].classList.remove("on")
    //         bbs_tab_dt[2].classList.remove("on")
    //         bbs_tab_dt[i].classList.add("on") 
    //     })                   
    // }    
    // //인재상 탭메뉴
    // let tab_menu_dt = document.querySelectorAll(".tab_menu>dt")
    // for(let i=0 ; i<2 ; i++){
    //     tab_menu_dt[i].addEventListener("click",function(){
    //         tab_menu_dt[0].classList.remove("on")
    //         tab_menu_dt[1].classList.remove("on")
    //         tab_menu_dt[i].classList.add("on") 
    //     })                   
    // } 

}
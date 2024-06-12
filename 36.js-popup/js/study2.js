window.onload = function(){

    let open_popup = document.querySelector(".open_popup")
    let popup = document.querySelector(".popup")
    let bth_close_popup = document.querySelector(".bth_close_popup")

    open_popup.addEventListener("click",function(){
        popup.classList.add("show")
    })
    
    //닫기버튼을 누르면 팝업이 닫히도록
    bth_close_popup.addEventListener("click",function(e){
        e.preventDefault()//기본기능삭제
        popup.classList.remove("show")
    })
}
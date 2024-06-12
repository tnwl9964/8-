window.onload = function(){
    //닫기버튼을 눌렀을 떄 팝업클래스 태그에게 hide클래스가 추가가 되어서 안 보이도록.
    let bth_close_popup = document.querySelector(".bth_close_popup")
    let popup = document.querySelector(".popup")

    bth_close_popup.addEventListener("click",function(event){
        event.preventDefault()//기본기능삭제  
        popup.classList.add("hide")
    })
}
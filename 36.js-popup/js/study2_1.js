$(document).ready(function(){
    $(".open_popup").click(function(){
        $(".popup").addClass("show")
    })
    $(".bth_close_popup").click(function(){
        $(".popup").removeClass("show")
    })
})
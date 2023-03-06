//$("li").hide()
//$("h1").hide()

//$(document).ready(() =>{
$(()=>{
    //selectores:
    // id  = "el-1 => #el-1"
    //$("#le-1").hide()

    $(".hide-btn").click(() =>{
        $("h1").fadeOut()
    })
    $(".show-btn").click(() =>{
        $("h1").fadeIn()
    })

    $("li").dblclick(()=>{
        $("h1").css({ color : "blue"})
    })

    $(".new-element").click(()=>{
        //$("ul").append("<li>New Elment</li>")
        $("ul").prepend("<li>New Elment</li>")
    })

    $("li").mouseenter((elem)=>{
        elem.target.style.color="red"
    })

    $("li").mouseleave((elem)=>{
        elem.target.style.color="black"
    })
})
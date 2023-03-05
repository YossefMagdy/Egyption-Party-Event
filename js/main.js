

$("#open").click(function(){
    console.log()
   if($("#navbar").outerWidth()==0){
    $("#navbar").animate({width:"250px"},1000)
    $("#open").animate({marginLeft:"250px"},1000)
    $(".heading h2,.heading p").animate({marginLeft:"250px"},1000)
   }
   else{
    $("#navbar").animate({width:"0"},1000)
    $("#open").animate({marginLeft:"0"},1000)
    $(".heading h2,.heading p").animate({marginLeft:"0"},1000)
   }
})

$("#close").click(function(){
    if($("#navbar").outerWidth()==0){
        $("#navbar").animate({width:"250px"},1000)
        $("#open").animate({marginLeft:"250px"},1000)
        $(".heading h2,.heading p").animate({marginLeft:"250px"},1000)
       }
       else{
        $("#navbar").animate({width:"0"},1000)
        $("#open").animate({marginLeft:"0"},1000)
        $(".heading h2,.heading p").animate({marginLeft:"0"},1000)
       }
})

$(".accordion").click(function (){
    let panel=this.nextElementSibling
    $(panel).css("max-height","auto")
    console.log( panel.scrollHeight)
    if(panel.style.maxHeight){
        panel.style.maxHeight=null;
    }
    else{
        panel.style.maxHeight=panel.scrollHeight+"px"
    }
})


function countdown(){
    let CurrentDate=new Date()
    let EventDate=new Date("04/1/2023")
    let diff=EventDate.getTime()-CurrentDate.getTime()

    var s = Math.floor(diff / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) ;


    h %= 24;
    m %= 60;
    s %= 60;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

   $(".days").html(`<p><span>${d}</span> D</p>`)
   $(".hours").html(`<p><span>${h}</span> H</p>`)
   $(".minute").html(`<p><span>${m}</span> M</p>`)
   $(".second").html(`<p><span>${s}</span> S</p>`)

   setTimeout(countdown,1000)
   
}

countdown()

$("#massage").keyup(function(){
    let count=100;
    let Mlength=$("#massage").val().length
    if(count-Mlength < 0){
        $("#massage").attr("disabled","")

    }
    document.getElementById("range").innerHTML=`
    <span class="text-danger fw-bold">${count-Mlength}</span> Character Reamining<
    `
})

$(".nav-link").click(function(){
    let Href=this.getAttribute("href")
    let sectionOff=$(Href).offset().top
    $("html,body").animate({scrollTop:sectionOff},{duration:1000,queue:false})
    $(this).addClass("active")
    $(".nav-link").not(this).removeClass("active")
    
})
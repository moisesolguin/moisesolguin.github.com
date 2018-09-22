// alert("bienvenido");
let Elementlist = document.querySelectorAll(".fa-thumbs-up");

Elementlist.forEach(function(element){
    element.addEventListener('click',function(){
        // alert("like");
        element.classList.remove("far");
        element.classList.add("fas");
    })
})
let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener('click',function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("bounceInRight");
        content.classList.add("animated");
        content.classList.add("bounceOutRight");
        setTimeout(() => {
            location.href="https://moisesolguin.github.io/ranking/";
        },500);

    })
})

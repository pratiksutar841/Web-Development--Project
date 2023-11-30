const container = document.querySelector(".container");
const input = document.querySelector(".search");
const button = document.getElementById("_button");
const serachIcon = document.querySelector(".fa-search");
const crossIcon = document.querySelector(".fa-times");


button.addEventListener("click",()=>{

    container.classList.toggle("active");
    button.classList.toggle("active");

    if(container.classList.contains("active")){
        serachIcon.style.opacity = 0;
        crossIcon.style.opacity = 1;
    }else{
        serachIcon.style.opacity = 1;
        crossIcon.style.opacity = 0;
    }

    input.focus();

});

const scrollIndicator = document.getElementById("scrollIndicator");

const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

function updateScrollIndicator(){
    const scrollPercentage = (window.scrollY/totalScrollHeight) * 100;
    scrollIndicator.style.width = scrollPercentage + "%";
}

window.addEventListener("scroll",updateScrollIndicator);

updateScrollIndicator();

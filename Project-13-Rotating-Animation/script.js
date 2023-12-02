const squares = document.querySelectorAll(".squares");

squares.forEach((square,index)=>{
        square.style.borderWidth = (index + 1) * 4 + "px";
        square.style.animationName = `rotate-${index}`;

        const degree = (index + 1) * 360 *2;

        const animation = document.createElement("style");
        animation.innerHTML = `@keyframes rotate-${index}{
            to{
                transform:translate(-50%,-50%) rotate(${degree}deg);
                border-radius: 50%;
                opacity:0.1;
                border: 60px solid #b9ff73;
            }
        }`;

        document.body.appendChild(animation);

});
let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){


    let date = new Date();
    //console.log(date);

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
   // console.log(hh,mm,ss);

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    console.log(hRotation,mRotation,sRotation);

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;


}
setInterval(displayTime,1000);
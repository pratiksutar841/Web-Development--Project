let celsius = document.getElementById('celsius');
let fahernheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahernheit.value = parseFloat(output.toFixed(2));
}
function FarTocel(){
    let output = ( parseFloat(fahernheit.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}

// function FarTokel(){
//     let output = ( parseFloat(fahernheit.value) - 32) * 5/9 + 273.15;
//     celsius.value = parseFloat(output.toFixed(2));
//     console.log(output);
// }
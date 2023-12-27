let celsius = document.getElementById('celsius');
let kelvin = document.getElementById("kelvin");

function celTokel(){
    let output = ( parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(output.toFixed(2));
}
function kelTocel(){
    let output = ( parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(output.toFixed(2));
}
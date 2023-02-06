function fahrenheitToCelsius() {
    let f = parseFloat(document.getElementById("fahrenheit").value);
    let c = 5 / 9 * (f - 32);
    document.getElementById("ftoc").innerHTML = c.toFixed(0) + "&deg" + "C";
}
function celsiusToFahrenheit() {
    let c = parseFloat(document.getElementById("celsius").value);
    let f = (9 / 5 * c) + 32;
    document.getElementById("ctof").innerHTML = f.toFixed(0) + "&deg" + "F";

}
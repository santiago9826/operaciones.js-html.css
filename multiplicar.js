function multiplicar() {
    let num1 = parseInt(document.getElementById("numero1").value)
    let num2 = parseInt(document.getElementById("numero2").value)

    let multiplicar = num1 * num2;
    //mostrar el resultado
    document.getElementById("resultado").textContent = "la multiplicacion es:" + multiplicar;

}
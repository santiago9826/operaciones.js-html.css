function dividir() {
    let num1 = parseInt(document.getElementById("numero1").value)
    let num2 = parseInt(document.getElementById("numero2").value)

    let dividir = num1 / num2;
    //mostrar el resultado
    document.getElementById("resultado").textContent = "la division es:" + dividir;

}
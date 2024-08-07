function somar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var res = numero1 + numero2;
    var escreveRes = window.document.getElementById("resul")
    escreveRes.innerHTML = `O resultado da operação é: ${res}`
    escreveRes.style.textAlign = "center"
    escreveRes.style.border = "dotted 2px yellow"
}

function subtrair() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var res = numero1 - numero2;
    var escreveRes = window.document.getElementById("resul")
    escreveRes.innerHTML = `O resultado da operação é: ${res}`
    escreveRes.style.textAlign = "center"
    escreveRes.style.border = "dotted 2px yellow"
}

function multiplicar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var res = numero1 * numero2;
    var escreveRes = window.document.getElementById("resul")
    escreveRes.innerHTML = `O resultado da operação é: ${res}`
    escreveRes.style.textAlign = "center"
    escreveRes.style.border = "dotted 2px yellow"
}

function dividir() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var res = numero1 / numero2;
    var escreveRes = window.document.getElementById("resul")
    escreveRes.innerHTML = `O resultado da operação é: ${res}`
    escreveRes.style.textAlign = "center"
    escreveRes.style.border = "dotted 2px yellow"
}


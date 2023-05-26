function contar() {
  var resultadoElement = document.getElementById('resultado');
  resultadoElement.style.visibility = 'visible';

  var contador = 1;
  var intervalo = setInterval(function() {
    resultadoElement.innerHTML = contador;
    contador++;

    if (contador > 10) {
      clearInterval(intervalo);
    }
  }, 1000);
}

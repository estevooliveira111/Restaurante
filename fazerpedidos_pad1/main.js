var $checkbox = document.querySelector('checkbox')

$checkbox.onclick = function() {
    var nome = prompt('Qual é o seu nome?');
    alert('Olá ' + nome + ', é um prazer te ver!');
  }

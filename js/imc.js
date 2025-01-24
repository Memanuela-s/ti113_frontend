let botao = document.querySelector("#btnmostrar");
botao.addEventListener("click", mostrarvalores);
 
function mostrarvalores() {
    let pessoa = {
        nome: document.querySelector('#txtnome').value,
        altura: parseFloat(document.querySelector('#txtaltura').value),
        peso: parseFloat(document.querySelector('#txtpeso').value),
    };
 
    let imc = parseFloat(pessoa.peso) / Math.pow(pessoa.altura * pessoa.altura, 2);
 
    let mensagem = `
    <br><br>
    Nome: <strong>${pessoa.nome}</strong><br>
    Seu IMC é <strong>${imc.toFixed(2)}</strong>.<br>`;
 
 
  let div = document.querySelector("#imc");
    div.innerHTML = mensagem;
 
}
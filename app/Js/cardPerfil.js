const btn = document.querySelector("#btnPerfil")
const btnVoltar = document.querySelector("#btnVoltar")
const modal = document.querySelector("#modalPerfil")
const btnconfirmarUsuario = document.querySelector("#confirmarUsuario")
var usuarioCadastrados = JSON.parse(localStorage.getItem("dadosUsuario"));

btn.onclick = function () {
    modal.classList.remove('d-none')

}
btnVoltar.onclick = function () {
    modal.classList.add('d-none')
}

btnconfirmarUsuario.onclick = function () {
    var infUsuario = document.getElementsByName('infUsuario')
    var nomeDigitado = infUsuario[0].value
    var senhaDigitada = infUsuario[1].value
    var email = ""
    var img = ""
    var nomeOuEmail = false
    var senha = false

    
    console.log(usuarioCadastrados)

    usuarioCadastrados.forEach(function (usuario){
        if(nomeDigitado === usuario.nome || nomeDigitado === usuario.email){
            nomeOuEmail = true
        }
        if(senhaDigitada === usuario.senha){
            nomeDigitado = usuario.nome
            email = usuario.email
            img = usuario.img
            senha = true
        }
    })
    if(!nomeOuEmail || !senha){
        alert('Erro. senha ou nome de usuario errado')
    }

    if (nomeOuEmail && senha) {
        modal.innerHTML =
            `<dialog class="modalPerfil" id="modalPerfil">
    <img id="kkkk" src="${img}" alt="">
    <h2>${nomeDigitado}</h2>
    <p>${email}</p>
    <button class="btnPerfil">Suporte</button>
    <button class="btnPerfil">Configuração</button>
    <button class="btnPerfil">Editar Perfil</button>
    <button id="btnVoltar">Voltar</button>
  </dialog>`;
        document.querySelector("#btnVoltar").onclick = function () {
            modal.classList.add('d-none');
        };
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("confirmarUsuario");
    const btnSair = document.getElementById("btnVoltar");
    const inputUsuario = document.querySelector(".inputUsuario[type='text']");
    const inputSenha = document.querySelector(".inputUsuario[type='password']");
    const modal = document.getElementById("modalPerfil");
  
    function verificarLogin() {
      let usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
      if (usuarioLogado) {
        document.querySelector("barra-nav").innerHTML = `<p>Bem-vindo, ${usuarioLogado.nome}</p>`;
      }
    }
  
    btnLogin.addEventListener("click", () => {
      let usuario = { nome: inputUsuario.value };
      localStorage.setItem("usuario", JSON.stringify(usuario));
      modal.classList.add("d-none");
      verificarLogin();
    });
  
    btnSair.addEventListener("click", () => {
      localStorage.removeItem("usuario");
      location.reload();
    });
  
    verificarLogin();
  });
  
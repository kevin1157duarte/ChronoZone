var btn2 = document.querySelector('#botao2')
var btn1 = document.querySelector('#botao1')

btn2.onclick = function () {

    var comunidade = document.querySelector('#articleDaComunidade')
    var postagem = document.querySelector('#articleDePostagem')

    postagem.classList.toggle('d-none')
    comunidade.classList.toggle('d-none')

    if (btn2.textContent === 'Comunidade') {
        btn2.textContent = 'Post'
        btn1.textContent = 'Comunidade'
    } else {
        btn2.textContent = 'Comunidade'
        btn1.textContent = 'Post'
    }
}
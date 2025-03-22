const btnAdicionarPost = document.querySelector("#btnAdicionarPost")  
const btnCancelarPost = document.querySelector("#btnCancelarPost")
const modalPostagem = document.querySelector("#modalPost")   

btnAdicionarPost.onclick = function(){
    modalPostagem.classList.remove('d-none')

}
btnCancelarPost.onclick = function(){
    modalPostagem.classList.add('d-none')
}


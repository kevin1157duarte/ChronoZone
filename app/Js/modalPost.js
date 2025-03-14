const btnAdicionarPost = document.querySelector("#btnAdicionarPost")  
const btnCancelarPost = document.querySelector("#btnCancelarPost")
const modalPostagem = document.querySelector("#modalPost")   

btnAdicionarPost.onclick = function(){
    modalPostagem.showModal()  

}
btnCancelarPost.onclick = function(){
    modalPostagem.close()
}
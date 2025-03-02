const btn = document.querySelector("#btnPerfil")  
const btnVoltar = document.querySelector("#btnVoltar")
const modal = document.querySelector("#modalPerfil")   

btn.onclick = function(){
    modal.showModal()  
}
btnVoltar.onclick = function(){
    modal.close()
}
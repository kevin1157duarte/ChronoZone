const btn = document.querySelector("#btnPerfil")  
const btnVoltar = document.querySelector("#btnVoltar")
const modal = document.querySelector("#modalPerfil")   

btn.onclick = function(){
    modal.classList.remove('d-none')
    
}
btnVoltar.onclick = function(){
    modal.classList.add('d-none')
}
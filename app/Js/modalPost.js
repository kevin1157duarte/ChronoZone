const btnAdicionarPost = document.querySelector("#btnAdicionarPost")  
const btnCancelarPost = document.querySelector("#btnCancelarPost")
const modalPostagem = document.querySelector("#modalPost")   

btnAdicionarPost.onclick = function(){
    modalPostagem.classList.remove('d-none')

}
btnCancelarPost.onclick = function(){
    modalPostagem.classList.add('d-none')
}

class PostRecommend extends HTMLElement {
    connectedCallback(){
        const nome = this.getAttribute("nome");
        const imagem = this.getAttribute("imagem");
        const texto = this.getAttribute("texto");

        this.innerHTML = `
        <div class="post"> 
              <div class="divImg">
                <img class="imgPerfil rounded-circle" src="${imagem}" alt="">
              </div>
              <div>
                <h5>${nome}</h5>
                <p>${texto}</p>
                
              </div>
            </div>
        `;
    }
}

class PostComponent extends HTMLElement {
    connectedCallback() {
        const nome = this.getAttribute("nome");
        const imagem = this.getAttribute("imagem");
        const texto = this.getAttribute("texto");
        const topic = this.getAttribute("tag")

        this.innerHTML = `
            <div class="post">
                <div class="divImg">
                    <img class="imgPerfil rounded-circle" src="${imagem}" alt="${nome}">
                </div>
                <div>
                    <h5>${nome}</h5>
                    <p>${texto}</p>
                    <span class="badge rounded-pill text-bg-secondary">${topic}</span>    
                </div>
            </div>
        `;
    }
}
customElements.define("post-component", PostComponent);
customElements.define("post-recommend", PostRecommend);
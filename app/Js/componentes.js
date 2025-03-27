
/*-------------------------------------- 
    Componente De Poste Recomendados
---------------------------------------*/
class PostRecommend extends HTMLElement {
    connectedCallback() {
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
customElements.define("post-recommend", PostRecommend);

/*-------------------------------------- 
    Componente De Poste 
---------------------------------------*/
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

/*-------------------------------------- 
    Componente De Poste Grande 
---------------------------------------*/
class PostCompletoUsuario extends HTMLElement {
    connectedCallback() {

        const nome = this.getAttribute("nome");
        const video = this.getAttribute("video");
        const texto = this.getAttribute("texto");
        const yt = this.getAttribute("YouTube");
        const ytTitulo = this.getAttribute("Titulo do YouTube"); 

        if(yt === null){
            this.innerHTML = `
                <div class="row postComunidade">
                    <div class="col-3">
                        <video id="iframePost" controls>
                            <source src="${video}" type="video/mp4">
                                Seu navegador não suporta vídeos.
                            </video>
                        </div>
                            <div class="col-9">
                                <div class="divTxtPost">
                                    <h5>${nome}</h5>
                                <p>${texto}</p>
                                </div>
                                <div class="divBtnInteracao">
                                    10mil<img src="Imagens/imgLike.svg" class="BtnInteragir" alt="">
                                    <button type="button" class="btn-outline-primary BtnInteragir">Curtir</button>
                                    <button type="button" class="btn-outline-primary BtnInteragir">Compartilhar</button>
                                    <button type="button" class="btn-outline-danger BtnInteragir">Denuciar</button>
                                </div>
                            </div>                               
                        </div>`;
        }else{
            this.innerHTML = `<div class="row postComunidade">
                                <div class="col-3">
                                    <iframe id="iframePost" src="${yt}"
                                        title="${ytTitulo}"></iframe>
                                </div>
                                <div class="col-9">
                                    <div class="divTxtPost">
                                        <h5>${nome}</h5>
                                        <p>${texto}</p>
                                    </div>
                                    
                                    <div class="divBtnInteracao">
                                        10mil<img src="Imagens/imgLike.svg" class="BtnInteragir" alt="">
                                        <button type="button" class="btn-outline-primary BtnInteragir">Curtir</button>
                                        <button type="button" class="btn-outline-primary BtnInteragir">Compartilhar</button>
                                        <button type="button" class="btn-outline-danger BtnInteragir">Denuciar</button>
                                    </div>
                                </div>
                            </div>`
        }
    }
}
customElements.define("post-completo-usuario", PostCompletoUsuario);

document.addEventListener("click", (e) => {
    if (e.target.closest("post-component")) {
      let post = e.target.closest("post-component");
      let titulo = post.getAttribute("tag");
      let texto = post.getAttribute("texto");
  
      sessionStorage.setItem("postSelecionado", JSON.stringify({ titulo, texto }));
      window.location.href = "postagem.html";
    }
  });
  
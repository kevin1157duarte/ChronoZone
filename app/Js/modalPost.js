const btnAdicionarPost = document.querySelector("#btnAdicionarPost")  
const btnCancelarPost = document.querySelector("#btnCancelarPost")
const modalPostagem = document.querySelector("#modalPost")   

btnAdicionarPost.onclick = function(){
    modalPostagem.classList.remove('d-none')

}
btnCancelarPost.onclick = function(){
    modalPostagem.classList.add('d-none')
}

document.addEventListener("DOMContentLoaded", () => {
    const btnCriarPost = document.getElementById("btnCriarPost");
    const inpTitulo = document.getElementById("inpTitulo");
    const inpAssunto = document.getElementById("inpAssunto");
    const areaDePosts = document.getElementById("comentariosSemanais");
  
    function salvarPost(titulo, texto) {
      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push({ titulo, texto });
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  
    function carregarPosts() {
      areaDePosts.innerHTML = "";
      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.forEach(post => {
        let postHtml = `
          <post-component nome="Usuário" imagem="Imagens/kkkk.jpg" texto="${post.texto}" tag="${post.titulo}"></post-component>
        `;
        areaDePosts.innerHTML += postHtml;
      });
    }
  
    btnCriarPost.addEventListener("click", () => {
      if (inpTitulo.value && inpAssunto.value) {
        salvarPost(inpTitulo.value, inpAssunto.value);
        carregarPosts();
        inpTitulo.value = "";
        inpAssunto.value = "";
      }
    });
  
    carregarPosts();
  });
  


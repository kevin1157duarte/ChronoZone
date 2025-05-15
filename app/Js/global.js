
/*-------------------------------------- 
    Componente Barra de Navegação
---------------------------------------*/
class BarraNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<nav id="barraDeBusca" class="navbar navbar-light bg-light"> <!--Configuração da Barra de Navegação-->
      <div id="btnMenuNav"><span class="material-icons">menu</span></div>
    <div id="logo">
      <img src="Imagens/ChronoZoneIMG.jpg" alt="">
      <a class="navbar-brand">ChronoZone</a>
    </div>
    <form class="form-inline mx-auto">
      <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar!</button>
    </form>
    <button id="btnAdicionarPost" type="button">+</button>
    <button id="btnPerfil">
      <img src="Imagens/Sem_Foto_Perfil_v2.jpg" alt="">
    </button>
  </nav>`
    const logo = this.querySelector('#logo');
    logo.addEventListener('click', this.homePage);

    const btnMenuNav = this.querySelector('#btnMenuNav')
    const divMenu = document.querySelector('.asideMenu')
    const divPrincipal = document.querySelector('.main')

    btnMenuNav.onclick = function () {

      const dentroMenu = document.querySelector('#dentroMenu')

      if (divPrincipal.classList.contains('col-9')) {
        divPrincipal.classList.toggle('col-9')
      } else {
        divPrincipal.classList.toggle('col-12')
      }
      divMenu.classList.toggle('d-none')
      dentroMenu.style.display = "block";
      btnMenuNav.style.display = "none";

    }
  }
  homePage() {
    location.href = './index.html';
  }
}
customElements.define("barra-nav", BarraNav);

/*-------------------------------------- 
                Menu Lateral
---------------------------------------*/

class MenuLateral extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <div id="dentroMenu">

          <div id="btnMenu"><span class="material-icons">menu</span></div>

          <h3><span class="material-icons" style="margin-inline: 10px;">rocket_launch</span>
            Lançamento</h3>
          <p data-tipo="1">Filmes</p>
          <p data-tipo="2">Serie</p>
          <p data-tipo="3">Animes</p>
          <p data-tipo="4">Jogos</p>

          <h3><span class="material-icons" style="margin-inline: 10px;">movie</span>
            Filmes</h3>
          <p data-tipo="5">Top 10</p>
          <p data-tipo="6">Em Cartaz</p>
          <p data-tipo="7">Dublados</p>
          <p data-tipo="8">Legendados</p>

          <h3><span class="material-icons" style="margin-inline: 10px;">tv</span>
            Series</h3>
          <p data-tipo="9">Top 10</p>
          <p data-tipo="10">Semanal</p>
          <p data-tipo="11">Dublados</p>
          <p data-tipo="12">Legendados</p>

          <h3><span class="material-icons" style="margin-inline: 10px;">sports_esports</span>
            Animes</h3>
          <p data-tipo="13">Top 10</p>
          <p data-tipo="14">Dublados</p>
          <p data-tipo="15">Legendados</p>
          <p data-tipo="16">Calendario</p>

          <h3><span class="material-icons" style="margin-inline: 10px;">videogame_asset</span>
            Jogos</h3>
          <p data-tipo="17">Noticias</p>
          <p data-tipo="18">Exclusivos para XBOX</p>
          <p data-tipo="19">Exclusivos para PS</p>
          <p data-tipo="20">Exclusivos para PC</p>
          <p data-tipo="21">Campeonatos</p>

          <h3><span class="material-icons" style="margin-inline: 10px;">info</span>Sobre</h3>
          <p>Historia do Site</p>
          <p>Direitos Reservados</p>
        </div>
      `;


    const menuItems = this.querySelectorAll('p')
    menuItems.forEach(item => {
      item.addEventListener('click', (event) => this.handleClick(event))
    });

    const btnMenu = this.querySelector('#btnMenu')
    const btnMenuNav = document.querySelector('#btnMenuNav')
    const dentroMenu = this.querySelector('#dentroMenu')
    const divMenu = document.querySelector('.asideMenu')
    const divPrincipal = document.querySelector('.main')

    btnMenu.onclick = function () {
      if (divMenu.classList.contains('col-2')) {
        dentroMenu.style.display = "none";
        btnMenuNav.style.display = "block";
        divMenu.classList.toggle('d-none')
        if (divPrincipal.classList.contains('col-10')) {
          divPrincipal.classList.toggle('col-12')
        } else {
          divPrincipal.classList.toggle('col-9')
        }
      }
    }
  }
  handleClick(event) {
    const catalogo = event.target.getAttribute('data-tipo');
    location.href = `./telaDePost${catalogo}.html`;
  }
}
customElements.define("menu-lateral", MenuLateral)
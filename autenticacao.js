document.addEventListener("DOMContentLoaded", () => {
    // Cadastro
    document.querySelector('#signupModal .btn-success')?.addEventListener('click', () => {
      const nome = document.querySelector('#signupModal input[placeholder="Nome completo"]')?.value;
      const email = document.querySelector('#signupModal input[placeholder="Email"]')?.value;
      const senha = document.querySelector('#signupModal input[placeholder="Senha"]')?.value;
  
      if (nome && email && senha) {
        const usuario = { nome, email, senha };
        localStorage.setItem('usuarioFandom', JSON.stringify(usuario));
        alert('Cadastro realizado com sucesso!');
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signupModal'));
        modal?.hide();
      } else {
        alert('Preencha todos os campos.');
      }
    });
  
    // Login
    document.querySelector('#loginModal .btn-primary')?.addEventListener('click', () => {
      const email = document.querySelector('#loginModal input[placeholder="Email"]')?.value;
      const senha = document.querySelector('#loginModal input[placeholder="Senha"]')?.value;
      const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioFandom'));
  
      if (usuarioSalvo && email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioSalvo));
        alert('Login realizado com sucesso!');
        const modal = bootstrap.Modal.getInstance(document.querySelector('#loginModal'));
        modal?.hide();
        location.reload();
      } else {
        alert('Email ou senha incorretos.');
      }
    });
  
    // Mostrar botão de perfil no menu e substituir login/cadastro
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    if (usuarioLogado) {
      // Sidebar (menu esquerdo)
      const sidebar = document.getElementById('sidebar');
      const perfilBtn = document.createElement('div');
      perfilBtn.innerHTML = ``;
      sidebar.appendChild(perfilBtn);
  
      document.getElementById('btnSair')?.addEventListener('click', () => {
        sessionStorage.removeItem('usuarioLogado');
        location.reload();
      });
  
      // Navbar (topo)
      const navbarRight = document.getElementById('navbar-user-area');
      if (navbarRight) {
            navbarRight.innerHTML = `
            <div class="d-flex align-items-center gap-2">
                <a href="criar-post.html" class="btn btn-success btn-sm">+ Criar</a>
                <div class="dropdown">
                <button class="btn btn-outline-light btn-sm dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    ${usuarioLogado.nome}
                </button>
                <ul class="dropdown-menu dropdown-menu-end bg-dark text-white" aria-labelledby="userDropdown">
                    <li><a class="dropdown-item text-white" href="perfil.html">Meu Perfil</a></li>
                    <li><a class="dropdown-item text-danger" href="#" id="btnSairDropdown">Sair</a></li>
                </ul>
                </div>
            </div>`;
      }
  
      document.getElementById('btnSairDropdown')?.addEventListener('click', () => {
        sessionStorage.removeItem('usuarioLogado');
        location.reload();
      });
    }
  
    // Redirecionar para postagens com filtro por gênero
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', event => {
        const genero = item.textContent.trim();
        if (item.getAttribute('href') === '#') {
          event.preventDefault();
          window.location.href = `postagens.html?genero=${encodeURIComponent(genero)}`;

        }
      });
    });
  });
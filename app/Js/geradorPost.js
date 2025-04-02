const urlParametro = new URLSearchParams(window.location.search)
const pagina = urlParametro.get('pagina')
const categoria = urlParametro.get('categoria')
const titulo = document.getElementById('titulo')

document.addEventListener("DOMContentLoaded", function () {
    const AreaDePostagem = document.querySelector('#AreaDePostagem')
    titulo.innerText = categoria

    if (pagina == 1) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="CineFanático 🎬" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Os cinemas estão pegando fogo! 🔥 ‘Duna: Parte 2’ chega com visuais incríveis, enquanto ‘Deadpool & Wolverine’ promete ação e humor sem limites. Qual lançamento você está mais ansioso para assistir? 🍿🎥"></post-component-seg>
    
    <post-component-seg nome="Cinéfilo de Plantão 🎞️" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🚀 ‘Planeta dos Macacos: O Reinado’ promete revolucionar a franquia! Será que vai superar os anteriores? E ainda tem ‘Joker 2’ chegando… O hype está altíssimo! Quem mais está ansioso? 🤯🎭"></post-component-seg>

    <post-component-seg nome="Tela Quente 🎬" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🍿 Sexta-feira perfeita: amigos, pipoca e uma superestreia! ‘O Auto da Compadecida 2’ vem aí, trazendo nostalgia e risadas. Já garantiu seu ingresso? 😂🎟️"></post-component-seg>


            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 2) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

            <post-component-seg nome="Viciado em Séries 📺" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🔥 ‘The Boys’ está voltando com a nova temporada e parece que o caos vai ser ainda maior! Será que o Capitão Pátria finalmente será parado? Quem mais tá contando os dias? 🤯💥"></post-component-seg>

<post-component-seg nome="Maratonando Sempre 🍿" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="📢 ‘Stranger Things 5’ está chegando! Os irmãos Duffer prometeram um final épico… Quem você acha que não vai sobreviver até o fim? 😨⚡"></post-component-seg>

<post-component-seg nome="Couch Potato 🛋️" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🧙‍♂️ ‘Harry Potter’ vai ganhar uma série! A Warner confirmou um reboot da saga com novos atores. Será que vai superar os filmes? Ou é melhor deixar quieto? ⚡📖"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 3) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Otaku HYPADO 🍥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🔥 ‘Solo Leveling’ chegou e tá quebrando tudo! A adaptação do webtoon finalmente está no ar, e o primeiro episódio já deixou todo mundo sem fôlego! Alguém mais ansioso pelo próximo? ⚔️😱"></post-component-seg>

<post-component-seg nome="Senpai Informado 🎌" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="👀 ‘Jujutsu Kaisen: Temporada 3’ confirmada! O arco do Incidente de Shibuya deixou muita gente traumatizada, e agora é hora de ver o que vem por aí. Quem tá pronto pra mais emoções? 🌀🔥"></post-component-seg>

<post-component-seg nome="Waifu Hunter 💖" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="💫 ‘Re:Zero – Temporada 3’ está a caminho! Subaru e Emilia terão novos desafios pela frente, e os fãs mal podem esperar para mais momentos de arrepiar! Quem tá no hype? ⏳❄️"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 4) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Gamer Antenado 🎮" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🔥 ‘GTA VI’ finalmente tem data de lançamento! A Rockstar promete um mundo ainda mais vivo e detalhado. Será que vai bater os recordes de vendas? 🚗💥"></post-component-seg>

<post-component-seg nome="Player 1 Pronto 🕹️" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="👾 ‘Hollow Knight: Silksong’ está chegando! Depois de anos de espera, o novo capítulo dessa aventura desafiadora está quase aí. Quem mais tá hypado? 🐞⚔️"></post-component-seg>

<post-component-seg nome="Fã de RPG 🎭" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🗡️ ‘Elden Ring: Shadow of the Erdtree’ foi anunciado! A DLC promete expandir ainda mais o mundo sombrio e desafiador criado por Miyazaki e George R.R. Martin. Prontos para morrer de novo? ☠️🔥"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 5) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Cinéfilo Crítico 🎬" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🍿 ‘Vingadores: Guerras Secretas’ dominou as bilheteiras e trouxe um dos maiores eventos da Marvel! Cenas épicas, reviravoltas insanas e um elenco de peso! Já assistiu ou tá esperando pra ver? 🦸‍♂️🔥"></post-component-seg>

<post-component-seg nome="Tela Quente 🔥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🚀 ‘Interestelar 2’ foi uma viagem emocionante pelo espaço-tempo! Christopher Nolan fez de novo: um roteiro genial, visuais impressionantes e uma trilha sonora arrepiante! Um verdadeiro espetáculo! 🌌🎶"></post-component-seg>

<post-component-seg nome="Fã de Ação 💥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="💣 ‘John Wick 5’ elevou a ação para outro nível! Keanu Reeves está de volta com cenas insanas, coreografias impecáveis e uma trama eletrizante! Quem mais saiu do cinema querendo lutar? 🥋🔫"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 6) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Cinéfilo Empolgado 🎥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🍿 ‘Godzilla x Kong: O Novo Império’ já está em cartaz! A batalha dos titãs está ainda mais épica, cheia de ação e efeitos especiais insanos! Quem você acha que leva a melhor dessa vez? 🦖⚡🦍"></post-component-seg>

<post-component-seg nome="Fã de Terror 👻" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="😱 ‘Invocação do Mal: O Último Ritual’ está dando o que falar! A história mais assustadora da franquia promete arrepios e sustos inesperados! Você teria coragem de assistir no cinema? 🔦👀"></post-component-seg>

<post-component-seg nome="Amante da Comédia 😂" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🎭 ‘Se Beber, Não Case 4’ já chegou aos cinemas trazendo risadas garantidas! O trio mais louco das telonas está de volta com novas confusões e momentos hilários! Quem aí já assistiu? 🍻🤣"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 7) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Fã de Ação 🔥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="💥 ‘Missão: Impossível - Acerto de Contas Parte 1’ está disponível dublado e cheio de adrenalina! Tom Cruise volta como Ethan Hunt em uma missão eletrizante! Quem mais ama essa franquia? 🎬😎"></post-component-seg>

<post-component-seg nome="Geek Cinéfilo 🎮🎥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🦇 ‘Batman: O Destino de Gotham’ chegou dublado e está imperdível! Uma animação sombria e envolvente que mostra um lado diferente do Cavaleiro das Trevas! Você já assistiu? 🦸‍♂️🎭"></post-component-seg>

<post-component-seg nome="Fã de Sci-Fi 🚀" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🌌 ‘Duna: Parte Dois’ é um dos melhores filmes de 2024 e já pode ser assistido dublado! A continuação épica traz visuais incríveis e uma história envolvente! Quem aí está pronto para Arrakis? 🎞️🔥"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 8) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

               <post-component-seg nome="Cinéfilo Cult 🎭" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🎬 ‘Oppenheimer’ segue impressionando e só pode ser assistido legendado! A obra-prima de Christopher Nolan traz uma experiência intensa sobre a criação da bomba atômica! Você já viu? 💥🕰️"></post-component-seg>

<post-component-seg nome="Amante de Drama 🎭" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🌿 ‘Pobres Criaturas’ é um filme que merece ser visto legendado! Com atuações incríveis e um visual único, essa história surreal é um dos destaques do ano! Quem já conferiu? 🎥🖤"></post-component-seg>

<post-component-seg nome="Sci-Fi Lover 🚀" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🚀 ‘Zona de Interesse’ é um filme impactante que só está disponível legendado! Uma história profunda e intensa que traz reflexões sobre a humanidade! Você assistiria? 🎞️🔥"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 9) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Séries Mania 📺" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🔥 ‘The Last of Us’ continua sendo um fenômeno! A adaptação do famoso jogo emocionou o público com sua história envolvente e atuações impecáveis. Já assistiu? 🎮❤️"></post-component-seg>

<post-component-seg nome="Maratonando Séries 🎬" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="👑 ‘One Piece (Live Action)’ surpreendeu a todos e se tornou uma das séries mais assistidas! A Netflix acertou na adaptação do anime! Você já embarcou nessa aventura? 🏴‍☠️⚓"></post-component-seg>

<post-component-seg nome="Série Viciados 🍿" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🕵️‍♂️ ‘Reacher’ conquistou o público com sua trama cheia de ação e mistério! A série é viciante e tem uma base de fãs gigantesca. Já deu uma chance para ela? 🔥🎥"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 10) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Séries da Semana 📅" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="⚔️ ‘House of the Dragon’ está deixando os fãs ansiosos toda semana! A guerra entre os Targaryen está cada vez mais intensa. Quem você acha que sairá vitorioso? 🔥🐉"></post-component-seg>

<post-component-seg nome="Ansiedade Toda Semana 😬" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="💥 ‘The Boys’ está de volta com episódios semanais cheios de ação, sangue e humor ácido! Cada semana traz uma nova reviravolta. Você está acompanhando? 🦸‍♂️⚡"></post-component-seg>

<post-component-seg nome="Toda Semana um Choque! 😱" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="👀 ‘Shogun’ está conquistando os fãs de dramas históricos! Cada novo episódio mergulha ainda mais no Japão feudal com uma trama intensa e cinematográfica. Já começou a assistir? 🎎⚔️"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 11) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Ação e Mistério Dublado! 🎭" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🔍 ‘Lupin’ chegou totalmente dublado! A série do ladrão mais carismático da TV está cheia de reviravoltas. Se você curte um bom suspense, essa é pra você! 🎩💎"></post-component-seg>

<post-component-seg nome="Ficção de Qualidade! 🚀" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🌌 ‘Fundação’ está disponível dublada para quem ama ficção científica com uma trama complexa e visual incrível! Imperdível para os fãs do gênero. 🤖📖"></post-component-seg>

<post-component-seg nome="Drama e Emoção! 😢" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🎶 ‘This Is Us’ conquistou o coração de muitos e está toda dublada! Prepare-se para se emocionar com essa história incrível de família e destino. ❤️👨‍👩‍👦"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 12) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Suspense de Tirar o Fôlego! 🔥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="😱 ‘The Bear’ continua impressionando com sua trama intensa e atuações incríveis! Disponível apenas legendado, essa série vai prender sua atenção do começo ao fim. 👨‍🍳🔥"></post-component-seg>

<post-component-seg nome="Ficção Científica Imperdível! 🚀" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🌍 ‘Silo’ é uma distopia cheia de mistérios e segredos! Para quem gosta de sci-fi e thrillers envolventes, essa série legendada é uma ótima escolha! 🏗️🔎"></post-component-seg>

<post-component-seg nome="Mistério e Drama! 🕵️‍♂️" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="📜 ‘The Regime’ traz uma trama política cheia de tensão e atuações impecáveis! Se você curte séries legendadas com histórias profundas, vale a pena conferir! 🎭👑"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 13) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Ação e Fantasia! ⚔️🔥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="⚔️ ‘Solo Leveling’ chegou com tudo! Um anime repleto de batalhas épicas e uma animação incrível. Se você gosta de protagonistas overpower, não pode perder! 💀💪"></post-component-seg>

<post-component-seg nome="Aventura Épica! 🌊🏴‍☠️" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🏴‍☠️ ‘One Piece’ continua sua jornada incrível com novos episódios eletrizantes! Luffy e sua tripulação estão mais perto do tesouro lendário. 🌊☠️"></post-component-seg>

<post-component-seg nome="Mistério e Sobrenatural! 👁️🕵️‍♂️" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🔮 ‘Jujutsu Kaisen’ está com uma temporada intensa e cheia de reviravoltas! Prepare-se para confrontos épicos e muita emoção no mundo dos feiticeiros! 🌀🔥"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 14) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Aventura com dublagem top! 🎭⚔️" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="⚔️ ‘Kimetsu no Yaiba’ agora está totalmente dublado! A luta dos Caçadores de Onis nunca foi tão emocionante! Você já conferiu essa versão? 🔥🎙️"></post-component-seg>

<post-component-seg nome="Shonen dublado com emoção! 💥🎤" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="💪 ‘Boku no Hero Academia’ ganhou uma dublagem incrível! A jornada de Deku para se tornar o maior herói está mais épica do que nunca! 🏆💥"></post-component-seg>

<post-component-seg nome="Mistério e ação em português! 🕵️‍♂️🌑" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="👁️ ‘Death Note’ está disponível dublado! Um dos animes mais inteligentes e cheios de suspense agora pode ser assistido sem legenda! Você prefere legendado ou dublado? 🤔🎙️"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 15) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="Novo anime de fantasia! ✨🐉" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🌿 ‘Mushoku Tensei: Jobless Reincarnation II’ continua sua jornada emocionante, mas ainda sem dublagem! Vale a pena assistir legendado? 🎞️🔮"></post-component-seg>

<post-component-seg nome="Anime de ação eletrizante! ⚔️🔥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="💥 ‘Solo Leveling’ estreou e está conquistando o mundo! Mas por enquanto, só temos legendado! A animação está incrível, já assistiu? 🖤👊"></post-component-seg>

<post-component-seg nome="Aventura e comédia pura! 🎭🌀" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="🤣 ‘One Piece’ segue firme com novos episódios legendados! A dublagem brasileira ainda vai demorar... você aguenta esperar? ⚓🏴‍☠️"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 16) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="📅 Calendário de lançamentos de abril! 🌸" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="A temporada de primavera chegou com tudo! Confira os animes que estreiam este mês, incluindo ‘Kimetsu no Yaiba: Arco do Treinamento Hashira’! 🔥⚔️"></post-component-seg>

<post-component-seg nome="🕒 Qual o próximo episódio? 🤔" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Quer saber quando sai o próximo episódio do seu anime favorito? Veja o cronograma semanal com datas e horários das estreias! 🖥️🎥"></post-component-seg>

<post-component-seg nome="📢 Animes confirmados para 2025! 🚀" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Já temos uma lista dos animes mais aguardados para 2025! ‘Jujutsu Kaisen 3’, ‘Chainsaw Man 2’ e muito mais! Veja o calendário completo! 🖤👊"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 17) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="🎮 GTA 6 tem novo trailer! 🚗💥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="A Rockstar Games liberou mais um trailer de GTA 6, mostrando detalhes inéditos do mapa e da história! Assista agora e veja as novidades! 🔥🎥"></post-component-seg>

<post-component-seg nome="🕹️ Elden Ring DLC confirmado! 🏹🐉" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="A FromSoftware anunciou oficialmente a DLC ‘Shadow of the Erdtree’ para Elden Ring! Confira a data de lançamento e os novos desafios! ⚔️✨"></post-component-seg>

<post-component-seg nome="🎧 Xbox Game Pass ganha novos jogos! 📦" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Confira a lista de jogos que chegam ao Xbox Game Pass este mês! Tem títulos incríveis, incluindo alguns lançamentos! 🟢🎮"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 18) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="🔥 Starfield: Uma Aventura Espacial Incrível! 🚀" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="O RPG espacial da Bethesda já está disponível no Xbox! Explore galáxias, descubra novos planetas e crie sua própria história no universo! 🌌✨"></post-component-seg>

<post-component-seg nome="⚔️ Hellblade 2: Sequência Épica a Caminho! 🎭" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Senua está de volta em uma jornada intensa e emocional! Hellblade 2 promete gráficos incríveis e uma narrativa ainda mais imersiva! 🌀🔥"></post-component-seg>

<post-component-seg nome="🏎️ Forza Motorsport: A Nova Geração da Velocidade! 🏁" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Com gráficos ultra-realistas e física aprimorada, Forza Motorsport redefine os simuladores de corrida! Prepare-se para acelerar! 🚗💨"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 19) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="🕷️ Marvel's Spider-Man 2: O Retorno do Aranha! 🕸️" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Peter Parker e Miles Morales unem forças para enfrentar Venom e novas ameaças em Nova York! Um dos jogos mais esperados do PlayStation! 🦸‍♂️🔥"></post-component-seg>

<post-component-seg nome="⚔️ God of War Ragnarok: Kratos Contra o Destino! ❄️" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="A jornada final de Kratos e Atreus nos Nove Reinos! Prepare-se para batalhas épicas contra deuses e o fim dos tempos! 🏹🛡️"></post-component-seg>

<post-component-seg nome="🎭 The Last of Us Part II Remastered: Mais Imersão! 🎮" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="O premiado jogo retorna com melhorias gráficas e um novo modo! Reviva a jornada de Ellie e Joel com ainda mais detalhes! 🌎💔"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 20) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="🎭 Baldur's Gate 3: O RPG do Ano! 🏆" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Monte seu grupo, tome decisões impactantes e explore o vasto mundo de Dungeons & Dragons neste aclamado RPG! ⚔️🧙‍♂️"></post-component-seg>

<post-component-seg nome="🚀 Star Citizen: A Evolução dos Espaço-sims! 🌌" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Uma galáxia imensa para explorar, batalhas intensas e comércio interplanetário! O jogo mais ambicioso da história! 🛰️💫"></post-component-seg>

<post-component-seg nome="🔫 Escape from Tarkov: Sobrevivência Intensa! 🎯" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Loot, estratégia e combate realista! Você consegue escapar das zonas de guerra de Tarkov e levar seu saque? 🎒🔥"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else if (pagina == 21) {
        AreaDePostagem.innerHTML +=`
            <article class=" container-fluid" id="articleDaComunidade">

                <post-component-seg nome="🔥 Mundial de League of Legends 2025! 🏆" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="As melhores equipes do mundo vão disputar o título de campeão! Quem levará a Summoner’s Cup este ano? ⚔️🎮"></post-component-seg>

<post-component-seg nome="🎯 Major de CS2: A Batalha Começou! 💥" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Os melhores times do mundo estão prontos para a disputa no torneio mais prestigiado de Counter-Strike! Quem será o campeão? 🎖️"></post-component-seg>

<post-component-seg nome="🚗 Rocket League Championship Series! ⚽🚀" imagem="Imagens/Sem_Foto_Perfil_v2.jpg"  
    texto="Carros turbinados, jogadas incríveis e disputas acirradas! O torneio mais eletrizante de Rocket League está pegando fogo! 🔥"></post-component-seg>

            </article>

            <!------------------Area da POST---------------------------------->
            <article class="d-none container-fluid" id="articleDePostagem">

                <!--------------------------- Post do Usuario --------------------------------->
                <post-completo-usuario video="video/Renan_Desesperado.mp4" nome="Kevin23 Duarte"
                        texto="A cara de Medo do Renan..."></post-completo-usuario>

                <post-completo-usuario YouTube="https://www.youtube.com/embed/_Wt9iBO1glA" ytTitulo="teste 1111"
                        nome="Kevin77" texto="lorem5"></post-completo-usuario>
            </article>`;
    } else{
        alert('Erro. Pagina nao encontrada')
    }
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
});


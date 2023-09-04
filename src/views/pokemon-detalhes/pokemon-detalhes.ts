import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import './pokemon-detalhes.css';

class PokemonDetalhes {
  formPrincipal: HTMLFormElement;
  txtPesquisa: HTMLInputElement;
  btnVoltar: HTMLButtonElement;

  pnlConteudo: HTMLDivElement;

  private pokemonService: PokemonService;

  constructor() {
    this.pokemonService = new PokemonService();
    this.registrarElementos();
    this.registrarEventos();

    const url = new URLSearchParams(window.location.search);
    const nome = url.get('nome') as string;

    this.procurarPorNome(nome);
  }

  registrarElementos(): void {
    this.formPrincipal = document.getElementById("formPrincipal") as HTMLFormElement;
    this.txtPesquisa = document.getElementById("txtPesquisa") as HTMLInputElement;
    this.btnVoltar = document.getElementById("btnVoltar") as HTMLButtonElement;
    this.pnlConteudo = document.getElementById("pnlConteudo") as HTMLDivElement;
  }

  registrarEventos(): void {
    this.formPrincipal
      .addEventListener('submit', (sender) => this.buscar(sender));
    
    this.btnVoltar
      .addEventListener('click', () => window.location.href = 'index.html');
  }

  buscar(sender: Event): void {
    sender.preventDefault();
    
    if (!this.txtPesquisa.value) return;

    this.txtPesquisa.value = '';
    
    this.procurarPorNome(this.txtPesquisa.value);
  }
  
  private procurarPorNome(nome: string): void {
    this.pokemonService.selecionarPokemonPorNome(nome)
      .then(pokemon => this.gerarCard(pokemon))
      .catch((erro: Error) => this.exibirNotificacao(erro));
  }

  limparCard() {
    this.pnlConteudo.querySelector('.card-pokemon')?.remove();
  }

  private gerarCard(pokemon: Pokemon): void {
    const lblId = document.createElement("p");
    const lblNome = document.createElement("p");
    const imgSprite = document.createElement("img");

    lblId.textContent = pokemon.id.toString();
    lblNome.textContent = pokemon.nome;
    imgSprite.src = pokemon.spriteUrl;

    const pnlPokemon = document.createElement('div');
    pnlPokemon.classList.add('card-pokemon');

    pnlPokemon.appendChild(lblId);
    pnlPokemon.appendChild(lblNome);
    pnlPokemon.appendChild(imgSprite);

    this.pnlConteudo.appendChild(pnlPokemon);
  }

  private exibirNotificacao(erro: Error): void {
    const divNotificacao = document.createElement('div'); 

    divNotificacao.textContent = erro.message;
    divNotificacao.classList.add('notificacao');

    divNotificacao
      .addEventListener('click', (sender: Event) => {
        (sender.target as HTMLElement).remove()
      });
      
    document.body.appendChild(divNotificacao);

    setTimeout(() => {
      divNotificacao.remove();
    }, 5000);
  }
}

window.addEventListener('load', () => new PokemonDetalhes())
//autocompletar do campo de busca

const input = document.getElementById('buscaPokemon');
const sugestoes = document.getElementById('sugestoes');

input.addEventListener('input', () => {
    const valorBusca = input.value.toLowerCase();
    sugestoes.innerHTML = '';

    if (valorBusca) {
        const nomesFiltrados = listaDePokemons.filter(pokemon => {
            return pokemon[1].toLowerCase().startsWith(valorBusca);
        });

        nomesFiltrados.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = pokemon[1];
            li.addEventListener('click', () => {
                input.value = li.textContent;
                sugestoes.innerHTML = '';
            });
            sugestoes.appendChild(li);
        });
    }
});

// Adiciona um event listener para o evento keydown no input
input.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
      const primeiraSugestao = sugestoes.querySelector('li');
      if (primeiraSugestao) {
          primeiraSugestao.click();
      }
  }
});

// Buscando pokemons

function pesquisar() {
  // Reinicia o conteúdo dos elementos antes de fazer a busca
  document.getElementById('resultado-pesquisa-numero').textContent = '';
  document.getElementById('resultado-pesquisa-foto-nome').querySelector('img').src = '';
  document.getElementById('resultado-pesquisa-foto-nome').querySelector('h4').textContent = '';
  document.getElementById('resultado-pesquisa-tipo').querySelector('.tipo1').textContent = '';
  document.getElementById('resultado-pesquisa-tipo').querySelector('.tipo2').textContent = '';

  // Também pode esconder temporariamente o resultado de tipo 2
  document.querySelector('.tipo2').style.display = 'none';

  // Obtém o valor da pesquisa e realiza a busca
  const nomePokemon = document.getElementById('buscaPokemon').value.toLowerCase();
  const pokemonEncontrado = listaDePokemons.find(pokemon => pokemon[1].toLowerCase() === nomePokemon);

  if (pokemonEncontrado) {
    // Atualiza o conteúdo com as informações do Pokémon encontrado
    document.getElementById('resultado-pesquisa-numero').textContent = pokemonEncontrado[0];
    document.getElementById('resultado-pesquisa-foto-nome').querySelector('img').src = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${pokemonEncontrado[0]}.png`;
    document.getElementById('resultado-pesquisa-foto-nome').querySelector('h4').textContent = pokemonEncontrado[1];
    document.getElementById('resultado-pesquisa-tipo').querySelector('.tipo1').textContent = pokemonEncontrado[2];
    document.getElementById('resultado-pesquisa-tipo').querySelector('.tipo2').textContent = pokemonEncontrado[3] ? pokemonEncontrado[3] : '-';

    // Configura as cores e visuais de acordo com os tipos do Pokémon
    const tipoUmPokemon = pokemonEncontrado[2];
    const elementoResultado = document.querySelector('.resultado__pesquisa');
    elementoResultado.style.borderColor = `var(--${tipoUmPokemon})`;
    const elementoTipoUm = document.querySelector('.tipo1');
    elementoTipoUm.style.backgroundColor = `var(--${tipoUmPokemon})`;

    if (['Poison', 'Flying', 'Water', 'Fighting', 'Ghost', 'Dragon'].includes(pokemonEncontrado[2])) {    
      elementoTipoUm.style.color = `white`;
    } else {
      elementoTipoUm.style.color = `black`;
    }

    const tipoDoisPokemon = pokemonEncontrado[3];
    const elementoTipoDois = document.querySelector('.tipo2');
    elementoTipoDois.style.display = tipoDoisPokemon ? '' : 'none';
    elementoTipoDois.style.backgroundColor = `var(--${tipoDoisPokemon})`;

    if (['Poison', 'Flying', 'Water', 'Fighting', 'Ghost', 'Dragon'].includes(pokemonEncontrado[3])) {    
      elementoTipoDois.style.color = `white`;
    } else {
      elementoTipoDois.style.color = `black`;
    }

    document.getElementById('direita').querySelector('h2').textContent = '';

  } else {
    // Limpa os elementos de resultado e exibe a mensagem de erro
    document.getElementById('resultado-pesquisa-numero').textContent = '';
    document.getElementById('resultado-pesquisa-foto-nome').querySelector('img').src = '';
    document.getElementById('resultado-pesquisa-tipo').querySelector('.tipo1').textContent = '';
    document.getElementById('resultado-pesquisa-tipo').querySelector('.tipo2').textContent = '';
    document.querySelector('.tipo2').style.display = 'none'; // Esconde o tipo 2 quando não há resultado
    document.getElementById('direita').querySelector('h2').textContent = '⚠️ Pokémon não encontrado.';
  }

  const divResultadoPesquisa = document.querySelector('.resultado__pesquisa');
  divResultadoPesquisa.classList.toggle('hidden', !pokemonEncontrado);

}

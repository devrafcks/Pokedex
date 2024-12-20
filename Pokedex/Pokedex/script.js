const urlApi = 'https://pokeapi.co/api/v2/pokemon';
const pokedexElement = document.querySelector('#pokedex');

const typeColors = {
    fire: '#f08030',
    grass: '#78c850',
    electric: '#f8d030',
    water: '#6890f0',
    ground: '#e0c068',
    rock: '#b8a038',
    fairy: '#ee99ac',
    poison: '#a040a0',
    bug: '#a8b820',
    dragon: '#7038f8',
    psychic: '#f85888',
    flying: '#a890f0',
    fighting: '#c03028',
    normal: '#a8a878',
    ice: '#98d8d8',
    ghost: '#705898',
    dark: '#705848',
    steel: '#b8b8d0',
};

const getPokemons = (amount) => {
    pokedexElement.innerHTML = ''; 

    for (let i = 1; i <= amount; i++) {
        fetch(`${urlApi}/${i}`)
            .then(response => response.json())
            .then(({ name, id, types, sprites }) => {
                const pokemonImage = sprites.other['official-artwork'].front_default;
                const pokemonType = types.map(typeInfo => typeInfo.type.name);
                const pokemonColor = typeColors[pokemonType[0]];
                const pokemonCard = document.createElement('div');
                pokemonCard.classList.add('pokemon-card');
                pokemonCard.style.backgroundColor = pokemonColor;

                pokemonCard.innerHTML = `
                    <img src="${pokemonImage}" alt="${name}">
                    <div class="pokemon-info">
                        <h2>${name} <span class="Id-pokemon">#${id}</span></h2>
                        <ul class="types">
                            ${pokemonType.map(type => `<li>${type}</li>`).join('')}
                        </ul>
                    </div>
                `;

                pokedexElement.appendChild(pokemonCard);
            })
    }
};

const pokemonCount = 150; 
getPokemons(pokemonCount);
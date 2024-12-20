# 📚 Pokedex em JavaScript  

Este projeto é uma **Pokédex** simples criada com **HTML**, **CSS** e **JavaScript** que consome a API [PokeAPI](https://pokeapi.co/) para exibir informações sobre os Pokémons, como seus nomes, tipos, IDs e sprites oficiais.  

---

## 🌟 Funcionalidades  

- **Lista de Pokémons**: Exibe até 150 Pokémons da API.  
- **Cores Dinâmicas**: A cor de fundo dos cards é definida pelo tipo primário do Pokémon.  
- **Sprites Oficiais**: Mostra a arte oficial do Pokémon fornecida pela API.  

---

## 🚀 Tecnologias Utilizadas  

- **HTML**: Estrutura da aplicação.  
- **CSS**: Estilização dos cards e layout.  
- **JavaScript**: Lógica de consumo da API e manipulação do DOM.  
- **API**: [PokeAPI](https://pokeapi.co/) para os dados dos Pokémons.

---

## 📂 Estrutura do Projeto  

### Principais Arquivos:  

- `index.html`: Contém a estrutura básica da aplicação.  
- `style.css`: Estilos aplicados para organizar e estilizar os elementos.  
- `script.js`: Código JavaScript para consumir a API e atualizar o DOM.  

### Funções Principais:

- **`getPokemons(amount)`**:  
  - Recebe como argumento o número de Pokémons a serem exibidos.  
  - Faz chamadas à API para buscar os detalhes de cada Pokémon.  
  - Atualiza o DOM com cards dinâmicos para cada Pokémon.  

- **`typeColors`**:  
  - Um objeto que associa tipos de Pokémon às suas respectivas cores para estilização.  

---

## 🔧 Como Usar  

1. Clone ou baixe o repositório.  
2. Abra o arquivo `index.html` em seu navegador.  
3. A aplicação carregará os primeiros 150 Pokémons automaticamente.  

---

## 🖼️ Exemplo de Card  

Cada card de Pokémon contém:  
- Sprite oficial do Pokémon.  
- Nome e ID.  
- Tipos exibidos em uma lista.  

---

## 🎨 Personalização  

- **Alterar o número de Pokémons**: Modifique a variável `pokemonCount` no arquivo `script.js` para o número desejado.  
- **Cores de tipos**: Adicione ou edite as cores no objeto `typeColors` para personalizar a paleta.  

---

const pokedex = document.querySelector('.pokedex')

for (let i = 1; i < 10 ; i++) {
    
    fetch('https://pokeapi.co/api/v2/pokemon/'+ i)
    
    .then(response => response.json())
    .then(json => {
    const pokemonName = document.createElement('p')
    pokemonName.textContent = json.name
    pokedex.appendChild(pokemonName)

    const pokemonImage = document.createElement('img')
    pokemonImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + i + ".svg"
    pokemonName.appendChild(pokemonImage)
    })

}


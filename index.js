const header= document.querySelector('header section')
const pokedex = document.querySelector('.pokedex')

const form= document.createElement('form')
form.innerHTML= "Select Pokemons"

const select= document.createElement('select')
const options= document.querySelectorAll('option')

const inputSearch= document.querySelectorAll('.search')

header.appendChild(form)
form.appendChild(select)

const pokemonArray= []
for (let i = 1; i < 10 ; i++) {
    fetch('https://pokeapi.co/api/v2/pokemon/'+ i)
    
    .then(response => response.json())
    .then(json => {
    var pokemons = document.createElement('section')
    pokedex.appendChild(pokemons)
    pokemons.setAttribute('class', 'pokemon')
    
    const pokemonNumber = document.createElement('h2')
    pokemonNumber.innerHTML = '#00'+ i
    pokemons.appendChild(pokemonNumber)
    
    const pokemonName = document.createElement('h3')
    pokemonName.textContent = json.name
    pokemons.appendChild(pokemonName)

    const pokemonImage = document.createElement('img')
    pokemonImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + i + ".svg"
    pokemonImage.style.width= "100px"
    pokemons.appendChild(pokemonImage)

    const pokemonType = document.createElement('p')
    pokemonType.textContent = "type :" + json.types[0].type.name;
    pokemons.appendChild(pokemonType)

    const pokemonWeight = document.createElement('p')
    pokemonWeight.textContent = "weight: " + json.weight + " kg"
    pokemons.appendChild(pokemonWeight)

    let arr= {}
    arr['nom'] = json.name
    arr['imgUrl'] = pokemonImage.src
    pokemonArray.push(arr)
    var option = document.createElement('option')
    select.appendChild(option)
    option.value= json.name
    option.innerHTML = json.name;
    })
}



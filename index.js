const header= document.querySelector('header section')
const pokedex = document.querySelector('.pokedex')
const inputSearch= document.querySelector('.searchBar')
const button= document.querySelector('button')

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
    console.log(pokemons.children[1].textContent[0])
    let arr= {}
    arr['nom'] = json.name
    arr['imgUrl'] = pokemonImage.src
    pokemonArray.push(arr)

    document.body.addEventListener('keydown', searchEvent)
    function searchEvent(){
    var x= event.keyCode;
    if (x === 13){
        pokemons.style.display = "block"
    if (inputSearch.value == "") {
        pokemons.style.display = "block"
    } 
    if (inputSearch.value !== pokemons.children[1].textContent) {
        pokemons.style.display = "none"
    }
}
}
    })
}

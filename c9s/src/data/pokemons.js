function getPokemons() {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
    .then(response => response.json())
    .then(data => data.results)
    .catch(err => console.error(err))
}

function getPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => data)
}

export {
    getPokemons,
    getPokemon
}
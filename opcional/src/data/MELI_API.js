const baseURI = 'https://api.mercadolibre.com/'

export function getCategories() {
    return fetch(baseURI+'sites/MLA/categories')
    .then(res => res.json())
    .then(data => data)
}

export function getCategoriDetail(id) {
    return fetch(baseURI+'categories/'+id)
    .then(res => res.json())
    .then(data => data)
}

export function getProductsByCategories(idCategoria) {
    return fetch(baseURI+"sites/MLA/search?category="+idCategoria)
    .then(res => res.json())
    .then(data => data.results)
}

export function queryProduct(name) {
    return fetch(baseURI+"sites/MLA/search?q="+name)
    .then(res => res.json())
    .then(data => data.results)
}

//service contenant les différentes requête vers l'API. getPage renvoie une page de 50 personnages en fonction du numéro de page
//getOne renvoie un personnag en fonction de l'id demandé
//getPage est appelée dans CharacterBrowser.js
//getOne est appelée dans RandomCharacter.js

export const getPage = async (numPage) => {
    const urlFetch = "https://api.disneyapi.dev/characters?page=" + numPage
    const response = await fetch(urlFetch)
    const data = await response.json()
    return data
}

export const getOne = async (id) => {
    const urlFetch = "https://api.disneyapi.dev/characters/" + id
    const response = await fetch(urlFetch)
    const data = await response.json()
    return data
}


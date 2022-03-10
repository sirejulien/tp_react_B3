
export const getPage = async (numPage) => {
    const urlFetch = "https://api.disneyapi.dev/characters?page=" + numPage
    const response = await fetch(urlFetch)
    const data = await response.json()
    return data
}

export const getOne = async () => {

}


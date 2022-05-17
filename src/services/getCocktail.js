import axios from "axios"

export const getCocktail = async(name) =>{
    const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    return res.data
}
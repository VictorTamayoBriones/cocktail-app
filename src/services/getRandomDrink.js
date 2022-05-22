import axios from "axios"

export const getRandomCocktail = async (letter) =>{
    const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    return res.data?.drinks;
}
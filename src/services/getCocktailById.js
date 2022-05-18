import axios from "axios"

export const getCocktailById = async (id) =>{
    const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    return res.data.drinks[0];
}
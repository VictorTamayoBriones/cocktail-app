import { useState, useEffect } from "react"
import { getCocktailById } from "../services/getCocktailById";

export const useGetCocktail=(id)=>{

    const [cocktail, setCocktail]=useState({});
    const [ingredients, setIngredients]=useState([])
    const [isLoading, setIsLoading]=useState(true);

    const getCocktail= async ()=>{
        setCocktail(await getCocktailById(id))
        setIsLoading(false)
    }
    
    const getIngredients=()=>{
        let arr = Object.entries(cocktail)
        let ingredientsArr = [arr.filter(tag => tag[0].includes("strIngredient") && tag[1] != null)];
        setTimeout(()=>{
            setIngredients(ingredientsArr)
        }, 1000)
    }
    
    
    useEffect(()=>{
        getCocktail()
    }, [])

    useEffect(()=>{
        !isLoading ? 
        getIngredients()
        : null
    }, [isLoading])
    return{
        cocktail,ingredients
    }
}
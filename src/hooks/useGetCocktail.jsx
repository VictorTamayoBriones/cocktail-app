import { useState, useEffect } from "react"
import { getCocktailById } from "../services/getCocktailById";

export const useGetCocktail=(id)=>{

    const [cocktail, setCocktail]=useState({});
    
    const getCocktail= async ()=>{
        setCocktail(await getCocktailById(id))
    }

    useEffect(()=>{
        getCocktail()
    }, [])

    return cocktail;
}
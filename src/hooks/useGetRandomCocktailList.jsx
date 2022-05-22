import { useState } from "react";
import { useEffect } from "react";
import { getRandomLetter } from "../helpers/getRandomLetter"
import { getRandomCocktail } from "../services/getRandomDrink";

export const useGetRandomCockTail = () =>{
    const [cocktailsRandom, setCocktailsRandom]=useState([]);
    const letter = getRandomLetter();

    const getRandomCocktails = async (letter) =>{
        setCocktailsRandom(await getRandomCocktail(letter))    
    }

    useEffect(()=>{    
        getRandomCocktails(letter)
    }, [])

    return cocktailsRandom
}
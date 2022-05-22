import { useContext, useEffect } from 'react';
import { TitleSection } from '../../components/TitleSection';
import { DrinksContext } from '../../context/drinks';
import { useGetRandomCockTail } from '../../hooks/useGetRandomCocktailList';
import { ListDrinks } from './components/ListDriks';

export const Home = () =>{
    const cocktailsRandom = useGetRandomCockTail();
    const { setDrinks } = useContext(DrinksContext)
    
    useEffect(()=>{
        setDrinks(cocktailsRandom)
    }, [cocktailsRandom])

    return(
        <>
            <TitleSection>Drinks</TitleSection>
            <ListDrinks/>
        </>
    )
}
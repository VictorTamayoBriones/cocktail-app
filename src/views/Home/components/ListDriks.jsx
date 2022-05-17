import { Drink } from '../../../components/Drink';
import styled from 'styled-components';
import { useContext } from 'react';
import { DrinksContext } from '../../../context/drinks';

export const ListDrinks = () =>{

    const { drinks } = useContext(DrinksContext);
    let drinksList = drinks.drinks
    return(
        <List>
            { drinksList.length > 0 ?
                drinksList.map( drink => (<Drink key={drink.idDrink} image={drink.strDrinkThumb} text={drink.strDrink} />) )
            : null }
        </List>
    )
}

export const List = styled.ul`
    width: 95%;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`
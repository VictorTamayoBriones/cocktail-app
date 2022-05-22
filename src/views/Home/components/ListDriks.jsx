import { Drink } from '../../../components/Drink';
import styled from 'styled-components';
import { useContext } from 'react';
import { DrinksContext } from '../../../context/drinks';

export const ListDrinks = () =>{

    const { drinks } = useContext(DrinksContext);
    
    return(
        <List>
            { drinks?.length > 0 ?
                drinks.map( drink => (<Drink key={drink.idDrink} image={drink.strDrinkThumb} text={drink.strDrink} idDrink={drink.idDrink}/>) )
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
import mojito from '../../../assets/images/mojito.png';
import { Drink } from '../../../components/Drink';
import styled from 'styled-components';

export const ListDrinks = () =>{
    return(
        <List>
            <Drink image={mojito} text="Mojito" />
            <Drink image={mojito} text="Mojito" />
            <Drink image={mojito} text="Mojito" />
            <Drink image={mojito} text="Mojito" />
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
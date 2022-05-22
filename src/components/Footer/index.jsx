import logo from '../../assets/images/favicon.png';
import { theme } from '../../theme';
import styled from 'styled-components';

export const Footer = () =>{
    return(
        <Container>
            <p>Powered by the cocktail db</p>
            <img src={logo} alt="" />
        </Container>
    )
}

const Container = styled.footer`
    width: 100%;
    background: ${ theme.mainColor };
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    color: #fff;
    margin-top: 20px;
    text-shadow: 
        -1px -1px 1px ${ theme.darkMainColor }, 
        1px 1px 1px ${ theme.darkMainColor },
        1px -1px 1px ${ theme.darkMainColor },
        -1px 1px 1px ${ theme.darkMainColor };

`;
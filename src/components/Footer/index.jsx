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
    position: absolute;
    bottom: 0;
    text-shadow: 
        -1px -1px 1px ${ theme.darkMainColor }, 
        1px 1px 1px ${ theme.darkMainColor },
        1px -1px 1px ${ theme.darkMainColor },
        -1px 1px 1px ${ theme.darkMainColor };

    @media (min-width: 1000px){
        position: relative;
        bottom: auto;
    }
`;
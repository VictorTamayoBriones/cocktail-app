import styled from 'styled-components';
import { theme } from '../../theme';

export const Details = styled.section`
    width: 95%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-weight: 700;
    
    .data{
        width: 45%;
        img{
            width: 100%;
        }
    }
    .ingredients{
        width: 45%;
    }

    ul{
        list-style: none;
        width: 100%;
    }

    .ingredientsList{
        width: 100%;
        ul{
            margin: 10px 0px;
            color: ${ theme.darkSecondaryColor };
            line-height: 28px;        
        }
    }

`;

export const Text = styled.p`
    margin: 10px 0px;
    color: ${ theme.darkSecondaryColor };
    line-height: 28px;
`;
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
    }
    .ingredients{
        width: 45%;
    }
`;

export const Text = styled.p`
    color: ${ theme.darkSecondaryColor }
`;
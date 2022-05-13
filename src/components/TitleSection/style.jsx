import styled from 'styled-components';
import { theme } from '../../theme';

export const Title = styled.h2`
    text-align: center;
    font-size: 50px;
    color: ${ theme.secondaryColor };
    margin: 25px 0px;
    text-shadow: 
        -1px -1px 1px ${ theme.amarillo }, 
        1px 1px 1px ${ theme.amarillo },
        1px -1px 1px ${ theme.amarillo },
        -1px 1px 1px ${ theme.amarillo },
        0px 0px 3px ${ theme.darkMainColor };
        letter-spacing: 2px;
`;
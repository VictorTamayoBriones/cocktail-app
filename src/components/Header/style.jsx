import styled from 'styled-components';
import { theme } from '../../theme';

export const HeaderContaienr = styled.div`
    width: 100%;
    height: 100px;
    background: ${ theme.mainColor };
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    button{
        position: absolute;
        left: 10px;
        background: none;
        border: none;
        width: 35px;
        height: 35px;
        cursor: pointer;
        &:hover{
            img{
                /* -webkit-filter: drop-shadow(1px 1px 1px black); */
                filter: drop-shadow(1px 1px 1px ${theme.darkMainColor}) drop-shadow(-1px -1px 1px ${theme.darkMainColor}) drop-shadow(1px 0px 1px ${theme.darkMainColor}) drop-shadow(0px 1px 1px ${theme.darkMainColor});
            }
        }
        img{
            width: 100%;
        }
    }
`;
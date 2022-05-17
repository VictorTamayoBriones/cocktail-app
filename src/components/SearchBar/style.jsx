import styled from 'styled-components';

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px 5px;
    border-radius: 5px;
    border: solid 1px white;
    background: transparent;
    font-size: 20px;
    color: white;
    outline: none;
    &::placeholder{
        color: #e8e8e8;
    }
`;

export const SearchContainer = styled.form`
    width: 95%;
    display: flex;
    align-items: center;
    position: relative;
    label{
        position: absolute;
        right: 30px;
        width: 25px;
        height: 25px;
        img{
            width: 100%;
            
        }
    }
`;
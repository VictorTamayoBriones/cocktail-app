import styled from 'styled-components';

export const DrinkCard = styled.div`
    width: 45%;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    transition: ease-in-out .3s ;
    position: relative;

    img{
        width: 100%;
        transform: scale(1.1);
    }

    .text{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 5%, rgba(255,255,255,0) 50%);
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding: 5px 0px;
        pointer-events: none;
        h3{
            color: #fff;
            letter-spacing: 1px;
            font-size: 20px;
        }
    }

    &:hover{
        box-shadow: 0px 0px 9px 2px #00000050;
        transform: translate3d(3px, -10px, 0px)
    }

    @media (min-width: 700px){
        width: 20%;
    }
`;
import { useLocation, useNavigate } from "react-router-dom"
import { SearchBar } from "../SearchBar"
import { TitleSection } from "../TitleSection";
import { HeaderContaienr } from "./style"
import arrow from '../../assets/icons/arrow-left.svg';

export const Header = () =>{
    const { pathname } = useLocation();
    const navigate = useNavigate()

    return(
        <HeaderContaienr>
            {pathname === "/" ? <SearchBar/> : (
                <>
                    <button onClick={()=>navigate("/")} ><img src={arrow}/></button>
                    <TitleSection>Cocktail App</TitleSection>
                </>
            )}
        </HeaderContaienr>
    )
}
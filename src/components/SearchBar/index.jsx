import { SearchContainer, SearchInput } from "./style"
import IconSearch from '../../assets/icons/search.svg';
import { useState } from "react";
import { getCocktailsList } from "../../services/getCocktailsList";
import { useContext } from "react";
import { DrinksContext } from '../../context/drinks';

export const SearchBar=()=>{
    const {setDrinks}=useContext(DrinksContext);
    const [search, setSearch]=useState('');

    const handleChange = ({target: {value}}) => setSearch(value);

    const handleSubmit=async (e, name)=>{
        e.preventDefault()
        let cocktails = await  getCocktailsList(name);
        await setDrinks(cocktails);
        setSearch('');
    }

    return(
        <SearchContainer onSubmit={(e)=>handleSubmit(e, search)} >
            <SearchInput type="text" placeholder="Search a drink..." value={search} onChange={handleChange} />
            <label><img src={IconSearch}/></label>
        </SearchContainer>
    )
}
import { SearchContainer, SearchInput } from "./style"
import IconSearch from '../../assets/icons/search.svg';

export const SearchBar=()=>{
    return(
        <SearchContainer>
            <SearchInput type="text" placeholder="Search a drink..."/>
            <label><img src={IconSearch}/></label>
        </SearchContainer>
    )
}